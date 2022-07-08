import fastify, { FastifyServerOptions } from "fastify";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import { userRouter } from "./routes";
import { authAdmin, authPreHandler } from "./utils/auth";
import itemRouter from "./routes/item.router";
import fastifySwagger from "@fastify/swagger";
import { swagOptions } from "./utils/swagger";
import fastifyCors from "@fastify/cors";
import { addSchemas } from "./schemas";

export const build = (opts: FastifyServerOptions = {}) => {
  const app = fastify(opts).withTypeProvider<TypeBoxTypeProvider>();

  addSchemas(app);

  app.decorateReply("user", null);
  app.decorate("auth", authPreHandler);
  app.decorate("authAdmin", authAdmin);

  app.register(fastifyCors);
  app.register(fastifySwagger, swagOptions);
  app.register(userRouter, { prefix: "api/users" });
  app.register(itemRouter, { prefix: "api/items" });

  return app;
};
