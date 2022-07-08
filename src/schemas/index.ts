import { FastifyInstance } from "fastify";
import { itemSchemaArray } from "./item.schema";
import { userSchemaArray } from "./user.schema";

export const getSchemas = () => {
  return [...itemSchemaArray, ...userSchemaArray];
};

export const addSchemas = (app: FastifyInstance) => {
  for (const schema of getSchemas()) {
    app.addSchema(schema);
  }
};
