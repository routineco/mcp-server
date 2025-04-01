#!/usr/bin/env node
import { format } from "util";

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { WebSocket } from "ws";

import { registerServerTools } from "./tools.js";

// Custom logger function that logs to both console and file
function log(level: string, ...args: any[]) {
  const timestamp = new Date().toISOString();
  const message = format(...args);
  const logMessage = `[${timestamp}] [${level}] ${message}`;

  // Log to console
  if (level === "ERROR") {
    console.error(logMessage);
  } else {
    console.log(logMessage);
  }
}

// Create logger convenience methods
const logger = {
  info: (...args: any[]) => log("INFO", ...args),
  error: (...args: any[]) => log("ERROR", ...args),
  debug: (...args: any[]) => log("DEBUG", ...args),
};

type rpcResponse = {
  client: string;
  rpc: {
    channel: number;
    response: { value: any };
  };
};

type rpcStartedResponse = {
  started: boolean;
};

type rpcLoginResponse = {
  login: boolean;
  accoutCreated: boolean;
};

// Log the start of the application
logger.info("=== MCP Server starting ===");

// Create the MCP server with stdio transport
async function main() {
  logger.info("Creating MCP server...");

  // Create server with name and version
  const server = new McpServer({
    name: "MCP Demo Server",
    version: "1.0.0",
  });
  logger.info("MCP Server created");

  // WebSocket connection
  let wsConnection: WebSocket | null = null;
  const rpcMap = new Map<number, (response: any) => void>();
  let rpcId = 0;
  logger.debug("Initial state: wsConnection=null, rpcMap=empty, rpcId=0");

  // Connect to WebSocket
  function connectWebsocket() {
    logger.info("Connecting to WebSocket at ws://localhost:8765...");
    const ws = new WebSocket("ws://localhost:8765");

    ws.on("open", () => {
      logger.info("WebSocket connection established");
      wsConnection = ws;
      logger.debug("Sending login message");
      ws.send(JSON.stringify({ login: { intention: "login" } }));
      logger.debug("Login message sent");
    });

    ws.on("message", (data) => {
      logger.debug("WebSocket message received");
      logger.debug("Raw data: %s", data.toString().substring(0, 200));
      try {
        const parsedData: rpcResponse | rpcStartedResponse | rpcLoginResponse =
          JSON.parse(data.toString());
        logger.debug("RPC response: %j", parsedData);
        logger.debug("RPC map: %j", rpcMap);
        if ("login" in parsedData) {
          logger.info("Login response: %j", parsedData);
        } else if ("started" in parsedData) {
          logger.info("Server started: ", parsedData.started);
        } else if (
          parsedData.client === "mcp-server" &&
          parsedData.rpc &&
          parsedData.rpc.channel !== undefined &&
          rpcMap.has(parsedData.rpc.channel)
        ) {
          const channel = parsedData.rpc.channel;
          logger.debug("Found handler for channel %d", channel);
          const handler = rpcMap.get(channel);
          if (handler) {
            logger.debug("Handling RPC response: %j", parsedData.rpc.response);
            handler(parsedData.rpc.response);
            // Remove one-time handlers after they're called
            rpcMap.delete(channel);
            logger.debug("Removed handler for channel %d", channel);
            logger.debug(
              "RPC map keys after removal: %s",
              Array.from(rpcMap.keys())
            );
          }
        } else {
          logger.debug(
            "Unexpected message or no handler found: %j",
            parsedData
          );
          if (parsedData.rpc && parsedData.rpc.channel) {
            logger.debug(
              "Channel %d not found in rpcMap",
              parsedData.rpc.channel
            );
            logger.debug("Available channels: %s", Array.from(rpcMap.keys()));
          }
        }
      } catch (error) {
        logger.error("Error processing WebSocket message: %o", error);
      }
    });

    ws.on("close", (code, reason) => {
      logger.info(
        "WebSocket connection closed (code: %d, reason: %s)",
        code,
        reason || "No reason provided"
      );
      wsConnection = null;
      logger.info("Attempting to reconnect in 5 seconds...");
      setTimeout(connectWebsocket, 5000);
    });

    ws.on("error", (err) => {
      logger.error("WebSocket error: %o", err);
      ws.close();
    });

    return ws;
  }

  // Initialize WebSocket connection
  connectWebsocket();

  // Function to send RPC request and get response
  async function sendRpcRequest(
    call: string,
    params?: Array<any>
  ): Promise<any> {
    logger.debug(
      "sendRpcRequest called with: call=%s, params=%j",
      call,
      params
    );
    logger.debug(
      "WebSocket readyState: %s",
      wsConnection ? wsConnection.readyState : "null"
    );

    return new Promise((resolve, reject) => {
      logger.debug("Inside Promise constructor");

      if (!wsConnection || wsConnection.readyState !== WebSocket.OPEN) {
        logger.error(
          "WebSocket connection not available, readyState: %s",
          wsConnection ? wsConnection.readyState : "null"
        );
        reject(new Error("WebSocket connection not available"));
        return;
      }

      const channel = rpcId++;
      logger.debug("Assigned channel: %d", channel);

      // Store the resolver in the rpcMap
      rpcMap.set(channel, resolve);
      logger.debug("Added handler to rpcMap for channel %d", channel);
      logger.debug("RPC map keys after adding: %s", Array.from(rpcMap.keys()));

      // Send the request
      const request = {
        client: "mcp-server",
        rpc: { channel, call, args: params },
      };

      logger.debug("Sending request: %j", request);
      try {
        wsConnection.send(JSON.stringify(request));
        logger.debug("Request sent successfully for channel %d", channel);
      } catch (error) {
        logger.error("Error sending WebSocket message: %o", error);
        rpcMap.delete(channel);
        logger.debug(
          "Removed handler for channel %d due to send error",
          channel
        );
        reject(new Error(`Failed to send WebSocket message: ${error}`));
        return;
      }

      // Set timeout to clean up if no response received
      logger.debug("Setting timeout for channel %d", channel);
      setTimeout(() => {
        if (rpcMap.has(channel)) {
          logger.error("RPC request timed out for channel %d", channel);
          rpcMap.delete(channel);
          logger.debug(
            "Removed handler for channel %d due to timeout",
            channel
          );
          reject(new Error(`RPC request timed out: ${call}`));
        } else {
          logger.debug(
            "Timeout handler called for channel %d, but handler already removed",
            channel
          );
        }
      }, 30000); // 30 seconds timeout
      logger.debug("Timeout set for channel %d", channel);
    });
  }

  try {
    logger.info("Registering tools...");

    registerServerTools(server, sendRpcRequest, logger);

    // Add a simple text resource
    server.resource("help", "help://main", async (uri) => ({
      contents: [
        {
          uri: uri.href,
          text: `# MCP Server Help\n\nThis server provides tools to interact with the Routine API via WebSocket RPC.`,
        },
      ],
    }));

    // Start the server with stdio transport
    logger.info("Starting MCP server on stdio...");
    const transport = new StdioServerTransport();
    await server.connect(transport);
    logger.info("MCP server started and ready to receive requests");
  } catch (error) {
    logger.error("Error starting MCP server: %o", error);
    process.exit(1);
  }
}

// Handle graceful shutdown
process.on("SIGINT", () => {
  logger.info("Server shutting down...");
  process.exit(0);
});

process.on("SIGTERM", () => {
  logger.info("Server shutting down...");
  process.exit(0);
});

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
  logger.error("Uncaught exception: %o", err);
  process.exit(1);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (reason, _promise) => {
  logger.error("Unhandled promise rejection: %o", reason);
  process.exit(1);
});

// Start the server
main().catch((err) => {
  logger.error("Uncaught error: %o", err);
  process.exit(1);
});
