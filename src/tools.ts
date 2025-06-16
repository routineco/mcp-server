import { z } from "zod";

/* This file was generated, do not edit manually */

export function registerServerTools(server, sendRpcRequest, logger) {
  server.tool("authProfile", "Main user identity.", {}, async ({}) => {
    try {
      const data = await sendRpcRequest("auth.profile", []);
      return {
        content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      };
    } catch (error) {
      logger.error("Error fetching auth.profile: %o", error);
      return {
        content: [
          {
            type: "text",
            text: `Error fetching auth id: ${error instanceof Error ? error.message : String(error)}`,
          },
        ],
        isError: true,
      };
    }
  });

  server.tool("calendarAll", "All calendars.", {}, async ({}) => {
    try {
      const data = await sendRpcRequest("calendar.all", []);
      return {
        content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      };
    } catch (error) {
      logger.error("Error fetching calendar.all: %o", error);
      return {
        content: [
          {
            type: "text",
            text: `Error fetching auth id: ${error instanceof Error ? error.message : String(error)}`,
          },
        ],
        isError: true,
      };
    }
  });

  server.tool(
    "calendarGet",
    "A calendar.",
    {
      /*
{"$id":"#calendar-id","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"}
*/ id: z.string(),
    },
    async ({ id }) => {
      try {
        const data = await sendRpcRequest("calendar.get", [id]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching calendar.get: %o", error);
        return {
          content: [
            {
              type: "text",
              text: `Error fetching auth id: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        };
      }
    }
  );

  server.tool(
    "eventDay",
    "The events on a given day.",
    {
      /*
{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$id":"#date","$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}
*/ date: z.tuple([z.number().int(), z.number().int(), z.number().int()]),

      /*
{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"only-all-day","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"with-all-day","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"without-all-day","type":"string"}],"$id":"#all_day_filter","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"}
*/ filter: z.union([
        z.literal("only-all-day"),
        z.literal("with-all-day"),
        z.literal("without-all-day"),
      ]),

      /*
{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"boolean"}
*/ secondary: z.boolean(),
    },
    async ({ date, filter, secondary }) => {
      try {
        const data = await sendRpcRequest("event.day", [
          date,
          filter,
          secondary,
        ]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching event.day: %o", error);
        return {
          content: [
            {
              type: "text",
              text: `Error fetching auth id: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        };
      }
    }
  );

  server.tool(
    "eventGet",
    "An event.",
    {
      /*
{"$id":"#event-id","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"}
*/ id: z.string(),
    },
    async ({ id }) => {
      try {
        const data = await sendRpcRequest("event.get", [id]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching event.get: %o", error);
        return {
          content: [
            {
              type: "text",
              text: `Error fetching auth id: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        };
      }
    }
  );

  server.tool(
    "eventTimeline",
    "Agenda view for a day.",
    {
      /*
{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$id":"#date","$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}
*/ date: z.tuple([z.number().int(), z.number().int(), z.number().int()]),
    },
    async ({ date }) => {
      try {
        const data = await sendRpcRequest("event.timeline", [date]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching event.timeline: %o", error);
        return {
          content: [
            {
              type: "text",
              text: `Error fetching auth id: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        };
      }
    }
  );

  server.tool("pageAll", "All pages.", {}, async ({}) => {
    try {
      const data = await sendRpcRequest("page.all", []);
      return {
        content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      };
    } catch (error) {
      logger.error("Error fetching page.all: %o", error);
      return {
        content: [
          {
            type: "text",
            text: `Error fetching auth id: ${error instanceof Error ? error.message : String(error)}`,
          },
        ],
        isError: true,
      };
    }
  });

  server.tool(
    "pageGet",
    "Get a page.",
    {
      /*
{"$id":"#page-id","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"}
*/ id: z.string(),
    },
    async ({ id }) => {
      try {
        const data = await sendRpcRequest("page.get", [id]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching page.get: %o", error);
        return {
          content: [
            {
              type: "text",
              text: `Error fetching auth id: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        };
      }
    }
  );

  server.tool(
    "peopleByEmail",
    "The potential contact owning this email address.",
    {
      /*
{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"}
*/ email: z.string(),
    },
    async ({ email }) => {
      try {
        const data = await sendRpcRequest("people.by_email", [email]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching people.by_email: %o", error);
        return {
          content: [
            {
              type: "text",
              text: `Error fetching auth id: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        };
      }
    }
  );

  server.tool(
    "peopleGet",
    "The contact with the given id.",
    {
      /*
{"$id":"#people-id","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"}
*/ id: z.string(),
    },
    async ({ id }) => {
      try {
        const data = await sendRpcRequest("people.get", [id]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching people.get: %o", error);
        return {
          content: [
            {
              type: "text",
              text: `Error fetching auth id: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        };
      }
    }
  );

  server.tool(
    "taskComplete",
    "Complete a task.",
    {
      /*
{"$id":"#task-id","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"}
*/ id: z.string(),
    },
    async ({ id }) => {
      try {
        const data = await sendRpcRequest("task.complete", [id]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching task.complete: %o", error);
        return {
          content: [
            {
              type: "text",
              text: `Error fetching auth id: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        };
      }
    }
  );

  server.tool(
    "taskCreateSimple",
    "Create a task (simplified for MCP). Usually you only need to pass the title. Do not try to pass the integration_id or distant_task_id.",
    {
      /*
{"additionalProperties":false,"properties":{"ignored":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Ignored","default":null,"type":["null","string"]},"completed":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Completed","default":null,"type":["null","string"]},"integration_id":{"$id":"#integration-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Integration_id","type":"string"},"distant_task_id":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Distant_task_id","type":"string"},"integration_data":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Integration_data","default":null,"type":"null"},"occurrence":{"additionalProperties":false,"properties":{"date":{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$id":"#date","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Date","type":"array"},"recurrence":{"$id":"#task-rec-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Recurrence","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Occurrence","default":null,"type":["null","object"]},"parent":{"additionalProperties":false,"properties":{"kind":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"event","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"event-rec","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"page","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"people","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"task","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"task-rec","type":"string"}],"$id":"#kind","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Kind","type":"string"},"id":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Parent","default":null,"type":["null","object"]},"scheduled":{"anyOf":[{"type":"null"},{"additionalProperties":false,"properties":{"year":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Year","type":"integer"},"n":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"N","type":"integer"}},"$id":"#week","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date"}],"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Scheduled","default":null,"type":["null","object"]},"starred":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Starred","default":false,"type":"boolean"},"notes":{"additionalProperties":false,"properties":{"blocks":{"items":{"anyOf":[{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"blockquote","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"bullet","type":"string"},"list_type":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"ordered","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"unordered","type":"string"}],"$id":"#block-list-type","$schema":"https://json-schema.org/draft/2019-09/schema","title":"List_type","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"depth":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Depth","default":0,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"check","type":"string"},"checked":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Checked","type":"boolean"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"code","type":"string"},"language":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Language","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"callout","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"divider","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"embed","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"heading","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"level":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Level","type":"integer"},"retracted":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Retracted","default":false,"type":"boolean"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"paragraph","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"query","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"recurrent_task","type":"string"},"recurrent_task_id":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#task-rec-id","title":"Recurrent_task_id"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"recurrence":{"anyOf":[{"additionalProperties":false,"properties":{"start":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Start"},"count":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Count","type":"integer"},"rule":{"anyOf":[{"additionalProperties":false,"properties":{"every":{"const":"day","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"month","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"items":[{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"monday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"tuesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"wednesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"thursday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"friday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"saturday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"sunday","type":"string"}],"$id":"#weekday","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}],"$id":"#month_day","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":["array","integer"]}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"week","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"weekdays":{"additionalProperties":false,"properties":{"monday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Monday","default":false,"type":"boolean"},"tuesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Tuesday","default":false,"type":"boolean"},"wednesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Wednesday","default":false,"type":"boolean"},"thursday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Thursday","default":false,"type":"boolean"},"friday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Friday","default":false,"type":"boolean"},"saturday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Saturday","default":false,"type":"boolean"},"sunday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Sunday","default":false,"type":"boolean"}},"$id":"#weekdays","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Weekdays","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"workday","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"year","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":"integer"},"month":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"january","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"february","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"march","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"april","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"may","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"june","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"july","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"august","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"september","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"october","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"november","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"december","type":"string"}],"$id":"#month","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Month","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#rule","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Rule","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"end":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"End"},"start":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Start"},"rule":{"anyOf":[{"additionalProperties":false,"properties":{"every":{"const":"day","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"month","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"items":[{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"monday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"tuesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"wednesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"thursday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"friday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"saturday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"sunday","type":"string"}],"$id":"#weekday","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}],"$id":"#month_day","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":["array","integer"]}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"week","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"weekdays":{"additionalProperties":false,"properties":{"monday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Monday","default":false,"type":"boolean"},"tuesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Tuesday","default":false,"type":"boolean"},"wednesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Wednesday","default":false,"type":"boolean"},"thursday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Thursday","default":false,"type":"boolean"},"friday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Friday","default":false,"type":"boolean"},"saturday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Saturday","default":false,"type":"boolean"},"sunday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Sunday","default":false,"type":"boolean"}},"$id":"#weekdays","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Weekdays","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"workday","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"year","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":"integer"},"month":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"january","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"february","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"march","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"april","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"may","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"june","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"july","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"august","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"september","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"october","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"november","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"december","type":"string"}],"$id":"#month","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Month","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#rule","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Rule","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"}],"$id":"#recurrence","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Recurrence","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"todo","type":"string"},"checked":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Checked","type":"boolean"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"task":{"$id":"#task-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Task","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"}],"$id":"#block","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Blocks","type":"array"}},"$id":"#document","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Notes","default":{"blocks":[]},"type":"object"},"title":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Title","type":"string"},"url":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Url","default":null,"type":["null","string"]}},"$id":"#task-read","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}
*/ task: z
        .object({
          ignored: z.union([z.null(), z.string()]).default(null),
          completed: z.union([z.null(), z.string()]).default(null),
          integration_id: z.string().optional(),
          distant_task_id: z.string().optional(),
          integration_data: z.null().default(null),
          occurrence: z
            .union([
              z.null(),
              z
                .object({
                  date: z
                    .tuple([
                      z.number().int(),
                      z.number().int(),
                      z.number().int(),
                    ])
                    .optional(),
                  recurrence: z.string().optional(),
                })
                .strict(),
            ])
            .default(null),
          parent: z
            .union([
              z.null(),
              z
                .object({
                  kind: z
                    .union([
                      z.literal("event"),
                      z.literal("event-rec"),
                      z.literal("page"),
                      z.literal("people"),
                      z.literal("task"),
                      z.literal("task-rec"),
                    ])
                    .optional(),
                  id: z.string().optional(),
                })
                .strict(),
            ])
            .default(null),
          scheduled: z
            .union([
              z.null(),
              z
                .object({
                  year: z.number().int().optional(),
                  n: z.number().int().optional(),
                })
                .strict(),
              z.any(),
            ])
            .default(null),
          starred: z.boolean().default(false),
          notes: z
            .object({
              blocks: z
                .array(
                  z.record(z.any()).and(
                    z.union([
                      z
                        .object({
                          id: z.string().optional(),
                          type: z.literal("blockquote").optional(),
                          content: z.string().optional(),
                        })
                        .strict(),
                      z
                        .object({
                          id: z.string().optional(),
                          type: z.literal("bullet").optional(),
                          list_type: z
                            .union([
                              z.literal("ordered"),
                              z.literal("unordered"),
                            ])
                            .optional(),
                          content: z.string().optional(),
                          depth: z.number().int().default(0),
                        })
                        .strict(),
                      z
                        .object({
                          id: z.string().optional(),
                          type: z.literal("check").optional(),
                          checked: z.boolean().optional(),
                          content: z.string().optional(),
                        })
                        .strict(),
                      z
                        .object({
                          id: z.string().optional(),
                          type: z.literal("code").optional(),
                          language: z.string().optional(),
                          content: z.string().optional(),
                        })
                        .strict(),
                      z
                        .object({
                          id: z.string().optional(),
                          type: z.literal("callout").optional(),
                          content: z.string().optional(),
                        })
                        .strict(),
                      z
                        .object({
                          id: z.string().optional(),
                          type: z.literal("divider").optional(),
                        })
                        .strict(),
                      z
                        .object({
                          id: z.string().optional(),
                          type: z.literal("embed").optional(),
                          content: z.string().optional(),
                        })
                        .strict(),
                      z
                        .object({
                          id: z.string().optional(),
                          type: z.literal("heading").optional(),
                          content: z.string().optional(),
                          level: z.number().int().optional(),
                          retracted: z.boolean().default(false),
                        })
                        .strict(),
                      z
                        .object({
                          id: z.string().optional(),
                          type: z.literal("paragraph").optional(),
                          content: z.string().optional(),
                        })
                        .strict(),
                      z
                        .object({
                          id: z.string().optional(),
                          type: z.literal("query").optional(),
                          content: z.string().optional(),
                        })
                        .strict(),
                      z
                        .object({
                          id: z.string().optional(),
                          type: z.literal("recurrent_task").optional(),
                          recurrent_task_id: z.any().optional(),
                          content: z.string().optional(),
                          recurrence: z
                            .record(z.any())
                            .and(
                              z.union([
                                z
                                  .object({
                                    start: z.any().optional(),
                                    count: z.number().int().optional(),
                                    rule: z
                                      .record(z.any())
                                      .and(
                                        z.union([
                                          z
                                            .object({
                                              every: z
                                                .literal("day")
                                                .optional(),
                                              period: z
                                                .number()
                                                .int()
                                                .default(1),
                                            })
                                            .strict(),
                                          z
                                            .object({
                                              every: z
                                                .literal("month")
                                                .optional(),
                                              period: z
                                                .number()
                                                .int()
                                                .default(1),
                                              day: z
                                                .union([
                                                  z.number().int(),
                                                  z.tuple([
                                                    z.union([
                                                      z.literal("monday"),
                                                      z.literal("tuesday"),
                                                      z.literal("wednesday"),
                                                      z.literal("thursday"),
                                                      z.literal("friday"),
                                                      z.literal("saturday"),
                                                      z.literal("sunday"),
                                                    ]),
                                                    z.number().int(),
                                                  ]),
                                                ])
                                                .optional(),
                                            })
                                            .strict(),
                                          z
                                            .object({
                                              every: z
                                                .literal("week")
                                                .optional(),
                                              period: z
                                                .number()
                                                .int()
                                                .default(1),
                                              weekdays: z
                                                .object({
                                                  monday: z
                                                    .boolean()
                                                    .default(false),
                                                  tuesday: z
                                                    .boolean()
                                                    .default(false),
                                                  wednesday: z
                                                    .boolean()
                                                    .default(false),
                                                  thursday: z
                                                    .boolean()
                                                    .default(false),
                                                  friday: z
                                                    .boolean()
                                                    .default(false),
                                                  saturday: z
                                                    .boolean()
                                                    .default(false),
                                                  sunday: z
                                                    .boolean()
                                                    .default(false),
                                                })
                                                .strict()
                                                .optional(),
                                            })
                                            .strict(),
                                          z
                                            .object({
                                              every: z
                                                .literal("workday")
                                                .optional(),
                                              period: z
                                                .number()
                                                .int()
                                                .default(1),
                                            })
                                            .strict(),
                                          z
                                            .object({
                                              every: z
                                                .literal("year")
                                                .optional(),
                                              period: z
                                                .number()
                                                .int()
                                                .default(1),
                                              day: z.number().int().optional(),
                                              month: z
                                                .union([
                                                  z.literal("january"),
                                                  z.literal("february"),
                                                  z.literal("march"),
                                                  z.literal("april"),
                                                  z.literal("may"),
                                                  z.literal("june"),
                                                  z.literal("july"),
                                                  z.literal("august"),
                                                  z.literal("september"),
                                                  z.literal("october"),
                                                  z.literal("november"),
                                                  z.literal("december"),
                                                ])
                                                .optional(),
                                            })
                                            .strict(),
                                        ])
                                      )
                                      .optional(),
                                  })
                                  .strict(),
                                z
                                  .object({
                                    end: z.any().optional(),
                                    start: z.any().optional(),
                                    rule: z
                                      .record(z.any())
                                      .and(
                                        z.union([
                                          z
                                            .object({
                                              every: z
                                                .literal("day")
                                                .optional(),
                                              period: z
                                                .number()
                                                .int()
                                                .default(1),
                                            })
                                            .strict(),
                                          z
                                            .object({
                                              every: z
                                                .literal("month")
                                                .optional(),
                                              period: z
                                                .number()
                                                .int()
                                                .default(1),
                                              day: z
                                                .union([
                                                  z.number().int(),
                                                  z.tuple([
                                                    z.union([
                                                      z.literal("monday"),
                                                      z.literal("tuesday"),
                                                      z.literal("wednesday"),
                                                      z.literal("thursday"),
                                                      z.literal("friday"),
                                                      z.literal("saturday"),
                                                      z.literal("sunday"),
                                                    ]),
                                                    z.number().int(),
                                                  ]),
                                                ])
                                                .optional(),
                                            })
                                            .strict(),
                                          z
                                            .object({
                                              every: z
                                                .literal("week")
                                                .optional(),
                                              period: z
                                                .number()
                                                .int()
                                                .default(1),
                                              weekdays: z
                                                .object({
                                                  monday: z
                                                    .boolean()
                                                    .default(false),
                                                  tuesday: z
                                                    .boolean()
                                                    .default(false),
                                                  wednesday: z
                                                    .boolean()
                                                    .default(false),
                                                  thursday: z
                                                    .boolean()
                                                    .default(false),
                                                  friday: z
                                                    .boolean()
                                                    .default(false),
                                                  saturday: z
                                                    .boolean()
                                                    .default(false),
                                                  sunday: z
                                                    .boolean()
                                                    .default(false),
                                                })
                                                .strict()
                                                .optional(),
                                            })
                                            .strict(),
                                          z
                                            .object({
                                              every: z
                                                .literal("workday")
                                                .optional(),
                                              period: z
                                                .number()
                                                .int()
                                                .default(1),
                                            })
                                            .strict(),
                                          z
                                            .object({
                                              every: z
                                                .literal("year")
                                                .optional(),
                                              period: z
                                                .number()
                                                .int()
                                                .default(1),
                                              day: z.number().int().optional(),
                                              month: z
                                                .union([
                                                  z.literal("january"),
                                                  z.literal("february"),
                                                  z.literal("march"),
                                                  z.literal("april"),
                                                  z.literal("may"),
                                                  z.literal("june"),
                                                  z.literal("july"),
                                                  z.literal("august"),
                                                  z.literal("september"),
                                                  z.literal("october"),
                                                  z.literal("november"),
                                                  z.literal("december"),
                                                ])
                                                .optional(),
                                            })
                                            .strict(),
                                        ])
                                      )
                                      .optional(),
                                  })
                                  .strict(),
                              ])
                            )
                            .optional(),
                        })
                        .strict(),
                      z
                        .object({
                          id: z.string().optional(),
                          type: z.literal("todo").optional(),
                          checked: z.boolean().optional(),
                          content: z.string().optional(),
                          task: z.string().optional(),
                        })
                        .strict(),
                    ])
                  )
                )
                .optional(),
            })
            .strict()
            .default({ blocks: [] }),
          title: z.string().optional(),
          url: z.union([z.null(), z.string()]).default(null),
        })
        .strict(),
    },
    async ({ task }) => {
      try {
        const data = await sendRpcRequest("task.create_simple", [task]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching task.create_simple: %o", error);
        return {
          content: [
            {
              type: "text",
              text: `Error fetching auth id: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        };
      }
    }
  );

  server.tool(
    "taskDay",
    "Tasks of a day sorted by: starred < default < (completed or ignored).",
    {
      /*
{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$id":"#date","$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}
*/ day: z.tuple([z.number().int(), z.number().int(), z.number().int()]),
    },
    async ({ day }) => {
      try {
        const data = await sendRpcRequest("task.day", [day]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching task.day: %o", error);
        return {
          content: [
            {
              type: "text",
              text: `Error fetching auth id: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        };
      }
    }
  );

  server.tool(
    "taskGet",
    "A task.",
    {
      /*
{"$id":"#task-id","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"}
*/ id: z.string(),
    },
    async ({ id }) => {
      try {
        const data = await sendRpcRequest("task.get", [id]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching task.get: %o", error);
        return {
          content: [
            {
              type: "text",
              text: `Error fetching auth id: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        };
      }
    }
  );

  server.tool(
    "taskUncomplete",
    "Uncomplete a task.",
    {
      /*
{"$id":"#task-id","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"}
*/ id: z.string(),
    },
    async ({ id }) => {
      try {
        const data = await sendRpcRequest("task.uncomplete", [id]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching task.uncomplete: %o", error);
        return {
          content: [
            {
              type: "text",
              text: `Error fetching auth id: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        };
      }
    }
  );

  server.tool(
    "taskUpcoming",
    "Non-allocated organized by week and sorted alphabetically.",
    {},
    async ({}) => {
      try {
        const data = await sendRpcRequest("task.upcoming", []);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching task.upcoming: %o", error);
        return {
          content: [
            {
              type: "text",
              text: `Error fetching auth id: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        };
      }
    }
  );

  server.tool("taskUnplanned", "Unplanned tasks.", {}, async ({}) => {
    try {
      const data = await sendRpcRequest("task.unplanned", []);
      return {
        content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      };
    } catch (error) {
      logger.error("Error fetching task.unplanned: %o", error);
      return {
        content: [
          {
            type: "text",
            text: `Error fetching auth id: ${error instanceof Error ? error.message : String(error)}`,
          },
        ],
        isError: true,
      };
    }
  });

  server.tool(
    "taskUpdate",
    "Patch a task.",
    {
      /*
{"$id":"#task-id","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"}
*/ id: z.string(),

      /*
{"additionalProperties":false,"properties":{"ignored":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Ignored","default":null,"type":["null","string"]},"completed":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Completed","default":null,"type":["null","string"]},"integration_id":{"$id":"#integration-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Integration_id","type":"string"},"distant_task_id":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Distant_task_id","type":"string"},"integration_data":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Integration_data","default":null,"type":"null"},"occurrence":{"additionalProperties":false,"properties":{"date":{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$id":"#date","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Date","type":"array"},"recurrence":{"$id":"#task-rec-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Recurrence","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Occurrence","default":null,"type":["null","object"]},"parent":{"additionalProperties":false,"properties":{"kind":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"event","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"event-rec","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"page","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"people","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"task","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"task-rec","type":"string"}],"$id":"#kind","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Kind","type":"string"},"id":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Parent","default":null,"type":["null","object"]},"scheduled":{"anyOf":[{"type":"null"},{"type":"null"},{"additionalProperties":false,"properties":{"year":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Year","type":"integer"},"n":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"N","type":"integer"}},"$id":"#week","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date"}],"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Scheduled","default":null,"type":["null","object"]},"starred":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Starred","default":null,"type":["boolean","null"]},"notes":{"additionalProperties":false,"properties":{"blocks":{"items":{"anyOf":[{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"blockquote","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"bullet","type":"string"},"list_type":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"ordered","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"unordered","type":"string"}],"$id":"#block-list-type","$schema":"https://json-schema.org/draft/2019-09/schema","title":"List_type","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"depth":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Depth","default":0,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"check","type":"string"},"checked":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Checked","type":"boolean"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"code","type":"string"},"language":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Language","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"callout","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"divider","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"embed","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"heading","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"level":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Level","type":"integer"},"retracted":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Retracted","default":false,"type":"boolean"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"paragraph","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"query","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"recurrent_task","type":"string"},"recurrent_task_id":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#task-rec-id","title":"Recurrent_task_id"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"recurrence":{"anyOf":[{"additionalProperties":false,"properties":{"start":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Start"},"count":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Count","type":"integer"},"rule":{"anyOf":[{"additionalProperties":false,"properties":{"every":{"const":"day","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"month","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"items":[{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"monday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"tuesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"wednesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"thursday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"friday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"saturday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"sunday","type":"string"}],"$id":"#weekday","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}],"$id":"#month_day","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":["array","integer"]}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"week","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"weekdays":{"additionalProperties":false,"properties":{"monday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Monday","default":false,"type":"boolean"},"tuesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Tuesday","default":false,"type":"boolean"},"wednesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Wednesday","default":false,"type":"boolean"},"thursday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Thursday","default":false,"type":"boolean"},"friday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Friday","default":false,"type":"boolean"},"saturday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Saturday","default":false,"type":"boolean"},"sunday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Sunday","default":false,"type":"boolean"}},"$id":"#weekdays","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Weekdays","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"workday","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"year","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":"integer"},"month":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"january","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"february","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"march","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"april","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"may","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"june","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"july","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"august","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"september","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"october","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"november","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"december","type":"string"}],"$id":"#month","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Month","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#rule","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Rule","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"end":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"End"},"start":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Start"},"rule":{"anyOf":[{"additionalProperties":false,"properties":{"every":{"const":"day","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"month","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"items":[{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"monday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"tuesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"wednesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"thursday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"friday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"saturday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"sunday","type":"string"}],"$id":"#weekday","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}],"$id":"#month_day","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":["array","integer"]}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"week","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"weekdays":{"additionalProperties":false,"properties":{"monday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Monday","default":false,"type":"boolean"},"tuesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Tuesday","default":false,"type":"boolean"},"wednesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Wednesday","default":false,"type":"boolean"},"thursday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Thursday","default":false,"type":"boolean"},"friday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Friday","default":false,"type":"boolean"},"saturday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Saturday","default":false,"type":"boolean"},"sunday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Sunday","default":false,"type":"boolean"}},"$id":"#weekdays","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Weekdays","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"workday","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"year","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":"integer"},"month":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"january","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"february","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"march","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"april","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"may","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"june","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"july","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"august","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"september","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"october","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"november","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"december","type":"string"}],"$id":"#month","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Month","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#rule","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Rule","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"}],"$id":"#recurrence","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Recurrence","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"todo","type":"string"},"checked":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Checked","type":"boolean"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"task":{"$id":"#task-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Task","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"}],"$id":"#block","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Blocks","type":"array"}},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Notes","default":null,"type":["null","object"]},"title":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Title","default":null,"type":["null","string"]},"url":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Url","default":null,"type":["null","string"]}},"$id":"#task-patch","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}
*/ patch: z
        .object({
          ignored: z.union([z.null(), z.string()]).default(null),
          completed: z.union([z.null(), z.string()]).default(null),
          integration_id: z.string().optional(),
          distant_task_id: z.string().optional(),
          integration_data: z.null().default(null),
          occurrence: z
            .union([
              z.null(),
              z
                .object({
                  date: z
                    .tuple([
                      z.number().int(),
                      z.number().int(),
                      z.number().int(),
                    ])
                    .optional(),
                  recurrence: z.string().optional(),
                })
                .strict(),
            ])
            .default(null),
          parent: z
            .union([
              z.null(),
              z
                .object({
                  kind: z
                    .union([
                      z.literal("event"),
                      z.literal("event-rec"),
                      z.literal("page"),
                      z.literal("people"),
                      z.literal("task"),
                      z.literal("task-rec"),
                    ])
                    .optional(),
                  id: z.string().optional(),
                })
                .strict(),
            ])
            .default(null),
          scheduled: z
            .union([
              z.null(),
              z.null(),
              z
                .object({
                  year: z.number().int().optional(),
                  n: z.number().int().optional(),
                })
                .strict(),
              z.any(),
            ])
            .default(null),
          starred: z.union([z.boolean(), z.null()]).default(null),
          notes: z
            .union([
              z.null(),
              z
                .object({
                  blocks: z
                    .array(
                      z.record(z.any()).and(
                        z.union([
                          z
                            .object({
                              id: z.string().optional(),
                              type: z.literal("blockquote").optional(),
                              content: z.string().optional(),
                            })
                            .strict(),
                          z
                            .object({
                              id: z.string().optional(),
                              type: z.literal("bullet").optional(),
                              list_type: z
                                .union([
                                  z.literal("ordered"),
                                  z.literal("unordered"),
                                ])
                                .optional(),
                              content: z.string().optional(),
                              depth: z.number().int(),
                            })
                            .strict(),
                          z
                            .object({
                              id: z.string().optional(),
                              type: z.literal("check").optional(),
                              checked: z.boolean().optional(),
                              content: z.string().optional(),
                            })
                            .strict(),
                          z
                            .object({
                              id: z.string().optional(),
                              type: z.literal("code").optional(),
                              language: z.string().optional(),
                              content: z.string().optional(),
                            })
                            .strict(),
                          z
                            .object({
                              id: z.string().optional(),
                              type: z.literal("callout").optional(),
                              content: z.string().optional(),
                            })
                            .strict(),
                          z
                            .object({
                              id: z.string().optional(),
                              type: z.literal("divider").optional(),
                            })
                            .strict(),
                          z
                            .object({
                              id: z.string().optional(),
                              type: z.literal("embed").optional(),
                              content: z.string().optional(),
                            })
                            .strict(),
                          z
                            .object({
                              id: z.string().optional(),
                              type: z.literal("heading").optional(),
                              content: z.string().optional(),
                              level: z.number().int().optional(),
                              retracted: z.boolean(),
                            })
                            .strict(),
                          z
                            .object({
                              id: z.string().optional(),
                              type: z.literal("paragraph").optional(),
                              content: z.string().optional(),
                            })
                            .strict(),
                          z
                            .object({
                              id: z.string().optional(),
                              type: z.literal("query").optional(),
                              content: z.string().optional(),
                            })
                            .strict(),
                          z
                            .object({
                              id: z.string().optional(),
                              type: z.literal("recurrent_task").optional(),
                              recurrent_task_id: z.any().optional(),
                              content: z.string().optional(),
                              recurrence: z
                                .record(z.any())
                                .and(
                                  z.union([
                                    z
                                      .object({
                                        start: z.any().optional(),
                                        count: z.number().int().optional(),
                                        rule: z
                                          .record(z.any())
                                          .and(
                                            z.union([
                                              z
                                                .object({
                                                  every: z
                                                    .literal("day")
                                                    .optional(),
                                                  period: z.number().int(),
                                                })
                                                .strict(),
                                              z
                                                .object({
                                                  every: z
                                                    .literal("month")
                                                    .optional(),
                                                  period: z.number().int(),
                                                  day: z
                                                    .union([
                                                      z.number().int(),
                                                      z.tuple([
                                                        z.union([
                                                          z.literal("monday"),
                                                          z.literal("tuesday"),
                                                          z.literal(
                                                            "wednesday"
                                                          ),
                                                          z.literal("thursday"),
                                                          z.literal("friday"),
                                                          z.literal("saturday"),
                                                          z.literal("sunday"),
                                                        ]),
                                                        z.number().int(),
                                                      ]),
                                                    ])
                                                    .optional(),
                                                })
                                                .strict(),
                                              z
                                                .object({
                                                  every: z
                                                    .literal("week")
                                                    .optional(),
                                                  period: z.number().int(),
                                                  weekdays: z
                                                    .object({
                                                      monday: z.boolean(),
                                                      tuesday: z.boolean(),
                                                      wednesday: z.boolean(),
                                                      thursday: z.boolean(),
                                                      friday: z.boolean(),
                                                      saturday: z.boolean(),
                                                      sunday: z.boolean(),
                                                    })
                                                    .strict()
                                                    .optional(),
                                                })
                                                .strict(),
                                              z
                                                .object({
                                                  every: z
                                                    .literal("workday")
                                                    .optional(),
                                                  period: z.number().int(),
                                                })
                                                .strict(),
                                              z
                                                .object({
                                                  every: z
                                                    .literal("year")
                                                    .optional(),
                                                  period: z.number().int(),
                                                  day: z
                                                    .number()
                                                    .int()
                                                    .optional(),
                                                  month: z
                                                    .union([
                                                      z.literal("january"),
                                                      z.literal("february"),
                                                      z.literal("march"),
                                                      z.literal("april"),
                                                      z.literal("may"),
                                                      z.literal("june"),
                                                      z.literal("july"),
                                                      z.literal("august"),
                                                      z.literal("september"),
                                                      z.literal("october"),
                                                      z.literal("november"),
                                                      z.literal("december"),
                                                    ])
                                                    .optional(),
                                                })
                                                .strict(),
                                            ])
                                          )
                                          .optional(),
                                      })
                                      .strict(),
                                    z
                                      .object({
                                        end: z.any().optional(),
                                        start: z.any().optional(),
                                        rule: z
                                          .record(z.any())
                                          .and(
                                            z.union([
                                              z
                                                .object({
                                                  every: z
                                                    .literal("day")
                                                    .optional(),
                                                  period: z.number().int(),
                                                })
                                                .strict(),
                                              z
                                                .object({
                                                  every: z
                                                    .literal("month")
                                                    .optional(),
                                                  period: z.number().int(),
                                                  day: z
                                                    .union([
                                                      z.number().int(),
                                                      z.tuple([
                                                        z.union([
                                                          z.literal("monday"),
                                                          z.literal("tuesday"),
                                                          z.literal(
                                                            "wednesday"
                                                          ),
                                                          z.literal("thursday"),
                                                          z.literal("friday"),
                                                          z.literal("saturday"),
                                                          z.literal("sunday"),
                                                        ]),
                                                        z.number().int(),
                                                      ]),
                                                    ])
                                                    .optional(),
                                                })
                                                .strict(),
                                              z
                                                .object({
                                                  every: z
                                                    .literal("week")
                                                    .optional(),
                                                  period: z.number().int(),
                                                  weekdays: z
                                                    .object({
                                                      monday: z.boolean(),
                                                      tuesday: z.boolean(),
                                                      wednesday: z.boolean(),
                                                      thursday: z.boolean(),
                                                      friday: z.boolean(),
                                                      saturday: z.boolean(),
                                                      sunday: z.boolean(),
                                                    })
                                                    .strict()
                                                    .optional(),
                                                })
                                                .strict(),
                                              z
                                                .object({
                                                  every: z
                                                    .literal("workday")
                                                    .optional(),
                                                  period: z.number().int(),
                                                })
                                                .strict(),
                                              z
                                                .object({
                                                  every: z
                                                    .literal("year")
                                                    .optional(),
                                                  period: z.number().int(),
                                                  day: z
                                                    .number()
                                                    .int()
                                                    .optional(),
                                                  month: z
                                                    .union([
                                                      z.literal("january"),
                                                      z.literal("february"),
                                                      z.literal("march"),
                                                      z.literal("april"),
                                                      z.literal("may"),
                                                      z.literal("june"),
                                                      z.literal("july"),
                                                      z.literal("august"),
                                                      z.literal("september"),
                                                      z.literal("october"),
                                                      z.literal("november"),
                                                      z.literal("december"),
                                                    ])
                                                    .optional(),
                                                })
                                                .strict(),
                                            ])
                                          )
                                          .optional(),
                                      })
                                      .strict(),
                                  ])
                                )
                                .optional(),
                            })
                            .strict(),
                          z
                            .object({
                              id: z.string().optional(),
                              type: z.literal("todo").optional(),
                              checked: z.boolean().optional(),
                              content: z.string().optional(),
                              task: z.string().optional(),
                            })
                            .strict(),
                        ])
                      )
                    )
                    .optional(),
                })
                .strict(),
            ])
            .default(null),
          title: z.union([z.null(), z.string()]).default(null),
          url: z.union([z.null(), z.string()]).default(null),
        })
        .strict(),

      /*
{"$schema":"https://json-schema.org/draft/2019-09/schema","type":["null","string"]}
*/ confirm: z.union([z.null(), z.string()]),
    },
    async ({ id, patch, confirm }) => {
      try {
        const data = await sendRpcRequest("task.update", [id, patch, confirm]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching task.update: %o", error);
        return {
          content: [
            {
              type: "text",
              text: `Error fetching auth id: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        };
      }
    }
  );
}
