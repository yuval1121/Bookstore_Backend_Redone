import fastify, { FastifyServerOptions } from "fastify";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import { userRouter } from "./routes";

export const build = (opts: FastifyServerOptions = {}) => {
  const app = fastify(opts).withTypeProvider<TypeBoxTypeProvider>();

  app.register(userRouter, { prefix: "api/users" });

  app.get("/", async (req, res) => {
    return { hello: "world" };
  });

  return app;
};
