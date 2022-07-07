import fastify, { FastifyServerOptions } from "fastify";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import { userRouter } from "./routes";
import fastifyJwt from "@fastify/jwt";

export const build = (opts: FastifyServerOptions = {}) => {
  const app = fastify(opts).withTypeProvider<TypeBoxTypeProvider>();

  app.register(fastifyJwt, { secret: "supersecret" });
  app.register(userRouter, { prefix: "api/users" });

  return app;
};
