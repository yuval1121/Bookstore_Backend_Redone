import fastify, { FastifyServerOptions } from "fastify";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import userRoutes from "./routes/user.router";

export const build = (opts: FastifyServerOptions = {}) => {
  const app = fastify(opts).withTypeProvider<TypeBoxTypeProvider>();

  app.register(userRoutes, { prefix: "api/users" });

  app.get("/", async (req, res) => {
    return { hello: "world" };
  });

  return app;
};
