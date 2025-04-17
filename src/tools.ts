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

  server.tool("authProfiles", "User identities.", {}, async ({}) => {
    try {
      const data = await sendRpcRequest("auth.profiles", []);
      return {
        content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      };
    } catch (error) {
      logger.error("Error fetching auth.profiles: %o", error);
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

  server.tool("calendarDefaultCal", "Default calendar.", {}, async ({}) => {
    try {
      const data = await sendRpcRequest("calendar.default_cal", []);
      return {
        content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      };
    } catch (error) {
      logger.error("Error fetching calendar.default_cal: %o", error);
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
    "documentAppend",
    "Append a block to object notes.",
    {
      /*
{"additionalProperties":false,"properties":{"id":{"additionalProperties":false,"properties":{"kind":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"event","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"event-rec","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"page","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"people","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"task","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"task-rec","type":"string"}],"$id":"#kind","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Kind","type":"string"},"id":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"}},"$id":"#id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"object"},"section":{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Section","type":"array"}},"$id":"#mandate-document","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}
*/ document: z
        .object({
          id: z
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
            .strict()
            .optional(),
          section: z.tuple([z.string(), z.number().int()]).optional(),
        })
        .strict(),

      /*
{"anyOf":[{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"blockquote","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"bullet","type":"string"},"list_type":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"ordered","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"unordered","type":"string"}],"$id":"#block-list-type","$schema":"https://json-schema.org/draft/2019-09/schema","title":"List_type","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"depth":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Depth","default":0,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"check","type":"string"},"checked":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Checked","type":"boolean"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"code","type":"string"},"language":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Language","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"callout","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"divider","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"embed","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"heading","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"level":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Level","type":"integer"},"retracted":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Retracted","default":false,"type":"boolean"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"paragraph","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"query","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"recurrent_task","type":"string"},"recurrent_task_id":{"$id":"#task-rec-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Recurrent_task_id","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"recurrence":{"anyOf":[{"additionalProperties":false,"properties":{"start":{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$id":"#date","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Start","type":"array"},"count":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Count","type":"integer"},"rule":{"anyOf":[{"additionalProperties":false,"properties":{"every":{"const":"day","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"month","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"items":[{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"monday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"tuesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"wednesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"thursday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"friday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"saturday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"sunday","type":"string"}],"$id":"#weekday","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}],"$id":"#month_day","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":["array","integer"]}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"week","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"weekdays":{"additionalProperties":false,"properties":{"monday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Monday","default":false,"type":"boolean"},"tuesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Tuesday","default":false,"type":"boolean"},"wednesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Wednesday","default":false,"type":"boolean"},"thursday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Thursday","default":false,"type":"boolean"},"friday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Friday","default":false,"type":"boolean"},"saturday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Saturday","default":false,"type":"boolean"},"sunday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Sunday","default":false,"type":"boolean"}},"$id":"#weekdays","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Weekdays","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"workday","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"year","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":"integer"},"month":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"january","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"february","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"march","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"april","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"may","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"june","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"july","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"august","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"september","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"october","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"november","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"december","type":"string"}],"$id":"#month","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Month","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#rule","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Rule","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"end":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"End"},"start":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Start"},"rule":{"anyOf":[{"additionalProperties":false,"properties":{"every":{"const":"day","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"month","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"items":[{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"monday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"tuesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"wednesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"thursday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"friday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"saturday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"sunday","type":"string"}],"$id":"#weekday","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}],"$id":"#month_day","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":["array","integer"]}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"week","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"weekdays":{"additionalProperties":false,"properties":{"monday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Monday","default":false,"type":"boolean"},"tuesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Tuesday","default":false,"type":"boolean"},"wednesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Wednesday","default":false,"type":"boolean"},"thursday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Thursday","default":false,"type":"boolean"},"friday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Friday","default":false,"type":"boolean"},"saturday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Saturday","default":false,"type":"boolean"},"sunday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Sunday","default":false,"type":"boolean"}},"$id":"#weekdays","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Weekdays","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"workday","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"year","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":"integer"},"month":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"january","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"february","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"march","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"april","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"may","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"june","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"july","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"august","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"september","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"october","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"november","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"december","type":"string"}],"$id":"#month","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Month","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#rule","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Rule","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"}],"$id":"#recurrence","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Recurrence","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"todo","type":"string"},"checked":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Checked","type":"boolean"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"task":{"$id":"#task-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Task","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"}],"$id":"#block","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}
*/ block: z.record(z.any()).and(
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
                .union([z.literal("ordered"), z.literal("unordered")])
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
              recurrent_task_id: z.string().optional(),
              content: z.string().optional(),
              recurrence: z
                .record(z.any())
                .and(
                  z.union([
                    z
                      .object({
                        start: z
                          .tuple([
                            z.number().int(),
                            z.number().int(),
                            z.number().int(),
                          ])
                          .optional(),
                        count: z.number().int().optional(),
                        rule: z
                          .record(z.any())
                          .and(
                            z.union([
                              z
                                .object({
                                  every: z.literal("day").optional(),
                                  period: z.number().int().default(1),
                                })
                                .strict(),
                              z
                                .object({
                                  every: z.literal("month").optional(),
                                  period: z.number().int().default(1),
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
                                  every: z.literal("week").optional(),
                                  period: z.number().int().default(1),
                                  weekdays: z
                                    .object({
                                      monday: z.boolean().default(false),
                                      tuesday: z.boolean().default(false),
                                      wednesday: z.boolean().default(false),
                                      thursday: z.boolean().default(false),
                                      friday: z.boolean().default(false),
                                      saturday: z.boolean().default(false),
                                      sunday: z.boolean().default(false),
                                    })
                                    .strict()
                                    .optional(),
                                })
                                .strict(),
                              z
                                .object({
                                  every: z.literal("workday").optional(),
                                  period: z.number().int().default(1),
                                })
                                .strict(),
                              z
                                .object({
                                  every: z.literal("year").optional(),
                                  period: z.number().int().default(1),
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
                                  every: z.literal("day").optional(),
                                  period: z.number().int().default(1),
                                })
                                .strict(),
                              z
                                .object({
                                  every: z.literal("month").optional(),
                                  period: z.number().int().default(1),
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
                                  every: z.literal("week").optional(),
                                  period: z.number().int().default(1),
                                  weekdays: z
                                    .object({
                                      monday: z.boolean().default(false),
                                      tuesday: z.boolean().default(false),
                                      wednesday: z.boolean().default(false),
                                      thursday: z.boolean().default(false),
                                      friday: z.boolean().default(false),
                                      saturday: z.boolean().default(false),
                                      sunday: z.boolean().default(false),
                                    })
                                    .strict()
                                    .optional(),
                                })
                                .strict(),
                              z
                                .object({
                                  every: z.literal("workday").optional(),
                                  period: z.number().int().default(1),
                                })
                                .strict(),
                              z
                                .object({
                                  every: z.literal("year").optional(),
                                  period: z.number().int().default(1),
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
      ),
    },
    async ({ document, block }) => {
      try {
        const data = await sendRpcRequest("document.append", [document, block]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching document.append: %o", error);
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
    "eventAllocate",
    "Find a free slot to create an event.",
    {
      /*
{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"}
*/ name: z.string(),

      /*
{"additionalProperties":false,"properties":{"calendar":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Calendar","type":"string"},"dates":{"anyOf":[{"additionalProperties":false,"properties":{"type":{"const":"date","type":"string"},"date":{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$id":"#date","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Date","type":"array"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"type":{"const":"date_range","type":"string"},"end":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"End"},"start":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Start"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"type":{"const":"month","type":"string"},"hint":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Hint","type":"integer"},"month":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"january","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"february","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"march","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"april","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"may","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"june","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"july","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"august","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"september","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"october","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"november","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"december","type":"string"}],"$id":"#month","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Month","type":"string"},"year":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Year","type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"type":{"const":"week","type":"string"},"week":{"additionalProperties":false,"properties":{"year":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Year","type":"integer"},"n":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"N","type":"integer"}},"$id":"#week","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Week","type":"object"},"hint":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"monday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"tuesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"wednesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"thursday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"friday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"saturday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"sunday","type":"string"}],"$id":"#weekday","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Hint","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"type":{"const":"year","type":"string"},"year":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Year","type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#mandate-dates","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Dates","type":"object"},"daytime":{"items":[{"additionalProperties":false,"properties":{"hours":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Hours","maximum":24,"minimum":0,"type":"integer"},"minutes":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Minutes","default":0,"maximum":60,"minimum":0,"type":"integer"},"seconds":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Seconds","default":0,"maximum":60,"minimum":0,"type":"integer"}},"$id":"#daytime","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"hours":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Hours","maximum":24,"minimum":0,"type":"integer"},"minutes":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Minutes","default":0,"maximum":60,"minimum":0,"type":"integer"},"seconds":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Seconds","default":0,"maximum":60,"minimum":0,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":["null","object"]}],"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Daytime","type":"array"},"document":{"additionalProperties":false,"properties":{"id":{"additionalProperties":false,"properties":{"kind":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"event","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"event-rec","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"page","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"people","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"task","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"task-rec","type":"string"}],"$id":"#kind","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Kind","type":"string"},"id":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"}},"$id":"#id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"object"},"section":{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Section","type":"array"}},"$id":"#mandate-document","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Document","type":"object"},"duration":{"$id":"#span","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Duration","type":"integer"},"participants":{"items":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"additionalProperties":false,"properties":{"email":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Email","type":"string"},"emailPrimary":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"EmailPrimary","type":"string"},"helper":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Helper","type":"string"},"id":{"$id":"#people-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"}},"$id":"#mandate-participant","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#mandate-participant-mandate-participant-lenient","$schema":"https://json-schema.org/draft/2019-09/schema","type":["object","string"]},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Participants","default":[],"type":"array"},"recurrence":{"anyOf":[{"additionalProperties":false,"properties":{"start":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Start"},"count":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Count","type":"integer"},"rule":{"anyOf":[{"additionalProperties":false,"properties":{"every":{"const":"day","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"month","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#weekday"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}],"$id":"#month_day","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":["array","integer"]}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"week","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"weekdays":{"additionalProperties":false,"properties":{"monday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Monday","default":false,"type":"boolean"},"tuesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Tuesday","default":false,"type":"boolean"},"wednesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Wednesday","default":false,"type":"boolean"},"thursday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Thursday","default":false,"type":"boolean"},"friday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Friday","default":false,"type":"boolean"},"saturday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Saturday","default":false,"type":"boolean"},"sunday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Sunday","default":false,"type":"boolean"}},"$id":"#weekdays","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Weekdays","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"workday","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"year","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":"integer"},"month":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#month","title":"Month"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#rule","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Rule","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"end":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"End"},"start":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Start"},"rule":{"anyOf":[{"additionalProperties":false,"properties":{"every":{"const":"day","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"month","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#weekday"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}],"$id":"#month_day","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":["array","integer"]}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"week","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"weekdays":{"additionalProperties":false,"properties":{"monday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Monday","default":false,"type":"boolean"},"tuesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Tuesday","default":false,"type":"boolean"},"wednesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Wednesday","default":false,"type":"boolean"},"thursday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Thursday","default":false,"type":"boolean"},"friday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Friday","default":false,"type":"boolean"},"saturday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Saturday","default":false,"type":"boolean"},"sunday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Sunday","default":false,"type":"boolean"}},"$id":"#weekdays","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Weekdays","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"workday","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"year","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":"integer"},"month":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#month","title":"Month"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#rule","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Rule","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"}],"$id":"#recurrence","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Recurrence","type":"object"},"slot":{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"additionalProperties":false,"properties":{"name":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Name","type":"string"},"kind":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"focus","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"meetings","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"processing","type":"string"}],"$id":"#slot-kind","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Kind","type":"string"}},"$id":"#slot-type","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Slot","type":"array"}},"$id":"#action_allocation","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}
*/ allocation: z
        .object({
          calendar: z.string().optional(),
          dates: z
            .record(z.any())
            .and(
              z.union([
                z
                  .object({
                    type: z.literal("date").optional(),
                    date: z
                      .tuple([
                        z.number().int(),
                        z.number().int(),
                        z.number().int(),
                      ])
                      .optional(),
                  })
                  .strict(),
                z
                  .object({
                    type: z.literal("date_range").optional(),
                    end: z.any().optional(),
                    start: z.any().optional(),
                  })
                  .strict(),
                z
                  .object({
                    type: z.literal("month").optional(),
                    hint: z.number().int().optional(),
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
                    year: z.number().int().optional(),
                  })
                  .strict(),
                z
                  .object({
                    type: z.literal("week").optional(),
                    week: z
                      .object({
                        year: z.number().int().optional(),
                        n: z.number().int().optional(),
                      })
                      .strict()
                      .optional(),
                    hint: z
                      .union([
                        z.literal("monday"),
                        z.literal("tuesday"),
                        z.literal("wednesday"),
                        z.literal("thursday"),
                        z.literal("friday"),
                        z.literal("saturday"),
                        z.literal("sunday"),
                      ])
                      .optional(),
                  })
                  .strict(),
                z
                  .object({
                    type: z.literal("year").optional(),
                    year: z.number().int().optional(),
                  })
                  .strict(),
              ])
            )
            .optional(),
          daytime: z
            .tuple([
              z
                .object({
                  hours: z.number().int().gte(0).lte(24).optional(),
                  minutes: z.number().int().gte(0).lte(60).default(0),
                  seconds: z.number().int().gte(0).lte(60).default(0),
                })
                .strict(),
              z.union([
                z.null(),
                z
                  .object({
                    hours: z.number().int().gte(0).lte(24).optional(),
                    minutes: z.number().int().gte(0).lte(60),
                    seconds: z.number().int().gte(0).lte(60),
                  })
                  .strict(),
              ]),
            ])
            .optional(),
          document: z
            .object({
              id: z
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
                .strict()
                .optional(),
              section: z.tuple([z.string(), z.number().int()]).optional(),
            })
            .strict()
            .optional(),
          duration: z.number().int().optional(),
          participants: z
            .array(
              z.union([
                z.string(),
                z
                  .object({
                    email: z.string().optional(),
                    emailPrimary: z.string().optional(),
                    helper: z.string().optional(),
                    id: z.string().optional(),
                  })
                  .strict(),
              ])
            )
            .default([]),
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
                              every: z.literal("day").optional(),
                              period: z.number().int().default(1),
                            })
                            .strict(),
                          z
                            .object({
                              every: z.literal("month").optional(),
                              period: z.number().int().default(1),
                              day: z
                                .union([
                                  z.number().int(),
                                  z.tuple([z.any(), z.number().int()]),
                                ])
                                .optional(),
                            })
                            .strict(),
                          z
                            .object({
                              every: z.literal("week").optional(),
                              period: z.number().int().default(1),
                              weekdays: z
                                .object({
                                  monday: z.boolean().default(false),
                                  tuesday: z.boolean().default(false),
                                  wednesday: z.boolean().default(false),
                                  thursday: z.boolean().default(false),
                                  friday: z.boolean().default(false),
                                  saturday: z.boolean().default(false),
                                  sunday: z.boolean().default(false),
                                })
                                .strict()
                                .optional(),
                            })
                            .strict(),
                          z
                            .object({
                              every: z.literal("workday").optional(),
                              period: z.number().int().default(1),
                            })
                            .strict(),
                          z
                            .object({
                              every: z.literal("year").optional(),
                              period: z.number().int().default(1),
                              day: z.number().int().optional(),
                              month: z.any().optional(),
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
                              every: z.literal("day").optional(),
                              period: z.number().int().default(1),
                            })
                            .strict(),
                          z
                            .object({
                              every: z.literal("month").optional(),
                              period: z.number().int().default(1),
                              day: z
                                .union([
                                  z.number().int(),
                                  z.tuple([z.any(), z.number().int()]),
                                ])
                                .optional(),
                            })
                            .strict(),
                          z
                            .object({
                              every: z.literal("week").optional(),
                              period: z.number().int().default(1),
                              weekdays: z
                                .object({
                                  monday: z.boolean().default(false),
                                  tuesday: z.boolean().default(false),
                                  wednesday: z.boolean().default(false),
                                  thursday: z.boolean().default(false),
                                  friday: z.boolean().default(false),
                                  saturday: z.boolean().default(false),
                                  sunday: z.boolean().default(false),
                                })
                                .strict()
                                .optional(),
                            })
                            .strict(),
                          z
                            .object({
                              every: z.literal("workday").optional(),
                              period: z.number().int().default(1),
                            })
                            .strict(),
                          z
                            .object({
                              every: z.literal("year").optional(),
                              period: z.number().int().default(1),
                              day: z.number().int().optional(),
                              month: z.any().optional(),
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
          slot: z
            .tuple([
              z.string(),
              z
                .object({
                  name: z.string().optional(),
                  kind: z
                    .union([
                      z.literal("focus"),
                      z.literal("meetings"),
                      z.literal("processing"),
                    ])
                    .optional(),
                })
                .strict(),
            ])
            .optional(),
        })
        .strict(),
    },
    async ({ name, allocation }) => {
      try {
        const data = await sendRpcRequest("event.allocate", [name, allocation]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching event.allocate: %o", error);
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
    "eventComplete",
    "Complete an event.",
    {
      /*
{"$id":"#event-id","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"}
*/ id: z.string(),
    },
    async ({ id }) => {
      try {
        const data = await sendRpcRequest("event.complete", [id]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching event.complete: %o", error);
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
    "eventCreate",
    "Add an event.",
    {
      /*
{"additionalProperties":false,"properties":{"calendar":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Calendar","type":"string"},"draft":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Draft","type":"boolean"},"archived":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Archived","default":null,"type":["null","string"]},"attendance":{"anyOf":[{"type":"null"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"attend","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"ignore","type":"string"}],"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Attendance","default":null,"type":["null","string"]},"attendees":{"items":{"additionalProperties":false,"properties":{"email":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Email","type":"string"},"name":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Name","type":"string"},"organizer":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Organizer","default":false,"type":"boolean"},"self":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Self","default":false,"type":"boolean"},"status":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"yes","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"no","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"maybe","type":"string"}],"$id":"#yes_no_maybe","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Status","type":"string"}},"$id":"#attendee","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Attendees","default":[],"type":"array"},"description":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Description","default":null,"type":["null","string"]},"location":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Location","default":null,"type":["null","string"]},"notes":{"additionalProperties":false,"properties":{"blocks":{"items":{"anyOf":[{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"blockquote","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"bullet","type":"string"},"list_type":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"ordered","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"unordered","type":"string"}],"$id":"#block-list-type","$schema":"https://json-schema.org/draft/2019-09/schema","title":"List_type","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"depth":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Depth","default":0,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"check","type":"string"},"checked":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Checked","type":"boolean"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"code","type":"string"},"language":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Language","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"callout","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"divider","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"embed","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"heading","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"level":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Level","type":"integer"},"retracted":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Retracted","default":false,"type":"boolean"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"paragraph","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"query","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"recurrent_task","type":"string"},"recurrent_task_id":{"$id":"#task-rec-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Recurrent_task_id","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"recurrence":{"anyOf":[{"additionalProperties":false,"properties":{"start":{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$id":"#date","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Start","type":"array"},"count":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Count","type":"integer"},"rule":{"anyOf":[{"additionalProperties":false,"properties":{"every":{"const":"day","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"month","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"items":[{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"monday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"tuesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"wednesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"thursday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"friday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"saturday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"sunday","type":"string"}],"$id":"#weekday","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}],"$id":"#month_day","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":["array","integer"]}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"week","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"weekdays":{"additionalProperties":false,"properties":{"monday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Monday","default":false,"type":"boolean"},"tuesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Tuesday","default":false,"type":"boolean"},"wednesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Wednesday","default":false,"type":"boolean"},"thursday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Thursday","default":false,"type":"boolean"},"friday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Friday","default":false,"type":"boolean"},"saturday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Saturday","default":false,"type":"boolean"},"sunday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Sunday","default":false,"type":"boolean"}},"$id":"#weekdays","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Weekdays","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"workday","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"year","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":"integer"},"month":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"january","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"february","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"march","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"april","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"may","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"june","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"july","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"august","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"september","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"october","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"november","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"december","type":"string"}],"$id":"#month","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Month","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#rule","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Rule","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"end":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"End"},"start":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Start"},"rule":{"anyOf":[{"additionalProperties":false,"properties":{"every":{"const":"day","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"month","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"items":[{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"monday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"tuesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"wednesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"thursday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"friday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"saturday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"sunday","type":"string"}],"$id":"#weekday","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}],"$id":"#month_day","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":["array","integer"]}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"week","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"weekdays":{"additionalProperties":false,"properties":{"monday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Monday","default":false,"type":"boolean"},"tuesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Tuesday","default":false,"type":"boolean"},"wednesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Wednesday","default":false,"type":"boolean"},"thursday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Thursday","default":false,"type":"boolean"},"friday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Friday","default":false,"type":"boolean"},"saturday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Saturday","default":false,"type":"boolean"},"sunday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Sunday","default":false,"type":"boolean"}},"$id":"#weekdays","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Weekdays","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"workday","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"year","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":"integer"},"month":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"january","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"february","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"march","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"april","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"may","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"june","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"july","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"august","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"september","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"october","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"november","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"december","type":"string"}],"$id":"#month","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Month","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#rule","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Rule","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"}],"$id":"#recurrence","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Recurrence","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"todo","type":"string"},"checked":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Checked","type":"boolean"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"task":{"$id":"#task-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Task","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"}],"$id":"#block","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Blocks","type":"array"}},"$id":"#document","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Notes","default":{"blocks":[]},"type":"object"},"task":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Task","default":null,"type":["null","string"]},"time":{"anyOf":[{"additionalProperties":false,"properties":{"date":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Date"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"start_date":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Start_date"},"end_date":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"End_date"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"start_time":{"$id":"#time","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Start_time","type":"string"},"end_time":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#time","title":"End_time"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#event-time","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Time","type":"object"},"title":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Title","type":"string"}},"$id":"#event-creation","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}
*/ event: z
        .object({
          calendar: z.string().optional(),
          draft: z.boolean().optional(),
          archived: z.union([z.null(), z.string()]).default(null),
          attendance: z
            .union([z.null(), z.literal("attend"), z.literal("ignore")])
            .default(null),
          attendees: z
            .array(
              z
                .object({
                  email: z.string().optional(),
                  name: z.string().optional(),
                  organizer: z.boolean().default(false),
                  self: z.boolean().default(false),
                  status: z
                    .union([
                      z.literal("yes"),
                      z.literal("no"),
                      z.literal("maybe"),
                    ])
                    .optional(),
                })
                .strict()
            )
            .default([]),
          description: z.union([z.null(), z.string()]).default(null),
          location: z.union([z.null(), z.string()]).default(null),
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
                          recurrent_task_id: z.string().optional(),
                          content: z.string().optional(),
                          recurrence: z
                            .record(z.any())
                            .and(
                              z.union([
                                z
                                  .object({
                                    start: z
                                      .tuple([
                                        z.number().int(),
                                        z.number().int(),
                                        z.number().int(),
                                      ])
                                      .optional(),
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
          task: z.union([z.null(), z.string()]).default(null),
          time: z
            .record(z.any())
            .and(
              z.union([
                z.object({ date: z.any().optional() }).strict(),
                z
                  .object({
                    start_date: z.any().optional(),
                    end_date: z.any().optional(),
                  })
                  .strict(),
                z
                  .object({
                    start_time: z.string().optional(),
                    end_time: z.any().optional(),
                  })
                  .strict(),
              ])
            )
            .optional(),
          title: z.string().optional(),
        })
        .strict(),
    },
    async ({ event }) => {
      try {
        const data = await sendRpcRequest("event.create", [event]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching event.create: %o", error);
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
    "eventDelete",
    "Delete an event.",
    {
      /*
{"$id":"#event-id","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"}
*/ id: z.string(),

      /*
{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"boolean"}
*/ send_updates: z.boolean(),
    },
    async ({ id, send_updates }) => {
      try {
        const data = await sendRpcRequest("event.delete", [id, send_updates]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching event.delete: %o", error);
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
    "eventFindWithAttendees",
    "Events with the given attendees.",
    {
      /*
{"items":{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}
*/ emails: z.array(z.string()),
    },
    async ({ emails }) => {
      try {
        const data = await sendRpcRequest("event.find_with_attendees", [
          emails,
        ]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching event.find_with_attendees: %o", error);
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
    "eventMove",
    "Move an event to another calendar.",
    {
      /*
{"$id":"#event-id","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"}
*/ id: z.string(),

      /*
{"$id":"#calendar-id","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"}
*/ dst_calendar_id: z.string(),

      /*
{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"boolean"}
*/ send_updates: z.boolean(),
    },
    async ({ id, dst_calendar_id, send_updates }) => {
      try {
        const data = await sendRpcRequest("event.move", [
          id,
          dst_calendar_id,
          send_updates,
        ]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching event.move: %o", error);
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
    "eventPublish",
    "Make a draft event definitive.",
    {
      /*
{"$id":"#event-id","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"}
*/ id: z.string(),

      /*
{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"boolean"}
*/ send_updates: z.boolean(),
    },
    async ({ id, send_updates }) => {
      try {
        const data = await sendRpcRequest("event.publish", [id, send_updates]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching event.publish: %o", error);
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
    "eventRecurrentCreate",
    "Add a recurring event.",
    {
      /*
{"additionalProperties":false,"properties":{"calendar":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Calendar","type":"string"},"draft":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Draft","type":"boolean"},"attendees":{"items":{"additionalProperties":false,"properties":{"email":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Email","type":"string"},"name":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Name","type":"string"},"organizer":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Organizer","default":false,"type":"boolean"},"self":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Self","default":false,"type":"boolean"},"status":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"yes","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"no","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"maybe","type":"string"}],"$id":"#yes_no_maybe","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Status","type":"string"}},"$id":"#attendee","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Attendees","default":[],"type":"array"},"daytime":{"anyOf":[{"type":"null"},{"additionalProperties":false,"properties":{"date":{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$id":"#date","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Date","type":"array"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"start_date":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Start_date"},"end_date":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"End_date"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"start_time":{"$id":"#time","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Start_time","type":"string"},"end_time":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#time","title":"End_time"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#event-recurrent-daytime-creation","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Daytime","default":null,"type":["null","object"]},"description":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Description","default":null,"type":["null","string"]},"exceptions":{"items":{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date"},{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","type":["array","null"]}],"$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"},"$id":"#exceptions","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Exceptions","default":[],"type":"array"},"location":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Location","default":null,"type":["null","string"]},"notes":{"additionalProperties":false,"properties":{"blocks":{"items":{"anyOf":[{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"blockquote","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"bullet","type":"string"},"list_type":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"ordered","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"unordered","type":"string"}],"$id":"#block-list-type","$schema":"https://json-schema.org/draft/2019-09/schema","title":"List_type","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"depth":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Depth","default":0,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"check","type":"string"},"checked":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Checked","type":"boolean"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"code","type":"string"},"language":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Language","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"callout","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"divider","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"embed","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"heading","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"level":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Level","type":"integer"},"retracted":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Retracted","default":false,"type":"boolean"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"paragraph","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"query","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"recurrent_task","type":"string"},"recurrent_task_id":{"$id":"#task-rec-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Recurrent_task_id","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"recurrence":{"anyOf":[{"additionalProperties":false,"properties":{"start":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Start"},"count":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Count","type":"integer"},"rule":{"anyOf":[{"additionalProperties":false,"properties":{"every":{"const":"day","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"month","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"items":[{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"monday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"tuesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"wednesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"thursday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"friday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"saturday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"sunday","type":"string"}],"$id":"#weekday","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}],"$id":"#month_day","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":["array","integer"]}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"week","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"weekdays":{"additionalProperties":false,"properties":{"monday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Monday","default":false,"type":"boolean"},"tuesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Tuesday","default":false,"type":"boolean"},"wednesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Wednesday","default":false,"type":"boolean"},"thursday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Thursday","default":false,"type":"boolean"},"friday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Friday","default":false,"type":"boolean"},"saturday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Saturday","default":false,"type":"boolean"},"sunday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Sunday","default":false,"type":"boolean"}},"$id":"#weekdays","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Weekdays","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"workday","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"year","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":"integer"},"month":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"january","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"february","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"march","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"april","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"may","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"june","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"july","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"august","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"september","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"october","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"november","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"december","type":"string"}],"$id":"#month","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Month","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#rule","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Rule","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"end":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"End"},"start":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Start"},"rule":{"anyOf":[{"additionalProperties":false,"properties":{"every":{"const":"day","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"month","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"items":[{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"monday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"tuesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"wednesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"thursday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"friday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"saturday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"sunday","type":"string"}],"$id":"#weekday","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}],"$id":"#month_day","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":["array","integer"]}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"week","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"weekdays":{"additionalProperties":false,"properties":{"monday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Monday","default":false,"type":"boolean"},"tuesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Tuesday","default":false,"type":"boolean"},"wednesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Wednesday","default":false,"type":"boolean"},"thursday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Thursday","default":false,"type":"boolean"},"friday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Friday","default":false,"type":"boolean"},"saturday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Saturday","default":false,"type":"boolean"},"sunday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Sunday","default":false,"type":"boolean"}},"$id":"#weekdays","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Weekdays","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"workday","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"year","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":"integer"},"month":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"january","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"february","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"march","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"april","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"may","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"june","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"july","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"august","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"september","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"october","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"november","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"december","type":"string"}],"$id":"#month","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Month","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#rule","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Rule","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"}],"$id":"#recurrence","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Recurrence","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"todo","type":"string"},"checked":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Checked","type":"boolean"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"task":{"$id":"#task-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Task","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"}],"$id":"#block","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Blocks","type":"array"}},"$id":"#document","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Notes","default":{"blocks":[]},"type":"object"},"recurrence":{"anyOf":[{"additionalProperties":false,"properties":{"start":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Start"},"count":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Count","type":"integer"},"rule":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#rule","title":"Rule"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"end":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"End"},"start":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Start"},"rule":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#rule","title":"Rule"}},"$schema":"https://json-schema.org/draft/2019-09/schema"}],"$id":"#event_recurrence","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Recurrence","type":"object"},"title":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Title","type":"string"}},"$id":"#event-recurrent-creation","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}
*/ event: z
        .object({
          calendar: z.string().optional(),
          draft: z.boolean().optional(),
          attendees: z
            .array(
              z
                .object({
                  email: z.string().optional(),
                  name: z.string().optional(),
                  organizer: z.boolean().default(false),
                  self: z.boolean().default(false),
                  status: z
                    .union([
                      z.literal("yes"),
                      z.literal("no"),
                      z.literal("maybe"),
                    ])
                    .optional(),
                })
                .strict()
            )
            .default([]),
          daytime: z
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
                })
                .strict(),
              z
                .object({
                  start_date: z.any().optional(),
                  end_date: z.any().optional(),
                })
                .strict(),
              z
                .object({
                  start_time: z.string().optional(),
                  end_time: z.any().optional(),
                })
                .strict(),
            ])
            .default(null),
          description: z.union([z.null(), z.string()]).default(null),
          exceptions: z
            .array(
              z.tuple([
                z.any(),
                z.union([
                  z.tuple([
                    z.number().int(),
                    z.number().int(),
                    z.number().int(),
                  ]),
                  z.null(),
                ]),
              ])
            )
            .default([]),
          location: z.union([z.null(), z.string()]).default(null),
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
                          recurrent_task_id: z.string().optional(),
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
          recurrence: z
            .record(z.any())
            .and(
              z.union([
                z
                  .object({
                    start: z.any().optional(),
                    count: z.number().int().optional(),
                    rule: z.any().optional(),
                  })
                  .strict(),
                z
                  .object({
                    end: z.any().optional(),
                    start: z.any().optional(),
                    rule: z.any().optional(),
                  })
                  .strict(),
              ])
            )
            .optional(),
          title: z.string().optional(),
        })
        .strict(),
    },
    async ({ event }) => {
      try {
        const data = await sendRpcRequest("event.recurrent.create", [event]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching event.recurrent.create: %o", error);
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
    "eventRecurrentDelete",
    "Delete a recurrent event.",
    {
      /*
{"$id":"#event-rec-id","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"}
*/ id: z.string(),
    },
    async ({ id }) => {
      try {
        const data = await sendRpcRequest("event.recurrent.delete", [id]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching event.recurrent.delete: %o", error);
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
    "eventRecurrentGet",
    "Get a recurring event.",
    {
      /*
{"$id":"#event-rec-id","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"}
*/ id: z.string(),
    },
    async ({ id }) => {
      try {
        const data = await sendRpcRequest("event.recurrent.get", [id]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching event.recurrent.get: %o", error);
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
    "eventRecurrentStop",
    "Set a recurring event end date to today.",
    {
      /*
{"$id":"#event-rec-id","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"}
*/ id: z.string(),

      /*
{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$id":"#date","$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}
*/ date: z.tuple([z.number().int(), z.number().int(), z.number().int()]),
    },
    async ({ id, date }) => {
      try {
        const data = await sendRpcRequest("event.recurrent.stop", [id, date]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching event.recurrent.stop: %o", error);
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
    "eventRecurrentUpdate",
    "Update a recurring event.",
    {
      /*
{"additionalProperties":false,"properties":{"id":{"$id":"#event-rec-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"attendees":{"items":{"additionalProperties":false,"properties":{"email":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Email","type":"string"},"name":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Name","type":"string"},"organizer":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Organizer","default":false,"type":"boolean"},"self":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Self","default":false,"type":"boolean"},"status":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"yes","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"no","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"maybe","type":"string"}],"$id":"#yes_no_maybe","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Status","type":"string"}},"$id":"#attendee","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Attendees","default":null,"type":["array","null"]},"daytime":{"additionalProperties":false,"properties":{"time_range":{"anyOf":[{"additionalProperties":false,"properties":{"date":{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$id":"#date","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Date","type":"array"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"start_date":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Start_date"},"end_date":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"End_date"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"start_time":{"$id":"#time","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Start_time","type":"string"},"end_time":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#time","title":"End_time"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#event-time","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Time_range","type":"object"},"timezone":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Timezone","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Daytime","default":null,"type":["null","object"]},"description":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Description","default":null,"type":["null","string"]},"exceptions":{"items":{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date"},{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","type":["array","null"]}],"$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Exceptions","default":null,"type":["array","null"]},"location":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Location","default":null,"type":["null","string"]},"notes":{"additionalProperties":false,"properties":{"blocks":{"items":{"anyOf":[{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"blockquote","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"bullet","type":"string"},"list_type":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"ordered","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"unordered","type":"string"}],"$id":"#block-list-type","$schema":"https://json-schema.org/draft/2019-09/schema","title":"List_type","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"depth":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Depth","default":0,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"check","type":"string"},"checked":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Checked","type":"boolean"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"code","type":"string"},"language":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Language","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"callout","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"divider","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"embed","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"heading","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"level":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Level","type":"integer"},"retracted":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Retracted","default":false,"type":"boolean"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"paragraph","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"query","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"recurrent_task","type":"string"},"recurrent_task_id":{"$id":"#task-rec-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Recurrent_task_id","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"recurrence":{"anyOf":[{"additionalProperties":false,"properties":{"start":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Start"},"count":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Count","type":"integer"},"rule":{"anyOf":[{"additionalProperties":false,"properties":{"every":{"const":"day","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"month","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"items":[{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"monday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"tuesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"wednesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"thursday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"friday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"saturday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"sunday","type":"string"}],"$id":"#weekday","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}],"$id":"#month_day","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":["array","integer"]}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"week","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"weekdays":{"additionalProperties":false,"properties":{"monday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Monday","default":false,"type":"boolean"},"tuesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Tuesday","default":false,"type":"boolean"},"wednesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Wednesday","default":false,"type":"boolean"},"thursday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Thursday","default":false,"type":"boolean"},"friday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Friday","default":false,"type":"boolean"},"saturday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Saturday","default":false,"type":"boolean"},"sunday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Sunday","default":false,"type":"boolean"}},"$id":"#weekdays","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Weekdays","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"workday","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"year","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":"integer"},"month":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"january","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"february","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"march","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"april","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"may","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"june","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"july","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"august","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"september","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"october","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"november","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"december","type":"string"}],"$id":"#month","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Month","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#rule","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Rule","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"end":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"End"},"start":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Start"},"rule":{"anyOf":[{"additionalProperties":false,"properties":{"every":{"const":"day","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"month","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"items":[{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"monday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"tuesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"wednesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"thursday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"friday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"saturday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"sunday","type":"string"}],"$id":"#weekday","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}],"$id":"#month_day","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":["array","integer"]}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"week","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"weekdays":{"additionalProperties":false,"properties":{"monday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Monday","default":false,"type":"boolean"},"tuesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Tuesday","default":false,"type":"boolean"},"wednesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Wednesday","default":false,"type":"boolean"},"thursday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Thursday","default":false,"type":"boolean"},"friday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Friday","default":false,"type":"boolean"},"saturday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Saturday","default":false,"type":"boolean"},"sunday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Sunday","default":false,"type":"boolean"}},"$id":"#weekdays","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Weekdays","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"workday","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"year","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":"integer"},"month":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"january","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"february","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"march","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"april","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"may","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"june","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"july","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"august","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"september","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"october","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"november","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"december","type":"string"}],"$id":"#month","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Month","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#rule","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Rule","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"}],"$id":"#recurrence","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Recurrence","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"todo","type":"string"},"checked":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Checked","type":"boolean"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"task":{"$id":"#task-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Task","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"}],"$id":"#block","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Blocks","type":"array"}},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Notes","default":null,"type":["null","object"]},"recurrence":{"anyOf":[{"type":"null"},{"additionalProperties":false,"properties":{"start":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Start"},"count":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Count","type":"integer"},"rule":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#rule","title":"Rule"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"end":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"End"},"start":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Start"},"rule":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#rule","title":"Rule"}},"$schema":"https://json-schema.org/draft/2019-09/schema"}],"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Recurrence","default":null,"type":["null","object"]},"title":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Title","default":null,"type":["null","string"]}},"$id":"#event-recurrent-patch","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}
*/ patch: z
        .object({
          id: z.string().optional(),
          attendees: z
            .union([
              z.array(
                z
                  .object({
                    email: z.string().optional(),
                    name: z.string().optional(),
                    organizer: z.boolean(),
                    self: z.boolean(),
                    status: z
                      .union([
                        z.literal("yes"),
                        z.literal("no"),
                        z.literal("maybe"),
                      ])
                      .optional(),
                  })
                  .strict()
              ),
              z.null(),
            ])
            .default(null),
          daytime: z
            .union([
              z.null(),
              z
                .object({
                  time_range: z
                    .record(z.any())
                    .and(
                      z.union([
                        z
                          .object({
                            date: z
                              .tuple([
                                z.number().int(),
                                z.number().int(),
                                z.number().int(),
                              ])
                              .optional(),
                          })
                          .strict(),
                        z
                          .object({
                            start_date: z.any().optional(),
                            end_date: z.any().optional(),
                          })
                          .strict(),
                        z
                          .object({
                            start_time: z.string().optional(),
                            end_time: z.any().optional(),
                          })
                          .strict(),
                      ])
                    )
                    .optional(),
                  timezone: z.string().optional(),
                })
                .strict(),
            ])
            .default(null),
          description: z.union([z.null(), z.string()]).default(null),
          exceptions: z
            .union([
              z.array(
                z.tuple([
                  z.any(),
                  z.union([
                    z.tuple([
                      z.number().int(),
                      z.number().int(),
                      z.number().int(),
                    ]),
                    z.null(),
                  ]),
                ])
              ),
              z.null(),
            ])
            .default(null),
          location: z.union([z.null(), z.string()]).default(null),
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
                              recurrent_task_id: z.string().optional(),
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
          recurrence: z.union([z.null(), z.any(), z.any()]).default(null),
          title: z.union([z.null(), z.string()]).default(null),
        })
        .strict(),
    },
    async ({ patch }) => {
      try {
        const data = await sendRpcRequest("event.recurrent.update", [patch]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching event.recurrent.update: %o", error);
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
    "eventRecurrentFirstOccurrence",
    "Get the first occurrence of a recurring event",
    {
      /*
{"$id":"#event-rec-id","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"}
*/ id: z.string(),
    },
    async ({ id }) => {
      try {
        const data = await sendRpcRequest("event.recurrent.first_occurrence", [
          id,
        ]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error(
          "Error fetching event.recurrent.first_occurrence: %o",
          error
        );
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
    "eventSetWillAttend",
    "Patch an event's attendance.",
    {
      /*
{"$id":"#event-id","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"}
*/ id: z.string(),

      /*
{"anyOf":[{"type":"null"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"yes","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"no","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"maybe","type":"string"}],"$schema":"https://json-schema.org/draft/2019-09/schema","type":["null","string"]}
*/ will_attend: z.union([
        z.null(),
        z.literal("yes"),
        z.literal("no"),
        z.literal("maybe"),
      ]),
    },
    async ({ id, will_attend }) => {
      try {
        const data = await sendRpcRequest("event.set_will_attend", [
          id,
          will_attend,
        ]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching event.set_will_attend: %o", error);
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
    "eventTasks",
    "Tasks inside an event notes",
    {
      /*
{"$id":"#event-id","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"}
*/ id: z.string(),
    },
    async ({ id }) => {
      try {
        const data = await sendRpcRequest("event.tasks", [id]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching event.tasks: %o", error);
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

  server.tool(
    "eventUpdate",
    "Patch an event.",
    {
      /*
{"additionalProperties":false,"properties":{"id":{"$id":"#event-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"archived":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Archived","default":null,"type":["null","string"]},"attendance":{"anyOf":[{"type":"null"},{"type":"null"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"attend","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"ignore","type":"string"}],"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Attendance","default":null,"type":["null","string"]},"attendees":{"items":{"additionalProperties":false,"properties":{"email":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Email","type":"string"},"name":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Name","type":"string"},"organizer":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Organizer","default":false,"type":"boolean"},"self":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Self","default":false,"type":"boolean"},"status":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"yes","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"no","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"maybe","type":"string"}],"$id":"#yes_no_maybe","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Status","type":"string"}},"$id":"#attendee","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Attendees","default":null,"type":["array","null"]},"description":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Description","default":null,"type":["null","string"]},"location":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Location","default":null,"type":["null","string"]},"notes":{"additionalProperties":false,"properties":{"blocks":{"items":{"anyOf":[{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"blockquote","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"bullet","type":"string"},"list_type":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"ordered","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"unordered","type":"string"}],"$id":"#block-list-type","$schema":"https://json-schema.org/draft/2019-09/schema","title":"List_type","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"depth":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Depth","default":0,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"check","type":"string"},"checked":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Checked","type":"boolean"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"code","type":"string"},"language":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Language","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"callout","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"divider","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"embed","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"heading","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"level":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Level","type":"integer"},"retracted":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Retracted","default":false,"type":"boolean"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"paragraph","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"query","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"recurrent_task","type":"string"},"recurrent_task_id":{"$id":"#task-rec-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Recurrent_task_id","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"recurrence":{"anyOf":[{"additionalProperties":false,"properties":{"start":{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$id":"#date","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Start","type":"array"},"count":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Count","type":"integer"},"rule":{"anyOf":[{"additionalProperties":false,"properties":{"every":{"const":"day","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"month","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"items":[{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"monday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"tuesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"wednesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"thursday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"friday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"saturday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"sunday","type":"string"}],"$id":"#weekday","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}],"$id":"#month_day","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":["array","integer"]}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"week","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"weekdays":{"additionalProperties":false,"properties":{"monday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Monday","default":false,"type":"boolean"},"tuesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Tuesday","default":false,"type":"boolean"},"wednesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Wednesday","default":false,"type":"boolean"},"thursday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Thursday","default":false,"type":"boolean"},"friday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Friday","default":false,"type":"boolean"},"saturday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Saturday","default":false,"type":"boolean"},"sunday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Sunday","default":false,"type":"boolean"}},"$id":"#weekdays","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Weekdays","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"workday","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"year","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":"integer"},"month":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"january","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"february","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"march","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"april","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"may","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"june","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"july","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"august","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"september","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"october","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"november","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"december","type":"string"}],"$id":"#month","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Month","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#rule","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Rule","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"end":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"End"},"start":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Start"},"rule":{"anyOf":[{"additionalProperties":false,"properties":{"every":{"const":"day","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"month","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"items":[{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"monday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"tuesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"wednesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"thursday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"friday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"saturday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"sunday","type":"string"}],"$id":"#weekday","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}],"$id":"#month_day","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":["array","integer"]}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"week","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"weekdays":{"additionalProperties":false,"properties":{"monday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Monday","default":false,"type":"boolean"},"tuesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Tuesday","default":false,"type":"boolean"},"wednesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Wednesday","default":false,"type":"boolean"},"thursday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Thursday","default":false,"type":"boolean"},"friday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Friday","default":false,"type":"boolean"},"saturday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Saturday","default":false,"type":"boolean"},"sunday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Sunday","default":false,"type":"boolean"}},"$id":"#weekdays","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Weekdays","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"workday","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"year","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":"integer"},"month":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"january","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"february","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"march","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"april","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"may","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"june","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"july","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"august","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"september","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"october","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"november","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"december","type":"string"}],"$id":"#month","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Month","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#rule","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Rule","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"}],"$id":"#recurrence","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Recurrence","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"todo","type":"string"},"checked":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Checked","type":"boolean"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"task":{"$id":"#task-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Task","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"}],"$id":"#block","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Blocks","type":"array"}},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Notes","default":null,"type":["null","object"]},"task":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Task","default":null,"type":["null","string"]},"time":{"anyOf":[{"type":"null"},{"additionalProperties":false,"properties":{"date":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Date"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"start_date":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Start_date"},"end_date":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"End_date"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"start_time":{"$id":"#time","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Start_time","type":"string"},"end_time":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#time","title":"End_time"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Time","default":null,"type":["null","object"]},"title":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Title","default":null,"type":["null","string"]}},"$id":"#event-patch","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}
*/ patch: z
        .object({
          id: z.string().optional(),
          archived: z.union([z.null(), z.string()]).default(null),
          attendance: z
            .union([
              z.null(),
              z.null(),
              z.literal("attend"),
              z.literal("ignore"),
            ])
            .default(null),
          attendees: z
            .union([
              z.array(
                z
                  .object({
                    email: z.string().optional(),
                    name: z.string().optional(),
                    organizer: z.boolean(),
                    self: z.boolean(),
                    status: z
                      .union([
                        z.literal("yes"),
                        z.literal("no"),
                        z.literal("maybe"),
                      ])
                      .optional(),
                  })
                  .strict()
              ),
              z.null(),
            ])
            .default(null),
          description: z.union([z.null(), z.string()]).default(null),
          location: z.union([z.null(), z.string()]).default(null),
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
                              recurrent_task_id: z.string().optional(),
                              content: z.string().optional(),
                              recurrence: z
                                .record(z.any())
                                .and(
                                  z.union([
                                    z
                                      .object({
                                        start: z
                                          .tuple([
                                            z.number().int(),
                                            z.number().int(),
                                            z.number().int(),
                                          ])
                                          .optional(),
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
          task: z.union([z.null(), z.string()]).default(null),
          time: z
            .union([
              z.null(),
              z.object({ date: z.any().optional() }).strict(),
              z
                .object({
                  start_date: z.any().optional(),
                  end_date: z.any().optional(),
                })
                .strict(),
              z
                .object({
                  start_time: z.string().optional(),
                  end_time: z.any().optional(),
                })
                .strict(),
            ])
            .default(null),
          title: z.union([z.null(), z.string()]).default(null),
        })
        .strict(),

      /*
{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"boolean"}
*/ send_updates: z.boolean(),
    },
    async ({ patch, send_updates }) => {
      try {
        const data = await sendRpcRequest("event.update", [
          patch,
          send_updates,
        ]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching event.update: %o", error);
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
    "eventWithNotes",
    "Events with note in antechronological order.",
    {},
    async ({}) => {
      try {
        const data = await sendRpcRequest("event.with_notes", []);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching event.with_notes: %o", error);
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
    "eventWithSameAttendees",
    "Events with the same set of attendees as the given event.",
    {
      /*
{"$id":"#event-id","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"}
*/ id: z.string(),
    },
    async ({ id }) => {
      try {
        const data = await sendRpcRequest("event.with_same_attendees", [id]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching event.with_same_attendees: %o", error);
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
    "eventAlignSelfAttendee",
    "Update the `self` attendee in the given attendee list to match the owner of the given calendar.",
    {
      /*
{"$id":"#calendar-id","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"}
*/ owner: z.string(),

      /*
{"items":{"additionalProperties":false,"properties":{"email":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Email","type":"string"},"name":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Name","type":"string"},"organizer":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Organizer","default":false,"type":"boolean"},"self":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Self","default":false,"type":"boolean"},"status":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"yes","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"no","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"maybe","type":"string"}],"$id":"#yes_no_maybe","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Status","type":"string"}},"$id":"#attendee","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}
*/ attendees: z.array(
        z
          .object({
            email: z.string().optional(),
            name: z.string().optional(),
            organizer: z.boolean().default(false),
            self: z.boolean().default(false),
            status: z
              .union([z.literal("yes"), z.literal("no"), z.literal("maybe")])
              .optional(),
          })
          .strict()
      ),
    },
    async ({ owner, attendees }) => {
      try {
        const data = await sendRpcRequest("event.align_self_attendee", [
          owner,
          attendees,
        ]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching event.align_self_attendee: %o", error);
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

  server.tool("settingsHours", "Hours format.", {}, async ({}) => {
    try {
      const data = await sendRpcRequest("settings.hours", []);
      return {
        content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      };
    } catch (error) {
      logger.error("Error fetching settings.hours: %o", error);
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

  server.tool("settingsLocale", "Locale.", {}, async ({}) => {
    try {
      const data = await sendRpcRequest("settings.locale", []);
      return {
        content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      };
    } catch (error) {
      logger.error("Error fetching settings.locale: %o", error);
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
    "settingsPatch",
    "Edit settings.",
    {
      /*
{"additionalProperties":false,"properties":{"access_restrictions":{"additionalProperties":{"additionalProperties":false,"properties":{"allow_calendar_access":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Allow_calendar_access","default":null,"type":["boolean","null"]},"allow_contact_access":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Allow_contact_access","default":null,"type":["boolean","null"]}},"$id":"#access-restrictions-patch","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},"$id":"#access-restrictions-patch-dictionary","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Access_restrictions","default":{},"type":"object"},"calendars":{"additionalProperties":{"additionalProperties":false,"properties":{"color":{"anyOf":[{"type":"null"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"a","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"b","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"c","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"d","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"e","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"f","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"g","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"h","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"i","type":"string"}],"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Color","default":null,"type":["null","string"]},"disabled":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Disabled","default":null,"type":["boolean","null"]},"role":{"anyOf":[{"type":"null"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"default","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"primary","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"secondary","type":"string"}],"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Role","default":null,"type":["null","string"]}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":["null","object"]},"$id":"#dictionary","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Calendars","default":{},"type":"object"},"locale":{"additionalProperties":false,"properties":{"hours":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Hours","type":["integer","null"]}},"$id":"#locale-settings-patch","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Locale","default":{"hours":null},"type":"object"},"hours":{"additionalProperties":false,"properties":{"day":{"additionalProperties":false,"properties":{"hours":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Hours","maximum":24,"minimum":0,"type":"integer"},"minutes":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Minutes","default":0,"maximum":60,"minimum":0,"type":"integer"},"seconds":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Seconds","default":0,"maximum":60,"minimum":0,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","default":null,"type":["null","object"]},"noon":{"additionalProperties":false,"properties":{"hours":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Hours","maximum":24,"minimum":0,"type":"integer"},"minutes":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Minutes","default":0,"maximum":60,"minimum":0,"type":"integer"},"seconds":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Seconds","default":0,"maximum":60,"minimum":0,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Noon","default":null,"type":["null","object"]},"afternoon":{"additionalProperties":false,"properties":{"hours":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Hours","maximum":24,"minimum":0,"type":"integer"},"minutes":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Minutes","default":0,"maximum":60,"minimum":0,"type":"integer"},"seconds":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Seconds","default":0,"maximum":60,"minimum":0,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Afternoon","default":null,"type":["null","object"]},"evening":{"additionalProperties":false,"properties":{"hours":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Hours","maximum":24,"minimum":0,"type":"integer"},"minutes":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Minutes","default":0,"maximum":60,"minimum":0,"type":"integer"},"seconds":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Seconds","default":0,"maximum":60,"minimum":0,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Evening","default":null,"type":["null","object"]},"night":{"additionalProperties":false,"properties":{"hours":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Hours","maximum":24,"minimum":0,"type":"integer"},"minutes":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Minutes","default":0,"maximum":60,"minimum":0,"type":"integer"},"seconds":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Seconds","default":0,"maximum":60,"minimum":0,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Night","default":null,"type":["null","object"]}},"$id":"#hours-settings-patch","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Hours","default":{},"type":"object"},"mru_destinations":{"items":{"additionalProperties":false,"properties":{"kind":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"event","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"event-rec","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"page","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"people","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"task","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"task-rec","type":"string"}],"$id":"#kind","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Kind","type":"string"},"id":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"}},"$id":"#id","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Mru_destinations","default":null,"type":["array","null"]},"mru_peoples":{"items":{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Mru_peoples","default":null,"type":["array","null"]},"week_start":{"anyOf":[{"type":"null"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"monday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"tuesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"wednesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"thursday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"friday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"saturday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"sunday","type":"string"}],"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Week_start","default":null,"type":["null","string"]}},"$id":"#settings-patch","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}
*/ patch: z
        .object({
          access_restrictions: z
            .record(
              z
                .object({
                  allow_calendar_access: z
                    .union([z.boolean(), z.null()])
                    .default(null),
                  allow_contact_access: z
                    .union([z.boolean(), z.null()])
                    .default(null),
                })
                .strict()
            )
            .default({}),
          calendars: z
            .record(
              z.union([
                z.null(),
                z
                  .object({
                    color: z.union([
                      z.null(),
                      z.literal("a"),
                      z.literal("b"),
                      z.literal("c"),
                      z.literal("d"),
                      z.literal("e"),
                      z.literal("f"),
                      z.literal("g"),
                      z.literal("h"),
                      z.literal("i"),
                    ]),
                    disabled: z.union([z.boolean(), z.null()]),
                    role: z.union([
                      z.null(),
                      z.literal("default"),
                      z.literal("primary"),
                      z.literal("secondary"),
                    ]),
                  })
                  .strict(),
              ])
            )
            .default({}),
          locale: z
            .object({ hours: z.union([z.number().int(), z.null()]).optional() })
            .strict()
            .default({ hours: null }),
          hours: z
            .object({
              day: z
                .union([
                  z.null(),
                  z
                    .object({
                      hours: z.number().int().gte(0).lte(24).optional(),
                      minutes: z.number().int().gte(0).lte(60),
                      seconds: z.number().int().gte(0).lte(60),
                    })
                    .strict(),
                ])
                .default(null),
              noon: z
                .union([
                  z.null(),
                  z
                    .object({
                      hours: z.number().int().gte(0).lte(24).optional(),
                      minutes: z.number().int().gte(0).lte(60),
                      seconds: z.number().int().gte(0).lte(60),
                    })
                    .strict(),
                ])
                .default(null),
              afternoon: z
                .union([
                  z.null(),
                  z
                    .object({
                      hours: z.number().int().gte(0).lte(24).optional(),
                      minutes: z.number().int().gte(0).lte(60),
                      seconds: z.number().int().gte(0).lte(60),
                    })
                    .strict(),
                ])
                .default(null),
              evening: z
                .union([
                  z.null(),
                  z
                    .object({
                      hours: z.number().int().gte(0).lte(24).optional(),
                      minutes: z.number().int().gte(0).lte(60),
                      seconds: z.number().int().gte(0).lte(60),
                    })
                    .strict(),
                ])
                .default(null),
              night: z
                .union([
                  z.null(),
                  z
                    .object({
                      hours: z.number().int().gte(0).lte(24).optional(),
                      minutes: z.number().int().gte(0).lte(60),
                      seconds: z.number().int().gte(0).lte(60),
                    })
                    .strict(),
                ])
                .default(null),
            })
            .strict()
            .default({}),
          mru_destinations: z
            .union([
              z.array(
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
                  .strict()
              ),
              z.null(),
            ])
            .default(null),
          mru_peoples: z.union([z.array(z.string()), z.null()]).default(null),
          week_start: z
            .union([
              z.null(),
              z.literal("monday"),
              z.literal("tuesday"),
              z.literal("wednesday"),
              z.literal("thursday"),
              z.literal("friday"),
              z.literal("saturday"),
              z.literal("sunday"),
            ])
            .default(null),
        })
        .strict(),
    },
    async ({ patch }) => {
      try {
        const data = await sendRpcRequest("settings.patch", [patch]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching settings.patch: %o", error);
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

  server.tool("settingsSettings", "Settings.", {}, async ({}) => {
    try {
      const data = await sendRpcRequest("settings.settings", []);
      return {
        content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      };
    } catch (error) {
      logger.error("Error fetching settings.settings: %o", error);
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
    "pageArchive",
    "Archive page.",
    {
      /*
{"$id":"#page-id","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"}
*/ id: z.string(),
    },
    async ({ id }) => {
      try {
        const data = await sendRpcRequest("page.archive", [id]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching page.archive: %o", error);
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

  server.tool("pageArchived", "All archived pages.", {}, async ({}) => {
    try {
      const data = await sendRpcRequest("page.archived", []);
      return {
        content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      };
    } catch (error) {
      logger.error("Error fetching page.archived: %o", error);
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
    "pageCreate",
    "Create a pages.",
    {
      /*
{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"}
*/ title: z.string(),

      /*
{"$schema":"https://json-schema.org/draft/2019-09/schema","type":["null","string"]}
*/ parent: z.union([z.null(), z.string()]),
    },
    async ({ title, parent }) => {
      try {
        const data = await sendRpcRequest("page.create", [title, parent]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching page.create: %o", error);
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
    "pageDelete",
    "Delete page.",
    {
      /*
{"$id":"#page-id","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"}
*/ id: z.string(),
    },
    async ({ id }) => {
      try {
        const data = await sendRpcRequest("page.delete", [id]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching page.delete: %o", error);
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
    "pageMove",
    "Change a page parent.",
    {
      /*
{"$id":"#page-id","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"}
*/ id: z.string(),

      /*
{"$schema":"https://json-schema.org/draft/2019-09/schema","type":["null","string"]}
*/ parent: z.union([z.null(), z.string()]),

      /*
{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}
*/ index: z.number().int(),
    },
    async ({ id, parent, index }) => {
      try {
        const data = await sendRpcRequest("page.move", [id, parent, index]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching page.move: %o", error);
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
    "pageUnarchive",
    "Unarchive page.",
    {
      /*
{"$id":"#page-id","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"}
*/ id: z.string(),
    },
    async ({ id }) => {
      try {
        const data = await sendRpcRequest("page.unarchive", [id]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching page.unarchive: %o", error);
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
    "pageUpdate",
    "Update a page.",
    {
      /*
{"$id":"#page-id","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"}
*/ id: z.string(),

      /*
{"additionalProperties":false,"properties":{"archived":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Archived","default":null,"type":["null","string"]},"notes":{"additionalProperties":false,"properties":{"blocks":{"items":{"anyOf":[{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"blockquote","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"bullet","type":"string"},"list_type":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"ordered","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"unordered","type":"string"}],"$id":"#block-list-type","$schema":"https://json-schema.org/draft/2019-09/schema","title":"List_type","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"depth":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Depth","default":0,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"check","type":"string"},"checked":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Checked","type":"boolean"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"code","type":"string"},"language":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Language","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"callout","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"divider","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"embed","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"heading","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"level":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Level","type":"integer"},"retracted":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Retracted","default":false,"type":"boolean"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"paragraph","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"query","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"recurrent_task","type":"string"},"recurrent_task_id":{"$id":"#task-rec-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Recurrent_task_id","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"recurrence":{"anyOf":[{"additionalProperties":false,"properties":{"start":{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$id":"#date","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Start","type":"array"},"count":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Count","type":"integer"},"rule":{"anyOf":[{"additionalProperties":false,"properties":{"every":{"const":"day","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"month","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"items":[{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"monday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"tuesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"wednesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"thursday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"friday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"saturday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"sunday","type":"string"}],"$id":"#weekday","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}],"$id":"#month_day","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":["array","integer"]}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"week","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"weekdays":{"additionalProperties":false,"properties":{"monday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Monday","default":false,"type":"boolean"},"tuesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Tuesday","default":false,"type":"boolean"},"wednesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Wednesday","default":false,"type":"boolean"},"thursday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Thursday","default":false,"type":"boolean"},"friday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Friday","default":false,"type":"boolean"},"saturday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Saturday","default":false,"type":"boolean"},"sunday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Sunday","default":false,"type":"boolean"}},"$id":"#weekdays","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Weekdays","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"workday","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"year","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":"integer"},"month":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"january","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"february","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"march","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"april","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"may","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"june","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"july","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"august","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"september","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"october","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"november","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"december","type":"string"}],"$id":"#month","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Month","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#rule","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Rule","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"end":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"End"},"start":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Start"},"rule":{"anyOf":[{"additionalProperties":false,"properties":{"every":{"const":"day","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"month","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"items":[{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"monday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"tuesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"wednesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"thursday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"friday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"saturday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"sunday","type":"string"}],"$id":"#weekday","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}],"$id":"#month_day","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":["array","integer"]}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"week","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"weekdays":{"additionalProperties":false,"properties":{"monday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Monday","default":false,"type":"boolean"},"tuesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Tuesday","default":false,"type":"boolean"},"wednesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Wednesday","default":false,"type":"boolean"},"thursday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Thursday","default":false,"type":"boolean"},"friday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Friday","default":false,"type":"boolean"},"saturday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Saturday","default":false,"type":"boolean"},"sunday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Sunday","default":false,"type":"boolean"}},"$id":"#weekdays","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Weekdays","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"workday","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"year","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":"integer"},"month":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"january","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"february","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"march","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"april","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"may","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"june","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"july","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"august","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"september","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"october","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"november","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"december","type":"string"}],"$id":"#month","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Month","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#rule","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Rule","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"}],"$id":"#recurrence","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Recurrence","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"todo","type":"string"},"checked":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Checked","type":"boolean"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"task":{"$id":"#task-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Task","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"}],"$id":"#block","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Blocks","type":"array"}},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Notes","default":null,"type":["null","object"]},"title":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Title","default":null,"type":["null","string"]},"parent":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Parent","default":null,"type":["null","string"]}},"$id":"#page-patch","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}
*/ patch: z
        .object({
          archived: z.union([z.null(), z.string()]).default(null),
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
                              recurrent_task_id: z.string().optional(),
                              content: z.string().optional(),
                              recurrence: z
                                .record(z.any())
                                .and(
                                  z.union([
                                    z
                                      .object({
                                        start: z
                                          .tuple([
                                            z.number().int(),
                                            z.number().int(),
                                            z.number().int(),
                                          ])
                                          .optional(),
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
          parent: z.union([z.null(), z.string()]).default(null),
        })
        .strict(),
    },
    async ({ id, patch }) => {
      try {
        const data = await sendRpcRequest("page.update", [id, patch]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching page.update: %o", error);
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
    "peoplePatch",
    "Modify a contact.",
    {
      /*
{"$id":"#people-id","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"}
*/ id: z.string(),

      /*
{"additionalProperties":false,"properties":{"notes":{"additionalProperties":false,"properties":{"blocks":{"items":{"anyOf":[{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"blockquote","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"bullet","type":"string"},"list_type":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"ordered","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"unordered","type":"string"}],"$id":"#block-list-type","$schema":"https://json-schema.org/draft/2019-09/schema","title":"List_type","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"depth":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Depth","default":0,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"check","type":"string"},"checked":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Checked","type":"boolean"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"code","type":"string"},"language":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Language","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"callout","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"divider","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"embed","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"heading","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"level":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Level","type":"integer"},"retracted":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Retracted","default":false,"type":"boolean"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"paragraph","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"query","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"recurrent_task","type":"string"},"recurrent_task_id":{"$id":"#task-rec-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Recurrent_task_id","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"recurrence":{"anyOf":[{"additionalProperties":false,"properties":{"start":{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$id":"#date","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Start","type":"array"},"count":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Count","type":"integer"},"rule":{"anyOf":[{"additionalProperties":false,"properties":{"every":{"const":"day","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"month","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"items":[{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"monday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"tuesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"wednesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"thursday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"friday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"saturday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"sunday","type":"string"}],"$id":"#weekday","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}],"$id":"#month_day","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":["array","integer"]}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"week","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"weekdays":{"additionalProperties":false,"properties":{"monday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Monday","default":false,"type":"boolean"},"tuesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Tuesday","default":false,"type":"boolean"},"wednesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Wednesday","default":false,"type":"boolean"},"thursday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Thursday","default":false,"type":"boolean"},"friday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Friday","default":false,"type":"boolean"},"saturday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Saturday","default":false,"type":"boolean"},"sunday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Sunday","default":false,"type":"boolean"}},"$id":"#weekdays","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Weekdays","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"workday","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"year","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":"integer"},"month":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"january","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"february","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"march","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"april","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"may","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"june","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"july","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"august","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"september","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"october","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"november","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"december","type":"string"}],"$id":"#month","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Month","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#rule","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Rule","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"end":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"End"},"start":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Start"},"rule":{"anyOf":[{"additionalProperties":false,"properties":{"every":{"const":"day","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"month","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"items":[{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"monday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"tuesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"wednesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"thursday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"friday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"saturday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"sunday","type":"string"}],"$id":"#weekday","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}],"$id":"#month_day","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":["array","integer"]}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"week","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"weekdays":{"additionalProperties":false,"properties":{"monday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Monday","default":false,"type":"boolean"},"tuesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Tuesday","default":false,"type":"boolean"},"wednesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Wednesday","default":false,"type":"boolean"},"thursday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Thursday","default":false,"type":"boolean"},"friday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Friday","default":false,"type":"boolean"},"saturday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Saturday","default":false,"type":"boolean"},"sunday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Sunday","default":false,"type":"boolean"}},"$id":"#weekdays","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Weekdays","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"workday","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"year","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":"integer"},"month":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"january","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"february","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"march","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"april","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"may","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"june","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"july","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"august","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"september","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"october","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"november","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"december","type":"string"}],"$id":"#month","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Month","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#rule","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Rule","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"}],"$id":"#recurrence","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Recurrence","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"todo","type":"string"},"checked":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Checked","type":"boolean"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"task":{"$id":"#task-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Task","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"}],"$id":"#block","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Blocks","type":"array"}},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Notes","default":null,"type":["null","object"]},"archived":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Archived","default":null,"type":["null","string"]}},"$id":"#api-person-patch","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}
*/ patch: z
        .object({
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
                              recurrent_task_id: z.string().optional(),
                              content: z.string().optional(),
                              recurrence: z
                                .record(z.any())
                                .and(
                                  z.union([
                                    z
                                      .object({
                                        start: z
                                          .tuple([
                                            z.number().int(),
                                            z.number().int(),
                                            z.number().int(),
                                          ])
                                          .optional(),
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
          archived: z.union([z.null(), z.string()]).default(null),
        })
        .strict(),
    },
    async ({ id, patch }) => {
      try {
        const data = await sendRpcRequest("people.patch", [id, patch]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching people.patch: %o", error);
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
    "taskAllocate",
    "Allocate a task.",
    {
      /*
{"$id":"#task-id","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"}
*/ id: z.string(),

      /*
{"additionalProperties":false,"properties":{"calendar":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Calendar","type":"string"},"dates":{"anyOf":[{"additionalProperties":false,"properties":{"type":{"const":"date","type":"string"},"date":{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$id":"#date","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Date","type":"array"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"type":{"const":"date_range","type":"string"},"end":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"End"},"start":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Start"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"type":{"const":"month","type":"string"},"hint":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Hint","type":"integer"},"month":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"january","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"february","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"march","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"april","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"may","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"june","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"july","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"august","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"september","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"october","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"november","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"december","type":"string"}],"$id":"#month","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Month","type":"string"},"year":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Year","type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"type":{"const":"week","type":"string"},"week":{"additionalProperties":false,"properties":{"year":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Year","type":"integer"},"n":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"N","type":"integer"}},"$id":"#week","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Week","type":"object"},"hint":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"monday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"tuesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"wednesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"thursday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"friday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"saturday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"sunday","type":"string"}],"$id":"#weekday","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Hint","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"type":{"const":"year","type":"string"},"year":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Year","type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#mandate-dates","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Dates","type":"object"},"daytime":{"items":[{"additionalProperties":false,"properties":{"hours":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Hours","maximum":24,"minimum":0,"type":"integer"},"minutes":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Minutes","default":0,"maximum":60,"minimum":0,"type":"integer"},"seconds":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Seconds","default":0,"maximum":60,"minimum":0,"type":"integer"}},"$id":"#daytime","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"hours":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Hours","maximum":24,"minimum":0,"type":"integer"},"minutes":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Minutes","default":0,"maximum":60,"minimum":0,"type":"integer"},"seconds":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Seconds","default":0,"maximum":60,"minimum":0,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":["null","object"]}],"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Daytime","type":"array"},"document":{"additionalProperties":false,"properties":{"id":{"additionalProperties":false,"properties":{"kind":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"event","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"event-rec","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"page","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"people","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"task","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"task-rec","type":"string"}],"$id":"#kind","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Kind","type":"string"},"id":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"}},"$id":"#id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"object"},"section":{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Section","type":"array"}},"$id":"#mandate-document","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Document","type":"object"},"duration":{"$id":"#span","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Duration","type":"integer"},"participants":{"items":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"additionalProperties":false,"properties":{"email":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Email","type":"string"},"emailPrimary":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"EmailPrimary","type":"string"},"helper":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Helper","type":"string"},"id":{"$id":"#people-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"}},"$id":"#mandate-participant","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#mandate-participant-mandate-participant-lenient","$schema":"https://json-schema.org/draft/2019-09/schema","type":["object","string"]},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Participants","default":[],"type":"array"},"recurrence":{"anyOf":[{"additionalProperties":false,"properties":{"start":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Start"},"count":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Count","type":"integer"},"rule":{"anyOf":[{"additionalProperties":false,"properties":{"every":{"const":"day","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"month","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#weekday"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}],"$id":"#month_day","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":["array","integer"]}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"week","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"weekdays":{"additionalProperties":false,"properties":{"monday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Monday","default":false,"type":"boolean"},"tuesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Tuesday","default":false,"type":"boolean"},"wednesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Wednesday","default":false,"type":"boolean"},"thursday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Thursday","default":false,"type":"boolean"},"friday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Friday","default":false,"type":"boolean"},"saturday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Saturday","default":false,"type":"boolean"},"sunday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Sunday","default":false,"type":"boolean"}},"$id":"#weekdays","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Weekdays","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"workday","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"year","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":"integer"},"month":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#month","title":"Month"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#rule","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Rule","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"end":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"End"},"start":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Start"},"rule":{"anyOf":[{"additionalProperties":false,"properties":{"every":{"const":"day","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"month","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#weekday"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}],"$id":"#month_day","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":["array","integer"]}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"week","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"weekdays":{"additionalProperties":false,"properties":{"monday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Monday","default":false,"type":"boolean"},"tuesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Tuesday","default":false,"type":"boolean"},"wednesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Wednesday","default":false,"type":"boolean"},"thursday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Thursday","default":false,"type":"boolean"},"friday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Friday","default":false,"type":"boolean"},"saturday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Saturday","default":false,"type":"boolean"},"sunday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Sunday","default":false,"type":"boolean"}},"$id":"#weekdays","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Weekdays","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"workday","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"year","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":"integer"},"month":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#month","title":"Month"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#rule","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Rule","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"}],"$id":"#recurrence","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Recurrence","type":"object"},"slot":{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"additionalProperties":false,"properties":{"name":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Name","type":"string"},"kind":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"focus","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"meetings","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"processing","type":"string"}],"$id":"#slot-kind","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Kind","type":"string"}},"$id":"#slot-type","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Slot","type":"array"}},"$id":"#action_allocation","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}
*/ allocation: z
        .object({
          calendar: z.string().optional(),
          dates: z
            .record(z.any())
            .and(
              z.union([
                z
                  .object({
                    type: z.literal("date").optional(),
                    date: z
                      .tuple([
                        z.number().int(),
                        z.number().int(),
                        z.number().int(),
                      ])
                      .optional(),
                  })
                  .strict(),
                z
                  .object({
                    type: z.literal("date_range").optional(),
                    end: z.any().optional(),
                    start: z.any().optional(),
                  })
                  .strict(),
                z
                  .object({
                    type: z.literal("month").optional(),
                    hint: z.number().int().optional(),
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
                    year: z.number().int().optional(),
                  })
                  .strict(),
                z
                  .object({
                    type: z.literal("week").optional(),
                    week: z
                      .object({
                        year: z.number().int().optional(),
                        n: z.number().int().optional(),
                      })
                      .strict()
                      .optional(),
                    hint: z
                      .union([
                        z.literal("monday"),
                        z.literal("tuesday"),
                        z.literal("wednesday"),
                        z.literal("thursday"),
                        z.literal("friday"),
                        z.literal("saturday"),
                        z.literal("sunday"),
                      ])
                      .optional(),
                  })
                  .strict(),
                z
                  .object({
                    type: z.literal("year").optional(),
                    year: z.number().int().optional(),
                  })
                  .strict(),
              ])
            )
            .optional(),
          daytime: z
            .tuple([
              z
                .object({
                  hours: z.number().int().gte(0).lte(24).optional(),
                  minutes: z.number().int().gte(0).lte(60).default(0),
                  seconds: z.number().int().gte(0).lte(60).default(0),
                })
                .strict(),
              z.union([
                z.null(),
                z
                  .object({
                    hours: z.number().int().gte(0).lte(24).optional(),
                    minutes: z.number().int().gte(0).lte(60),
                    seconds: z.number().int().gte(0).lte(60),
                  })
                  .strict(),
              ]),
            ])
            .optional(),
          document: z
            .object({
              id: z
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
                .strict()
                .optional(),
              section: z.tuple([z.string(), z.number().int()]).optional(),
            })
            .strict()
            .optional(),
          duration: z.number().int().optional(),
          participants: z
            .array(
              z.union([
                z.string(),
                z
                  .object({
                    email: z.string().optional(),
                    emailPrimary: z.string().optional(),
                    helper: z.string().optional(),
                    id: z.string().optional(),
                  })
                  .strict(),
              ])
            )
            .default([]),
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
                              every: z.literal("day").optional(),
                              period: z.number().int().default(1),
                            })
                            .strict(),
                          z
                            .object({
                              every: z.literal("month").optional(),
                              period: z.number().int().default(1),
                              day: z
                                .union([
                                  z.number().int(),
                                  z.tuple([z.any(), z.number().int()]),
                                ])
                                .optional(),
                            })
                            .strict(),
                          z
                            .object({
                              every: z.literal("week").optional(),
                              period: z.number().int().default(1),
                              weekdays: z
                                .object({
                                  monday: z.boolean().default(false),
                                  tuesday: z.boolean().default(false),
                                  wednesday: z.boolean().default(false),
                                  thursday: z.boolean().default(false),
                                  friday: z.boolean().default(false),
                                  saturday: z.boolean().default(false),
                                  sunday: z.boolean().default(false),
                                })
                                .strict()
                                .optional(),
                            })
                            .strict(),
                          z
                            .object({
                              every: z.literal("workday").optional(),
                              period: z.number().int().default(1),
                            })
                            .strict(),
                          z
                            .object({
                              every: z.literal("year").optional(),
                              period: z.number().int().default(1),
                              day: z.number().int().optional(),
                              month: z.any().optional(),
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
                              every: z.literal("day").optional(),
                              period: z.number().int().default(1),
                            })
                            .strict(),
                          z
                            .object({
                              every: z.literal("month").optional(),
                              period: z.number().int().default(1),
                              day: z
                                .union([
                                  z.number().int(),
                                  z.tuple([z.any(), z.number().int()]),
                                ])
                                .optional(),
                            })
                            .strict(),
                          z
                            .object({
                              every: z.literal("week").optional(),
                              period: z.number().int().default(1),
                              weekdays: z
                                .object({
                                  monday: z.boolean().default(false),
                                  tuesday: z.boolean().default(false),
                                  wednesday: z.boolean().default(false),
                                  thursday: z.boolean().default(false),
                                  friday: z.boolean().default(false),
                                  saturday: z.boolean().default(false),
                                  sunday: z.boolean().default(false),
                                })
                                .strict()
                                .optional(),
                            })
                            .strict(),
                          z
                            .object({
                              every: z.literal("workday").optional(),
                              period: z.number().int().default(1),
                            })
                            .strict(),
                          z
                            .object({
                              every: z.literal("year").optional(),
                              period: z.number().int().default(1),
                              day: z.number().int().optional(),
                              month: z.any().optional(),
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
          slot: z
            .tuple([
              z.string(),
              z
                .object({
                  name: z.string().optional(),
                  kind: z
                    .union([
                      z.literal("focus"),
                      z.literal("meetings"),
                      z.literal("processing"),
                    ])
                    .optional(),
                })
                .strict(),
            ])
            .optional(),
        })
        .strict(),
    },
    async ({ id, allocation }) => {
      try {
        const data = await sendRpcRequest("task.allocate", [id, allocation]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching task.allocate: %o", error);
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
    "taskBatch",
    "Tasks of a batch.",
    {
      /*
{"additionalProperties":false,"properties":{"year":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Year","type":"integer"},"n":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"N","type":"integer"}},"$id":"#week","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}
*/ week: z
        .object({
          year: z.number().int().optional(),
          n: z.number().int().optional(),
        })
        .strict(),
    },
    async ({ week }) => {
      try {
        const data = await sendRpcRequest("task.batch", [week]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching task.batch: %o", error);
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
    "taskBatched",
    "The batch of a task, if any.",
    {
      /*
{"additionalProperties":false,"properties":{"allocations":{"items":{"$id":"#event-id","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Allocations","default":[],"type":"array"},"client":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Client","default":null,"type":["null","string"]},"created":{"$id":"#time","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Created","type":"string"},"deleted":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#time","title":"Deleted"},"etag":{"additionalProperties":false,"properties":{"time":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#time","title":"Time"},"version":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Version","type":"integer"}},"$id":"#etag_intf","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Etag","type":"object"},"id":{"$id":"#task-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"ignored":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Ignored","default":null,"type":["null","string"]},"completed":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Completed","default":null,"type":["null","string"]},"integration_id":{"$id":"#integration-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Integration_id","type":"string"},"distant_task_id":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Distant_task_id","type":"string"},"integration_data":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Integration_data","default":null,"type":"null"},"parent":{"additionalProperties":false,"properties":{"kind":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"event","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"event-rec","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"page","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"people","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"task","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"task-rec","type":"string"}],"$id":"#kind","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Kind","type":"string"},"id":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Parent","default":null,"type":["null","object"]},"scheduled":{"anyOf":[{"type":"null"},{"additionalProperties":false,"properties":{"year":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Year","type":"integer"},"n":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"N","type":"integer"}},"$id":"#week","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$id":"#date","$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}],"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Scheduled","default":null,"type":["array","null","object"]},"starred":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Starred","default":false,"type":"boolean"},"occurrence":{"additionalProperties":false,"properties":{"date":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Date"},"recurrence":{"$id":"#task-rec-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Recurrence","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Occurrence","default":null,"type":["null","object"]},"notes":{"additionalProperties":false,"properties":{"blocks":{"items":{"anyOf":[{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"blockquote","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"bullet","type":"string"},"list_type":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"ordered","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"unordered","type":"string"}],"$id":"#block-list-type","$schema":"https://json-schema.org/draft/2019-09/schema","title":"List_type","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"depth":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Depth","default":0,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"check","type":"string"},"checked":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Checked","type":"boolean"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"code","type":"string"},"language":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Language","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"callout","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"divider","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"embed","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"heading","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"level":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Level","type":"integer"},"retracted":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Retracted","default":false,"type":"boolean"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"paragraph","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"query","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"recurrent_task","type":"string"},"recurrent_task_id":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#task-rec-id","title":"Recurrent_task_id"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"recurrence":{"anyOf":[{"additionalProperties":false,"properties":{"start":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Start"},"count":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Count","type":"integer"},"rule":{"anyOf":[{"additionalProperties":false,"properties":{"every":{"const":"day","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"month","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"items":[{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"monday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"tuesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"wednesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"thursday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"friday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"saturday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"sunday","type":"string"}],"$id":"#weekday","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}],"$id":"#month_day","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":["array","integer"]}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"week","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"weekdays":{"additionalProperties":false,"properties":{"monday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Monday","default":false,"type":"boolean"},"tuesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Tuesday","default":false,"type":"boolean"},"wednesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Wednesday","default":false,"type":"boolean"},"thursday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Thursday","default":false,"type":"boolean"},"friday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Friday","default":false,"type":"boolean"},"saturday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Saturday","default":false,"type":"boolean"},"sunday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Sunday","default":false,"type":"boolean"}},"$id":"#weekdays","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Weekdays","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"workday","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"year","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":"integer"},"month":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"january","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"february","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"march","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"april","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"may","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"june","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"july","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"august","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"september","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"october","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"november","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"december","type":"string"}],"$id":"#month","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Month","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#rule","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Rule","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"end":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"End"},"start":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Start"},"rule":{"anyOf":[{"additionalProperties":false,"properties":{"every":{"const":"day","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"month","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"items":[{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"monday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"tuesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"wednesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"thursday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"friday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"saturday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"sunday","type":"string"}],"$id":"#weekday","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}],"$id":"#month_day","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":["array","integer"]}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"week","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"weekdays":{"additionalProperties":false,"properties":{"monday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Monday","default":false,"type":"boolean"},"tuesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Tuesday","default":false,"type":"boolean"},"wednesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Wednesday","default":false,"type":"boolean"},"thursday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Thursday","default":false,"type":"boolean"},"friday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Friday","default":false,"type":"boolean"},"saturday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Saturday","default":false,"type":"boolean"},"sunday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Sunday","default":false,"type":"boolean"}},"$id":"#weekdays","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Weekdays","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"workday","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"year","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":"integer"},"month":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"january","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"february","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"march","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"april","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"may","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"june","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"july","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"august","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"september","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"october","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"november","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"december","type":"string"}],"$id":"#month","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Month","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#rule","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Rule","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"}],"$id":"#recurrence","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Recurrence","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"todo","type":"string"},"checked":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Checked","type":"boolean"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"task":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#task-id","title":"Task"}},"$schema":"https://json-schema.org/draft/2019-09/schema"}],"$id":"#block","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Blocks","type":"array"}},"$id":"#document","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Notes","default":{"blocks":[]},"type":"object"},"title":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Title","type":"string"},"url":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Url","default":null,"type":["null","string"]},"canEditTitle":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"CanEditTitle","type":"boolean"},"context":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"native","type":"string"},{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"zapier","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"}],"$id":"#task-client","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"google","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"notion","type":"string"}],"$id":"#integration-kind","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"}],"$id":"#task-context","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Context","type":"string"},"todo":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Todo","type":"boolean"}},"$id":"#task","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}
*/ task: z
        .object({
          allocations: z.array(z.string()).default([]),
          client: z.union([z.null(), z.string()]).default(null),
          created: z.string().optional(),
          deleted: z.any().optional(),
          etag: z
            .object({
              time: z.any().optional(),
              version: z.number().int().optional(),
            })
            .strict()
            .optional(),
          id: z.string().optional(),
          ignored: z.union([z.null(), z.string()]).default(null),
          completed: z.union([z.null(), z.string()]).default(null),
          integration_id: z.string().optional(),
          distant_task_id: z.string().optional(),
          integration_data: z.null().default(null),
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
              z.tuple([z.number().int(), z.number().int(), z.number().int()]),
            ])
            .default(null),
          starred: z.boolean().default(false),
          occurrence: z
            .union([
              z.null(),
              z
                .object({
                  date: z.any().optional(),
                  recurrence: z.string().optional(),
                })
                .strict(),
            ])
            .default(null),
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
                          task: z.any().optional(),
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
          canEditTitle: z.boolean().optional(),
          context: z
            .union([
              z.literal("native"),
              z.union([z.literal("zapier"), z.string()]),
              z.union([z.literal("google"), z.literal("notion")]),
            ])
            .optional(),
          todo: z.boolean().optional(),
        })
        .strict(),
    },
    async ({ task }) => {
      try {
        const data = await sendRpcRequest("task.batched", [task]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching task.batched: %o", error);
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
    "taskCreate",
    "Create a task.",
    {
      /*
{"additionalProperties":false,"properties":{"ignored":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Ignored","default":null,"type":["null","string"]},"completed":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Completed","default":null,"type":["null","string"]},"integration_id":{"$id":"#integration-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Integration_id","type":"string"},"distant_task_id":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Distant_task_id","type":"string"},"integration_data":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Integration_data","default":null,"type":"null"},"parent":{"additionalProperties":false,"properties":{"kind":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"event","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"event-rec","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"page","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"people","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"task","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"task-rec","type":"string"}],"$id":"#kind","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Kind","type":"string"},"id":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Parent","default":null,"type":["null","object"]},"scheduled":{"anyOf":[{"type":"null"},{"additionalProperties":false,"properties":{"year":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Year","type":"integer"},"n":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"N","type":"integer"}},"$id":"#week","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$id":"#date","$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}],"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Scheduled","default":null,"type":["array","null","object"]},"starred":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Starred","default":false,"type":"boolean"},"occurrence":{"additionalProperties":false,"properties":{"date":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Date"},"recurrence":{"$id":"#task-rec-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Recurrence","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Occurrence","default":null,"type":["null","object"]},"notes":{"additionalProperties":false,"properties":{"blocks":{"items":{"anyOf":[{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"blockquote","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"bullet","type":"string"},"list_type":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"ordered","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"unordered","type":"string"}],"$id":"#block-list-type","$schema":"https://json-schema.org/draft/2019-09/schema","title":"List_type","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"depth":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Depth","default":0,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"check","type":"string"},"checked":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Checked","type":"boolean"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"code","type":"string"},"language":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Language","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"callout","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"divider","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"embed","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"heading","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"level":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Level","type":"integer"},"retracted":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Retracted","default":false,"type":"boolean"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"paragraph","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"query","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"recurrent_task","type":"string"},"recurrent_task_id":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#task-rec-id","title":"Recurrent_task_id"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"recurrence":{"anyOf":[{"additionalProperties":false,"properties":{"start":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Start"},"count":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Count","type":"integer"},"rule":{"anyOf":[{"additionalProperties":false,"properties":{"every":{"const":"day","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"month","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"items":[{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"monday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"tuesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"wednesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"thursday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"friday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"saturday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"sunday","type":"string"}],"$id":"#weekday","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}],"$id":"#month_day","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":["array","integer"]}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"week","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"weekdays":{"additionalProperties":false,"properties":{"monday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Monday","default":false,"type":"boolean"},"tuesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Tuesday","default":false,"type":"boolean"},"wednesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Wednesday","default":false,"type":"boolean"},"thursday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Thursday","default":false,"type":"boolean"},"friday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Friday","default":false,"type":"boolean"},"saturday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Saturday","default":false,"type":"boolean"},"sunday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Sunday","default":false,"type":"boolean"}},"$id":"#weekdays","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Weekdays","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"workday","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"year","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":"integer"},"month":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"january","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"february","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"march","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"april","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"may","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"june","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"july","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"august","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"september","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"october","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"november","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"december","type":"string"}],"$id":"#month","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Month","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#rule","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Rule","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"end":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"End"},"start":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Start"},"rule":{"anyOf":[{"additionalProperties":false,"properties":{"every":{"const":"day","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"month","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"items":[{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"monday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"tuesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"wednesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"thursday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"friday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"saturday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"sunday","type":"string"}],"$id":"#weekday","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}],"$id":"#month_day","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":["array","integer"]}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"week","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"weekdays":{"additionalProperties":false,"properties":{"monday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Monday","default":false,"type":"boolean"},"tuesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Tuesday","default":false,"type":"boolean"},"wednesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Wednesday","default":false,"type":"boolean"},"thursday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Thursday","default":false,"type":"boolean"},"friday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Friday","default":false,"type":"boolean"},"saturday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Saturday","default":false,"type":"boolean"},"sunday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Sunday","default":false,"type":"boolean"}},"$id":"#weekdays","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Weekdays","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"workday","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"year","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":"integer"},"month":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"january","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"february","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"march","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"april","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"may","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"june","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"july","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"august","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"september","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"october","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"november","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"december","type":"string"}],"$id":"#month","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Month","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#rule","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Rule","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"}],"$id":"#recurrence","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Recurrence","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"todo","type":"string"},"checked":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Checked","type":"boolean"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"task":{"$id":"#task-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Task","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"}],"$id":"#block","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Blocks","type":"array"}},"$id":"#document","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Notes","default":{"blocks":[]},"type":"object"},"title":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Title","type":"string"},"url":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Url","default":null,"type":["null","string"]}},"$id":"#task-read","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}
*/ task: z
        .object({
          ignored: z.union([z.null(), z.string()]).default(null),
          completed: z.union([z.null(), z.string()]).default(null),
          integration_id: z.string().optional(),
          distant_task_id: z.string().optional(),
          integration_data: z.null().default(null),
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
              z.tuple([z.number().int(), z.number().int(), z.number().int()]),
            ])
            .default(null),
          starred: z.boolean().default(false),
          occurrence: z
            .union([
              z.null(),
              z
                .object({
                  date: z.any().optional(),
                  recurrence: z.string().optional(),
                })
                .strict(),
            ])
            .default(null),
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

      /*
{"additionalProperties":false,"properties":{"document":{"additionalProperties":false,"properties":{"id":{"additionalProperties":false,"properties":{"kind":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"event","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"event-rec","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"page","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"people","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"task","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"task-rec","type":"string"}],"$id":"#kind","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Kind","type":"string"},"id":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"}},"$id":"#id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"object"},"section":{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Section","type":"array"}},"$id":"#mandate-document","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Document","type":"object"},"notify":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Notify","default":false,"type":"boolean"},"source":{"anyOf":[{"additionalProperties":false,"properties":{"type":{"const":"console","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"type":{"const":"page_block","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"type":{"const":"app_ui_element","type":"string"},"element_name":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Element_name","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"type":{"const":"integration","type":"string"},"integration_name":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Integration_name","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"type":{"const":"graph","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"type":{"const":"other","type":"string"},"source_name":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Source_name","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#metrics-object-source","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Source","default":{"type":"app_ui_element","element_name":"unknown"},"type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":["null","object"]}
*/ options: z.union([
        z.null(),
        z
          .object({
            document: z
              .object({
                id: z
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
                  .strict()
                  .optional(),
                section: z.tuple([z.string(), z.number().int()]).optional(),
              })
              .strict()
              .optional(),
            notify: z.boolean(),
            source: z
              .record(z.any())
              .and(
                z.union([
                  z.object({ type: z.literal("console").optional() }).strict(),
                  z
                    .object({ type: z.literal("page_block").optional() })
                    .strict(),
                  z
                    .object({
                      type: z.literal("app_ui_element").optional(),
                      element_name: z.string().optional(),
                    })
                    .strict(),
                  z
                    .object({
                      type: z.literal("integration").optional(),
                      integration_name: z.string().optional(),
                    })
                    .strict(),
                  z.object({ type: z.literal("graph").optional() }).strict(),
                  z
                    .object({
                      type: z.literal("other").optional(),
                      source_name: z.string().optional(),
                    })
                    .strict(),
                ])
              ),
          })
          .strict(),
      ]),
    },
    async ({ task, options }) => {
      try {
        const data = await sendRpcRequest("task.create", [task, options]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching task.create: %o", error);
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
    "taskCreateAllocate",
    "Create an allocated task.",
    {
      /*
{"additionalProperties":false,"properties":{"ignored":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Ignored","default":null,"type":["null","string"]},"completed":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Completed","default":null,"type":["null","string"]},"integration_id":{"$id":"#integration-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Integration_id","type":"string"},"distant_task_id":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Distant_task_id","type":"string"},"integration_data":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Integration_data","default":null,"type":"null"},"parent":{"additionalProperties":false,"properties":{"kind":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"event","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"event-rec","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"page","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"people","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"task","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"task-rec","type":"string"}],"$id":"#kind","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Kind","type":"string"},"id":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Parent","default":null,"type":["null","object"]},"scheduled":{"anyOf":[{"type":"null"},{"additionalProperties":false,"properties":{"year":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Year","type":"integer"},"n":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"N","type":"integer"}},"$id":"#week","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$id":"#date","$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}],"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Scheduled","default":null,"type":["array","null","object"]},"starred":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Starred","default":false,"type":"boolean"},"occurrence":{"additionalProperties":false,"properties":{"date":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Date"},"recurrence":{"$id":"#task-rec-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Recurrence","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Occurrence","default":null,"type":["null","object"]},"notes":{"additionalProperties":false,"properties":{"blocks":{"items":{"anyOf":[{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"blockquote","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"bullet","type":"string"},"list_type":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"ordered","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"unordered","type":"string"}],"$id":"#block-list-type","$schema":"https://json-schema.org/draft/2019-09/schema","title":"List_type","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"depth":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Depth","default":0,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"check","type":"string"},"checked":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Checked","type":"boolean"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"code","type":"string"},"language":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Language","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"callout","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"divider","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"embed","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"heading","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"level":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Level","type":"integer"},"retracted":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Retracted","default":false,"type":"boolean"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"paragraph","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"query","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"recurrent_task","type":"string"},"recurrent_task_id":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#task-rec-id","title":"Recurrent_task_id"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"recurrence":{"anyOf":[{"additionalProperties":false,"properties":{"start":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Start"},"count":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Count","type":"integer"},"rule":{"anyOf":[{"additionalProperties":false,"properties":{"every":{"const":"day","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"month","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"items":[{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"monday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"tuesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"wednesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"thursday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"friday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"saturday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"sunday","type":"string"}],"$id":"#weekday","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}],"$id":"#month_day","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":["array","integer"]}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"week","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"weekdays":{"additionalProperties":false,"properties":{"monday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Monday","default":false,"type":"boolean"},"tuesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Tuesday","default":false,"type":"boolean"},"wednesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Wednesday","default":false,"type":"boolean"},"thursday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Thursday","default":false,"type":"boolean"},"friday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Friday","default":false,"type":"boolean"},"saturday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Saturday","default":false,"type":"boolean"},"sunday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Sunday","default":false,"type":"boolean"}},"$id":"#weekdays","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Weekdays","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"workday","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"year","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":"integer"},"month":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"january","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"february","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"march","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"april","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"may","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"june","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"july","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"august","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"september","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"october","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"november","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"december","type":"string"}],"$id":"#month","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Month","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#rule","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Rule","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"end":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"End"},"start":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Start"},"rule":{"anyOf":[{"additionalProperties":false,"properties":{"every":{"const":"day","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"month","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"items":[{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"monday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"tuesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"wednesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"thursday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"friday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"saturday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"sunday","type":"string"}],"$id":"#weekday","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}],"$id":"#month_day","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":["array","integer"]}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"week","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"weekdays":{"additionalProperties":false,"properties":{"monday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Monday","default":false,"type":"boolean"},"tuesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Tuesday","default":false,"type":"boolean"},"wednesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Wednesday","default":false,"type":"boolean"},"thursday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Thursday","default":false,"type":"boolean"},"friday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Friday","default":false,"type":"boolean"},"saturday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Saturday","default":false,"type":"boolean"},"sunday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Sunday","default":false,"type":"boolean"}},"$id":"#weekdays","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Weekdays","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"workday","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"year","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":"integer"},"month":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"january","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"february","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"march","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"april","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"may","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"june","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"july","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"august","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"september","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"october","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"november","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"december","type":"string"}],"$id":"#month","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Month","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#rule","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Rule","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"}],"$id":"#recurrence","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Recurrence","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"todo","type":"string"},"checked":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Checked","type":"boolean"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"task":{"$id":"#task-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Task","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"}],"$id":"#block","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Blocks","type":"array"}},"$id":"#document","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Notes","default":{"blocks":[]},"type":"object"},"title":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Title","type":"string"},"url":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Url","default":null,"type":["null","string"]}},"$id":"#task-read","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}
*/ task: z
        .object({
          ignored: z.union([z.null(), z.string()]).default(null),
          completed: z.union([z.null(), z.string()]).default(null),
          integration_id: z.string().optional(),
          distant_task_id: z.string().optional(),
          integration_data: z.null().default(null),
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
              z.tuple([z.number().int(), z.number().int(), z.number().int()]),
            ])
            .default(null),
          starred: z.boolean().default(false),
          occurrence: z
            .union([
              z.null(),
              z
                .object({
                  date: z.any().optional(),
                  recurrence: z.string().optional(),
                })
                .strict(),
            ])
            .default(null),
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

      /*
{"additionalProperties":false,"properties":{"calendar":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Calendar","type":"string"},"dates":{"anyOf":[{"additionalProperties":false,"properties":{"type":{"const":"date","type":"string"},"date":{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$id":"#date","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Date","type":"array"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"type":{"const":"date_range","type":"string"},"end":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"End"},"start":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Start"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"type":{"const":"month","type":"string"},"hint":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Hint","type":"integer"},"month":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"january","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"february","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"march","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"april","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"may","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"june","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"july","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"august","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"september","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"october","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"november","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"december","type":"string"}],"$id":"#month","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Month","type":"string"},"year":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Year","type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"type":{"const":"week","type":"string"},"week":{"additionalProperties":false,"properties":{"year":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Year","type":"integer"},"n":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"N","type":"integer"}},"$id":"#week","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Week","type":"object"},"hint":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"monday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"tuesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"wednesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"thursday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"friday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"saturday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"sunday","type":"string"}],"$id":"#weekday","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Hint","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"type":{"const":"year","type":"string"},"year":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Year","type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#mandate-dates","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Dates","type":"object"},"daytime":{"items":[{"additionalProperties":false,"properties":{"hours":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Hours","maximum":24,"minimum":0,"type":"integer"},"minutes":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Minutes","default":0,"maximum":60,"minimum":0,"type":"integer"},"seconds":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Seconds","default":0,"maximum":60,"minimum":0,"type":"integer"}},"$id":"#daytime","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"hours":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Hours","maximum":24,"minimum":0,"type":"integer"},"minutes":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Minutes","default":0,"maximum":60,"minimum":0,"type":"integer"},"seconds":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Seconds","default":0,"maximum":60,"minimum":0,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":["null","object"]}],"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Daytime","type":"array"},"document":{"additionalProperties":false,"properties":{"id":{"additionalProperties":false,"properties":{"kind":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"event","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"event-rec","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"page","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"people","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"task","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"task-rec","type":"string"}],"$id":"#kind","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Kind","type":"string"},"id":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"}},"$id":"#id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"object"},"section":{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Section","type":"array"}},"$id":"#mandate-document","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Document","type":"object"},"duration":{"$id":"#span","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Duration","type":"integer"},"participants":{"items":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"additionalProperties":false,"properties":{"email":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Email","type":"string"},"emailPrimary":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"EmailPrimary","type":"string"},"helper":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Helper","type":"string"},"id":{"$id":"#people-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"}},"$id":"#mandate-participant","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#mandate-participant-mandate-participant-lenient","$schema":"https://json-schema.org/draft/2019-09/schema","type":["object","string"]},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Participants","default":[],"type":"array"},"recurrence":{"anyOf":[{"additionalProperties":false,"properties":{"start":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Start"},"count":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Count","type":"integer"},"rule":{"anyOf":[{"additionalProperties":false,"properties":{"every":{"const":"day","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"month","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#weekday"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}],"$id":"#month_day","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":["array","integer"]}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"week","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"weekdays":{"additionalProperties":false,"properties":{"monday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Monday","default":false,"type":"boolean"},"tuesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Tuesday","default":false,"type":"boolean"},"wednesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Wednesday","default":false,"type":"boolean"},"thursday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Thursday","default":false,"type":"boolean"},"friday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Friday","default":false,"type":"boolean"},"saturday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Saturday","default":false,"type":"boolean"},"sunday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Sunday","default":false,"type":"boolean"}},"$id":"#weekdays","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Weekdays","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"workday","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"year","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":"integer"},"month":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#month","title":"Month"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#rule","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Rule","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"end":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"End"},"start":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Start"},"rule":{"anyOf":[{"additionalProperties":false,"properties":{"every":{"const":"day","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"month","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#weekday"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}],"$id":"#month_day","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":["array","integer"]}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"week","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"weekdays":{"additionalProperties":false,"properties":{"monday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Monday","default":false,"type":"boolean"},"tuesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Tuesday","default":false,"type":"boolean"},"wednesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Wednesday","default":false,"type":"boolean"},"thursday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Thursday","default":false,"type":"boolean"},"friday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Friday","default":false,"type":"boolean"},"saturday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Saturday","default":false,"type":"boolean"},"sunday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Sunday","default":false,"type":"boolean"}},"$id":"#weekdays","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Weekdays","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"workday","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"year","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":"integer"},"month":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#month","title":"Month"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#rule","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Rule","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"}],"$id":"#recurrence","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Recurrence","type":"object"},"slot":{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"additionalProperties":false,"properties":{"name":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Name","type":"string"},"kind":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"focus","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"meetings","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"processing","type":"string"}],"$id":"#slot-kind","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Kind","type":"string"}},"$id":"#slot-type","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Slot","type":"array"}},"$id":"#action_allocation","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}
*/ allocation: z
        .object({
          calendar: z.string().optional(),
          dates: z
            .record(z.any())
            .and(
              z.union([
                z
                  .object({
                    type: z.literal("date").optional(),
                    date: z
                      .tuple([
                        z.number().int(),
                        z.number().int(),
                        z.number().int(),
                      ])
                      .optional(),
                  })
                  .strict(),
                z
                  .object({
                    type: z.literal("date_range").optional(),
                    end: z.any().optional(),
                    start: z.any().optional(),
                  })
                  .strict(),
                z
                  .object({
                    type: z.literal("month").optional(),
                    hint: z.number().int().optional(),
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
                    year: z.number().int().optional(),
                  })
                  .strict(),
                z
                  .object({
                    type: z.literal("week").optional(),
                    week: z
                      .object({
                        year: z.number().int().optional(),
                        n: z.number().int().optional(),
                      })
                      .strict()
                      .optional(),
                    hint: z
                      .union([
                        z.literal("monday"),
                        z.literal("tuesday"),
                        z.literal("wednesday"),
                        z.literal("thursday"),
                        z.literal("friday"),
                        z.literal("saturday"),
                        z.literal("sunday"),
                      ])
                      .optional(),
                  })
                  .strict(),
                z
                  .object({
                    type: z.literal("year").optional(),
                    year: z.number().int().optional(),
                  })
                  .strict(),
              ])
            )
            .optional(),
          daytime: z
            .tuple([
              z
                .object({
                  hours: z.number().int().gte(0).lte(24).optional(),
                  minutes: z.number().int().gte(0).lte(60).default(0),
                  seconds: z.number().int().gte(0).lte(60).default(0),
                })
                .strict(),
              z.union([
                z.null(),
                z
                  .object({
                    hours: z.number().int().gte(0).lte(24).optional(),
                    minutes: z.number().int().gte(0).lte(60),
                    seconds: z.number().int().gte(0).lte(60),
                  })
                  .strict(),
              ]),
            ])
            .optional(),
          document: z
            .object({
              id: z
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
                .strict()
                .optional(),
              section: z.tuple([z.string(), z.number().int()]).optional(),
            })
            .strict()
            .optional(),
          duration: z.number().int().optional(),
          participants: z
            .array(
              z.union([
                z.string(),
                z
                  .object({
                    email: z.string().optional(),
                    emailPrimary: z.string().optional(),
                    helper: z.string().optional(),
                    id: z.string().optional(),
                  })
                  .strict(),
              ])
            )
            .default([]),
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
                              every: z.literal("day").optional(),
                              period: z.number().int().default(1),
                            })
                            .strict(),
                          z
                            .object({
                              every: z.literal("month").optional(),
                              period: z.number().int().default(1),
                              day: z
                                .union([
                                  z.number().int(),
                                  z.tuple([z.any(), z.number().int()]),
                                ])
                                .optional(),
                            })
                            .strict(),
                          z
                            .object({
                              every: z.literal("week").optional(),
                              period: z.number().int().default(1),
                              weekdays: z
                                .object({
                                  monday: z.boolean().default(false),
                                  tuesday: z.boolean().default(false),
                                  wednesday: z.boolean().default(false),
                                  thursday: z.boolean().default(false),
                                  friday: z.boolean().default(false),
                                  saturday: z.boolean().default(false),
                                  sunday: z.boolean().default(false),
                                })
                                .strict()
                                .optional(),
                            })
                            .strict(),
                          z
                            .object({
                              every: z.literal("workday").optional(),
                              period: z.number().int().default(1),
                            })
                            .strict(),
                          z
                            .object({
                              every: z.literal("year").optional(),
                              period: z.number().int().default(1),
                              day: z.number().int().optional(),
                              month: z.any().optional(),
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
                              every: z.literal("day").optional(),
                              period: z.number().int().default(1),
                            })
                            .strict(),
                          z
                            .object({
                              every: z.literal("month").optional(),
                              period: z.number().int().default(1),
                              day: z
                                .union([
                                  z.number().int(),
                                  z.tuple([z.any(), z.number().int()]),
                                ])
                                .optional(),
                            })
                            .strict(),
                          z
                            .object({
                              every: z.literal("week").optional(),
                              period: z.number().int().default(1),
                              weekdays: z
                                .object({
                                  monday: z.boolean().default(false),
                                  tuesday: z.boolean().default(false),
                                  wednesday: z.boolean().default(false),
                                  thursday: z.boolean().default(false),
                                  friday: z.boolean().default(false),
                                  saturday: z.boolean().default(false),
                                  sunday: z.boolean().default(false),
                                })
                                .strict()
                                .optional(),
                            })
                            .strict(),
                          z
                            .object({
                              every: z.literal("workday").optional(),
                              period: z.number().int().default(1),
                            })
                            .strict(),
                          z
                            .object({
                              every: z.literal("year").optional(),
                              period: z.number().int().default(1),
                              day: z.number().int().optional(),
                              month: z.any().optional(),
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
          slot: z
            .tuple([
              z.string(),
              z
                .object({
                  name: z.string().optional(),
                  kind: z
                    .union([
                      z.literal("focus"),
                      z.literal("meetings"),
                      z.literal("processing"),
                    ])
                    .optional(),
                })
                .strict(),
            ])
            .optional(),
        })
        .strict(),

      /*
{"additionalProperties":false,"properties":{"document":{"additionalProperties":false,"properties":{"id":{"additionalProperties":false,"properties":{"kind":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"event","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"event-rec","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"page","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"people","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"task","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"task-rec","type":"string"}],"$id":"#kind","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Kind","type":"string"},"id":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"}},"$id":"#id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"object"},"section":{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Section","type":"array"}},"$id":"#mandate-document","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Document","type":"object"},"notify":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Notify","default":false,"type":"boolean"},"source":{"anyOf":[{"additionalProperties":false,"properties":{"type":{"const":"console","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"type":{"const":"page_block","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"type":{"const":"app_ui_element","type":"string"},"element_name":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Element_name","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"type":{"const":"integration","type":"string"},"integration_name":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Integration_name","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"type":{"const":"graph","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"type":{"const":"other","type":"string"},"source_name":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Source_name","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#metrics-object-source","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Source","default":{"type":"app_ui_element","element_name":"unknown"},"type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":["null","object"]}
*/ options: z.union([
        z.null(),
        z
          .object({
            document: z
              .object({
                id: z
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
                  .strict()
                  .optional(),
                section: z.tuple([z.string(), z.number().int()]).optional(),
              })
              .strict()
              .optional(),
            notify: z.boolean(),
            source: z
              .record(z.any())
              .and(
                z.union([
                  z.object({ type: z.literal("console").optional() }).strict(),
                  z
                    .object({ type: z.literal("page_block").optional() })
                    .strict(),
                  z
                    .object({
                      type: z.literal("app_ui_element").optional(),
                      element_name: z.string().optional(),
                    })
                    .strict(),
                  z
                    .object({
                      type: z.literal("integration").optional(),
                      integration_name: z.string().optional(),
                    })
                    .strict(),
                  z.object({ type: z.literal("graph").optional() }).strict(),
                  z
                    .object({
                      type: z.literal("other").optional(),
                      source_name: z.string().optional(),
                    })
                    .strict(),
                ])
              ),
          })
          .strict(),
      ]),
    },
    async ({ task, allocation, options }) => {
      try {
        const data = await sendRpcRequest("task.create_allocate", [
          task,
          allocation,
          options,
        ]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching task.create_allocate: %o", error);
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
    "taskDelete",
    "Delete a task.",
    {
      /*
{"$id":"#task-id","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"}
*/ id: z.string(),
    },
    async ({ id }) => {
      try {
        const data = await sendRpcRequest("task.delete", [id]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching task.delete: %o", error);
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
    "taskMove",
    "Move a task.",
    {
      /*
{"$id":"#task-id","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"}
*/ id: z.string(),

      /*
{"additionalProperties":false,"properties":{"id":{"additionalProperties":false,"properties":{"kind":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"event","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"event-rec","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"page","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"people","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"task","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"task-rec","type":"string"}],"$id":"#kind","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Kind","type":"string"},"id":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"}},"$id":"#id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"object"},"section":{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Section","type":"array"}},"$id":"#mandate-document","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}
*/ destination: z
        .object({
          id: z
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
            .strict()
            .optional(),
          section: z.tuple([z.string(), z.number().int()]).optional(),
        })
        .strict(),
    },
    async ({ id, destination }) => {
      try {
        const data = await sendRpcRequest("task.move", [id, destination]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching task.move: %o", error);
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
    "taskOrphan",
    "Remove task parent.",
    {
      /*
{"$id":"#task-id","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"}
*/ id: z.string(),
    },
    async ({ id }) => {
      try {
        const data = await sendRpcRequest("task.orphan", [id]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching task.orphan: %o", error);
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
{"additionalProperties":false,"properties":{"ignored":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Ignored","default":null,"type":["null","string"]},"completed":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Completed","default":null,"type":["null","string"]},"integration_id":{"$id":"#integration-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Integration_id","type":"string"},"distant_task_id":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Distant_task_id","type":"string"},"integration_data":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Integration_data","default":null,"type":"null"},"parent":{"additionalProperties":false,"properties":{"kind":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"event","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"event-rec","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"page","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"people","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"task","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"task-rec","type":"string"}],"$id":"#kind","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Kind","type":"string"},"id":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Parent","default":null,"type":["null","object"]},"scheduled":{"anyOf":[{"type":"null"},{"type":"null"},{"additionalProperties":false,"properties":{"year":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Year","type":"integer"},"n":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"N","type":"integer"}},"$id":"#week","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$id":"#date","$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}],"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Scheduled","default":null,"type":["array","null","object"]},"starred":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Starred","default":null,"type":["boolean","null"]},"occurrence":{"additionalProperties":false,"properties":{"date":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Date"},"recurrence":{"$id":"#task-rec-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Recurrence","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Occurrence","default":null,"type":["null","object"]},"notes":{"additionalProperties":false,"properties":{"blocks":{"items":{"anyOf":[{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"blockquote","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"bullet","type":"string"},"list_type":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"ordered","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"unordered","type":"string"}],"$id":"#block-list-type","$schema":"https://json-schema.org/draft/2019-09/schema","title":"List_type","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"depth":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Depth","default":0,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"check","type":"string"},"checked":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Checked","type":"boolean"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"code","type":"string"},"language":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Language","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"callout","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"divider","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"embed","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"heading","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"level":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Level","type":"integer"},"retracted":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Retracted","default":false,"type":"boolean"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"paragraph","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"query","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"recurrent_task","type":"string"},"recurrent_task_id":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#task-rec-id","title":"Recurrent_task_id"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"recurrence":{"anyOf":[{"additionalProperties":false,"properties":{"start":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Start"},"count":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Count","type":"integer"},"rule":{"anyOf":[{"additionalProperties":false,"properties":{"every":{"const":"day","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"month","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"items":[{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"monday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"tuesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"wednesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"thursday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"friday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"saturday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"sunday","type":"string"}],"$id":"#weekday","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}],"$id":"#month_day","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":["array","integer"]}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"week","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"weekdays":{"additionalProperties":false,"properties":{"monday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Monday","default":false,"type":"boolean"},"tuesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Tuesday","default":false,"type":"boolean"},"wednesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Wednesday","default":false,"type":"boolean"},"thursday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Thursday","default":false,"type":"boolean"},"friday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Friday","default":false,"type":"boolean"},"saturday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Saturday","default":false,"type":"boolean"},"sunday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Sunday","default":false,"type":"boolean"}},"$id":"#weekdays","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Weekdays","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"workday","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"year","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":"integer"},"month":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"january","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"february","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"march","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"april","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"may","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"june","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"july","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"august","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"september","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"october","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"november","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"december","type":"string"}],"$id":"#month","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Month","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#rule","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Rule","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"end":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"End"},"start":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Start"},"rule":{"anyOf":[{"additionalProperties":false,"properties":{"every":{"const":"day","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"month","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"items":[{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"monday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"tuesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"wednesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"thursday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"friday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"saturday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"sunday","type":"string"}],"$id":"#weekday","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}],"$id":"#month_day","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":["array","integer"]}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"week","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"weekdays":{"additionalProperties":false,"properties":{"monday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Monday","default":false,"type":"boolean"},"tuesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Tuesday","default":false,"type":"boolean"},"wednesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Wednesday","default":false,"type":"boolean"},"thursday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Thursday","default":false,"type":"boolean"},"friday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Friday","default":false,"type":"boolean"},"saturday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Saturday","default":false,"type":"boolean"},"sunday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Sunday","default":false,"type":"boolean"}},"$id":"#weekdays","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Weekdays","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"workday","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"year","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":"integer"},"month":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"january","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"february","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"march","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"april","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"may","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"june","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"july","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"august","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"september","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"october","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"november","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"december","type":"string"}],"$id":"#month","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Month","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#rule","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Rule","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"}],"$id":"#recurrence","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Recurrence","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"todo","type":"string"},"checked":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Checked","type":"boolean"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"task":{"$id":"#task-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Task","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"}],"$id":"#block","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Blocks","type":"array"}},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Notes","default":null,"type":["null","object"]},"title":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Title","default":null,"type":["null","string"]},"url":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Url","default":null,"type":["null","string"]}},"$id":"#task-patch","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}
*/ patch: z
        .object({
          ignored: z.union([z.null(), z.string()]).default(null),
          completed: z.union([z.null(), z.string()]).default(null),
          integration_id: z.string().optional(),
          distant_task_id: z.string().optional(),
          integration_data: z.null().default(null),
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
              z.tuple([z.number().int(), z.number().int(), z.number().int()]),
            ])
            .default(null),
          starred: z.union([z.boolean(), z.null()]).default(null),
          occurrence: z
            .union([
              z.null(),
              z
                .object({
                  date: z.any().optional(),
                  recurrence: z.string().optional(),
                })
                .strict(),
            ])
            .default(null),
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

  server.tool(
    "taskRecurrentAll",
    "All recurrent task sorted by decreasing order of frequency.",
    {},
    async ({}) => {
      try {
        const data = await sendRpcRequest("task_recurrent.all", []);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching task_recurrent.all: %o", error);
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
    "taskRecurrentCreate",
    "Create a recurrent task.",
    {
      /*
{"additionalProperties":false,"properties":{"parent":{"additionalProperties":false,"properties":{"kind":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"event","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"event-rec","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"page","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"people","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"task","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"task-rec","type":"string"}],"$id":"#kind","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Kind","type":"string"},"id":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Parent","default":null,"type":["null","object"]},"recurrence":{"anyOf":[{"additionalProperties":false,"properties":{"start":{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$id":"#date","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Start","type":"array"},"count":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Count","type":"integer"},"rule":{"anyOf":[{"additionalProperties":false,"properties":{"every":{"const":"day","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"month","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"items":[{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"monday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"tuesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"wednesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"thursday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"friday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"saturday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"sunday","type":"string"}],"$id":"#weekday","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}],"$id":"#month_day","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":["array","integer"]}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"week","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"weekdays":{"additionalProperties":false,"properties":{"monday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Monday","default":false,"type":"boolean"},"tuesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Tuesday","default":false,"type":"boolean"},"wednesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Wednesday","default":false,"type":"boolean"},"thursday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Thursday","default":false,"type":"boolean"},"friday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Friday","default":false,"type":"boolean"},"saturday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Saturday","default":false,"type":"boolean"},"sunday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Sunday","default":false,"type":"boolean"}},"$id":"#weekdays","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Weekdays","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"workday","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"year","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":"integer"},"month":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"january","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"february","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"march","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"april","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"may","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"june","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"july","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"august","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"september","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"october","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"november","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"december","type":"string"}],"$id":"#month","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Month","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#rule","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Rule","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"end":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"End"},"start":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Start"},"rule":{"anyOf":[{"additionalProperties":false,"properties":{"every":{"const":"day","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"month","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"items":[{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"monday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"tuesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"wednesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"thursday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"friday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"saturday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"sunday","type":"string"}],"$id":"#weekday","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}],"$id":"#month_day","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":["array","integer"]}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"week","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"weekdays":{"additionalProperties":false,"properties":{"monday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Monday","default":false,"type":"boolean"},"tuesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Tuesday","default":false,"type":"boolean"},"wednesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Wednesday","default":false,"type":"boolean"},"thursday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Thursday","default":false,"type":"boolean"},"friday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Friday","default":false,"type":"boolean"},"saturday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Saturday","default":false,"type":"boolean"},"sunday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Sunday","default":false,"type":"boolean"}},"$id":"#weekdays","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Weekdays","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"workday","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"year","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":"integer"},"month":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"january","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"february","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"march","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"april","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"may","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"june","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"july","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"august","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"september","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"october","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"november","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"december","type":"string"}],"$id":"#month","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Month","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#rule","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Rule","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"}],"$id":"#recurrence","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Recurrence","type":"object"},"notes":{"additionalProperties":false,"properties":{"blocks":{"items":{"anyOf":[{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"blockquote","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"bullet","type":"string"},"list_type":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"ordered","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"unordered","type":"string"}],"$id":"#block-list-type","$schema":"https://json-schema.org/draft/2019-09/schema","title":"List_type","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"depth":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Depth","default":0,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"check","type":"string"},"checked":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Checked","type":"boolean"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"code","type":"string"},"language":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Language","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"callout","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"divider","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"embed","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"heading","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"level":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Level","type":"integer"},"retracted":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Retracted","default":false,"type":"boolean"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"paragraph","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"query","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"recurrent_task","type":"string"},"recurrent_task_id":{"$id":"#task-rec-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Recurrent_task_id","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"recurrence":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#recurrence","title":"Recurrence"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"todo","type":"string"},"checked":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Checked","type":"boolean"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"task":{"$id":"#task-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Task","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"}],"$id":"#block","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Blocks","type":"array"}},"$id":"#document","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Notes","default":{"blocks":[]},"type":"object"},"title":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Title","type":"string"},"url":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Url","default":null,"type":["null","string"]}},"$id":"#task-recurrent-read","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}
*/ task: z
        .object({
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
          recurrence: z
            .record(z.any())
            .and(
              z.union([
                z
                  .object({
                    start: z
                      .tuple([
                        z.number().int(),
                        z.number().int(),
                        z.number().int(),
                      ])
                      .optional(),
                    count: z.number().int().optional(),
                    rule: z
                      .record(z.any())
                      .and(
                        z.union([
                          z
                            .object({
                              every: z.literal("day").optional(),
                              period: z.number().int().default(1),
                            })
                            .strict(),
                          z
                            .object({
                              every: z.literal("month").optional(),
                              period: z.number().int().default(1),
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
                              every: z.literal("week").optional(),
                              period: z.number().int().default(1),
                              weekdays: z
                                .object({
                                  monday: z.boolean().default(false),
                                  tuesday: z.boolean().default(false),
                                  wednesday: z.boolean().default(false),
                                  thursday: z.boolean().default(false),
                                  friday: z.boolean().default(false),
                                  saturday: z.boolean().default(false),
                                  sunday: z.boolean().default(false),
                                })
                                .strict()
                                .optional(),
                            })
                            .strict(),
                          z
                            .object({
                              every: z.literal("workday").optional(),
                              period: z.number().int().default(1),
                            })
                            .strict(),
                          z
                            .object({
                              every: z.literal("year").optional(),
                              period: z.number().int().default(1),
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
                              every: z.literal("day").optional(),
                              period: z.number().int().default(1),
                            })
                            .strict(),
                          z
                            .object({
                              every: z.literal("month").optional(),
                              period: z.number().int().default(1),
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
                              every: z.literal("week").optional(),
                              period: z.number().int().default(1),
                              weekdays: z
                                .object({
                                  monday: z.boolean().default(false),
                                  tuesday: z.boolean().default(false),
                                  wednesday: z.boolean().default(false),
                                  thursday: z.boolean().default(false),
                                  friday: z.boolean().default(false),
                                  saturday: z.boolean().default(false),
                                  sunday: z.boolean().default(false),
                                })
                                .strict()
                                .optional(),
                            })
                            .strict(),
                          z
                            .object({
                              every: z.literal("workday").optional(),
                              period: z.number().int().default(1),
                            })
                            .strict(),
                          z
                            .object({
                              every: z.literal("year").optional(),
                              period: z.number().int().default(1),
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
          notes: z
            .object({
              blocks: z
                .array(
                  z
                    .record(z.any())
                    .and(
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
                            recurrent_task_id: z.string().optional(),
                            content: z.string().optional(),
                            recurrence: z.any().optional(),
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

      /*
{"additionalProperties":false,"properties":{"document":{"additionalProperties":false,"properties":{"id":{"additionalProperties":false,"properties":{"kind":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"event","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"event-rec","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"page","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"people","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"task","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"task-rec","type":"string"}],"$id":"#kind","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Kind","type":"string"},"id":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"}},"$id":"#id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"object"},"section":{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Section","type":"array"}},"$id":"#mandate-document","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Document","type":"object"},"notify":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Notify","default":false,"type":"boolean"},"source":{"anyOf":[{"additionalProperties":false,"properties":{"type":{"const":"console","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"type":{"const":"page_block","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"type":{"const":"app_ui_element","type":"string"},"element_name":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Element_name","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"type":{"const":"integration","type":"string"},"integration_name":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Integration_name","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"type":{"const":"graph","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"type":{"const":"other","type":"string"},"source_name":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Source_name","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#metrics-object-source","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Source","default":{"type":"app_ui_element","element_name":"unknown"},"type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":["null","object"]}
*/ options: z.union([
        z.null(),
        z
          .object({
            document: z
              .object({
                id: z
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
                  .strict()
                  .optional(),
                section: z.tuple([z.string(), z.number().int()]).optional(),
              })
              .strict()
              .optional(),
            notify: z.boolean(),
            source: z
              .record(z.any())
              .and(
                z.union([
                  z.object({ type: z.literal("console").optional() }).strict(),
                  z
                    .object({ type: z.literal("page_block").optional() })
                    .strict(),
                  z
                    .object({
                      type: z.literal("app_ui_element").optional(),
                      element_name: z.string().optional(),
                    })
                    .strict(),
                  z
                    .object({
                      type: z.literal("integration").optional(),
                      integration_name: z.string().optional(),
                    })
                    .strict(),
                  z.object({ type: z.literal("graph").optional() }).strict(),
                  z
                    .object({
                      type: z.literal("other").optional(),
                      source_name: z.string().optional(),
                    })
                    .strict(),
                ])
              ),
          })
          .strict(),
      ]),
    },
    async ({ task, options }) => {
      try {
        const data = await sendRpcRequest("task_recurrent.create", [
          task,
          options,
        ]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching task_recurrent.create: %o", error);
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
    "taskRecurrentDelete",
    "Delete a recurrent task.",
    {
      /*
{"$id":"#task-rec-id","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"}
*/ id: z.string(),
    },
    async ({ id }) => {
      try {
        const data = await sendRpcRequest("task_recurrent.delete", [id]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching task_recurrent.delete: %o", error);
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
    "taskRecurrentGet",
    "A recurrent task.",
    {
      /*
{"$id":"#task-rec-id","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"}
*/ id: z.string(),
    },
    async ({ id }) => {
      try {
        const data = await sendRpcRequest("task_recurrent.get", [id]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching task_recurrent.get: %o", error);
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
    "taskRecurrentUpdate",
    "Patch a recurrent task.",
    {
      /*
{"$id":"#task-rec-id","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"}
*/ id: z.string(),

      /*
{"additionalProperties":false,"properties":{"parent":{"additionalProperties":false,"properties":{"kind":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"event","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"event-rec","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"page","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"people","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"task","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"task-rec","type":"string"}],"$id":"#kind","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Kind","type":"string"},"id":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Parent","default":null,"type":["null","object"]},"recurrence":{"anyOf":[{"type":"null"},{"additionalProperties":false,"properties":{"start":{"items":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$id":"#date","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Start","type":"array"},"count":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Count","type":"integer"},"rule":{"anyOf":[{"additionalProperties":false,"properties":{"every":{"const":"day","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"month","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"items":[{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"monday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"tuesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"wednesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"thursday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"friday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"saturday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"sunday","type":"string"}],"$id":"#weekday","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}],"$id":"#month_day","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":["array","integer"]}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"week","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"weekdays":{"additionalProperties":false,"properties":{"monday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Monday","default":false,"type":"boolean"},"tuesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Tuesday","default":false,"type":"boolean"},"wednesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Wednesday","default":false,"type":"boolean"},"thursday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Thursday","default":false,"type":"boolean"},"friday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Friday","default":false,"type":"boolean"},"saturday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Saturday","default":false,"type":"boolean"},"sunday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Sunday","default":false,"type":"boolean"}},"$id":"#weekdays","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Weekdays","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"workday","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"year","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":"integer"},"month":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"january","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"february","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"march","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"april","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"may","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"june","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"july","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"august","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"september","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"october","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"november","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"december","type":"string"}],"$id":"#month","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Month","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#rule","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Rule","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"end":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"End"},"start":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Start"},"rule":{"anyOf":[{"additionalProperties":false,"properties":{"every":{"const":"day","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"month","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"},{"items":[{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"monday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"tuesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"wednesday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"thursday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"friday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"saturday","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"sunday","type":"string"}],"$id":"#weekday","$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"integer"}],"$schema":"https://json-schema.org/draft/2019-09/schema","type":"array"}],"$id":"#month_day","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":["array","integer"]}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"week","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"weekdays":{"additionalProperties":false,"properties":{"monday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Monday","default":false,"type":"boolean"},"tuesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Tuesday","default":false,"type":"boolean"},"wednesday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Wednesday","default":false,"type":"boolean"},"thursday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Thursday","default":false,"type":"boolean"},"friday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Friday","default":false,"type":"boolean"},"saturday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Saturday","default":false,"type":"boolean"},"sunday":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Sunday","default":false,"type":"boolean"}},"$id":"#weekdays","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Weekdays","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"workday","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},{"additionalProperties":false,"properties":{"every":{"const":"year","type":"string"},"period":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Period","default":1,"type":"integer"},"day":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Day","type":"integer"},"month":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"january","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"february","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"march","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"april","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"may","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"june","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"july","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"august","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"september","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"october","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"november","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"december","type":"string"}],"$id":"#month","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Month","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}],"$id":"#rule","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Rule","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"}],"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Recurrence","default":null,"type":["null","object"]},"notes":{"additionalProperties":false,"properties":{"blocks":{"items":{"anyOf":[{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"blockquote","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"bullet","type":"string"},"list_type":{"anyOf":[{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"ordered","type":"string"},{"$schema":"https://json-schema.org/draft/2019-09/schema","const":"unordered","type":"string"}],"$id":"#block-list-type","$schema":"https://json-schema.org/draft/2019-09/schema","title":"List_type","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"depth":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Depth","default":0,"type":"integer"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"check","type":"string"},"checked":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Checked","type":"boolean"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"code","type":"string"},"language":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Language","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"callout","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"divider","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"embed","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"heading","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"level":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Level","type":"integer"},"retracted":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Retracted","default":false,"type":"boolean"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"paragraph","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"query","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"recurrent_task","type":"string"},"recurrent_task_id":{"$id":"#task-rec-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Recurrent_task_id","type":"string"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"recurrence":{"anyOf":[{"additionalProperties":false,"properties":{"start":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Start"},"count":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Count","type":"integer"},"rule":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#rule","title":"Rule"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"end":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"End"},"start":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#date","title":"Start"},"rule":{"$schema":"https://json-schema.org/draft/2019-09/schema","$ref":"#rule","title":"Rule"}},"$schema":"https://json-schema.org/draft/2019-09/schema"}],"$id":"#recurrence","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Recurrence","type":"object"}},"$schema":"https://json-schema.org/draft/2019-09/schema"},{"additionalProperties":false,"properties":{"id":{"$id":"#block-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Id","type":"string"},"type":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Type","const":"todo","type":"string"},"checked":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Checked","type":"boolean"},"content":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Content","type":"string"},"task":{"$id":"#task-id","$schema":"https://json-schema.org/draft/2019-09/schema","title":"Task","type":"string"}},"$schema":"https://json-schema.org/draft/2019-09/schema"}],"$id":"#block","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Blocks","type":"array"}},"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Notes","default":null,"type":["null","object"]},"title":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Title","default":null,"type":["null","string"]},"url":{"$schema":"https://json-schema.org/draft/2019-09/schema","title":"Url","default":null,"type":["null","string"]}},"$id":"#task-recurrent-patch","$schema":"https://json-schema.org/draft/2019-09/schema","type":"object"}
*/ patch: z
        .object({
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
          recurrence: z.union([z.null(), z.any(), z.any()]).default(null),
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
                              recurrent_task_id: z.string().optional(),
                              content: z.string().optional(),
                              recurrence: z
                                .record(z.any())
                                .and(
                                  z.union([
                                    z
                                      .object({
                                        start: z.any().optional(),
                                        count: z.number().int().optional(),
                                        rule: z.any().optional(),
                                      })
                                      .strict(),
                                    z
                                      .object({
                                        end: z.any().optional(),
                                        start: z.any().optional(),
                                        rule: z.any().optional(),
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
    },
    async ({ id, patch }) => {
      try {
        const data = await sendRpcRequest("task_recurrent.update", [id, patch]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching task_recurrent.update: %o", error);
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

  server.tool("dev", "Whether this is a development build.", {}, async ({}) => {
    try {
      const data = await sendRpcRequest("dev", []);
      return {
        content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      };
    } catch (error) {
      logger.error("Error fetching dev: %o", error);
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
    "distribution",
    "The distribution of this build.",
    {},
    async ({}) => {
      try {
        const data = await sendRpcRequest("distribution", []);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching distribution: %o", error);
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

  server.tool("inbox", "Universal Inbox.", {}, async ({}) => {
    try {
      const data = await sendRpcRequest("inbox", []);
      return {
        content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      };
    } catch (error) {
      logger.error("Error fetching inbox: %o", error);
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

  server.tool("logsDirectory", "The logs directory.", {}, async ({}) => {
    try {
      const data = await sendRpcRequest("logs_directory", []);
      return {
        content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      };
    } catch (error) {
      logger.error("Error fetching logs_directory: %o", error);
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

  server.tool("logFile", "The current log file.", {}, async ({}) => {
    try {
      const data = await sendRpcRequest("log_file", []);
      return {
        content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      };
    } catch (error) {
      logger.error("Error fetching log_file: %o", error);
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
    "search",
    "Search for an object or note",
    {
      /*
{"$schema":"https://json-schema.org/draft/2019-09/schema","type":"string"}
*/ query: z.string(),

      /*
{"$schema":"https://json-schema.org/draft/2019-09/schema","type":["integer","null"]}
*/ limit: z.union([z.number().int(), z.null()]),
    },
    async ({ query, limit }) => {
      try {
        const data = await sendRpcRequest("search", [query, limit]);
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (error) {
        logger.error("Error fetching search: %o", error);
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

  server.tool("timezone", "Local timezone.", {}, async ({}) => {
    try {
      const data = await sendRpcRequest("timezone", []);
      return {
        content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      };
    } catch (error) {
      logger.error("Error fetching timezone: %o", error);
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

  server.tool("version", "Controller version.", {}, async ({}) => {
    try {
      const data = await sendRpcRequest("version", []);
      return {
        content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      };
    } catch (error) {
      logger.error("Error fetching version: %o", error);
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
}
