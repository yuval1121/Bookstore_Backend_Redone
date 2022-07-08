import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import { FastifyInstance, FastifyLoggerInstance } from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";
import { itemSchemaArray } from "./item.schema";
import { userSchemaArray } from "./user.schema";

const getSchemas = () => {
  return [...itemSchemaArray, ...userSchemaArray];
};

export const addSchemas = (
  app: FastifyInstance<
    Server,
    IncomingMessage,
    ServerResponse,
    FastifyLoggerInstance,
    TypeBoxTypeProvider
  >
) => {
  for (const schema of getSchemas()) {
    app.addSchema(schema);
  }
};
