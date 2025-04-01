# Model Context Protocol Server

This is a Routine [Model Context Protocol (MCP)](https://modelcontextprotocol.io) server.

## Installation

```bash
# Install dependencies
yarn

# Build the project
yarn build
```

Then install the MCP server:

- Command: full path to `node` executable
- Arguments: full path to `./dist/index.js`

### Claude Desktop

For Claude Desktop, refer to https://modelcontextprotocol.io/quickstart/user

In particular, your file `claude_desktop_config.json` should look something like that:

```json
{
  "mcpServers": {
    "routine": {
      "command": "/absolute/path/to/bin/node",
      "args": ["/absolute/path/to/mcp-server/dist/index.js"]
    }
  }
}
```

## Usage

### Running the Routine controller

The Routine application must run for the MCP server to communicate with it.

### Running the MCP Server (development)

```bash
# Start the server
yarn start
```

The server communicates via stdin/stdout, following the MCP protocol. You can interact with it by sending JSON requests to its stdin and reading responses from stdout.
