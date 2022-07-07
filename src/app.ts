import fastify, {
  FastifyReply,
  FastifyRequest,
  FastifyServerOptions,
} from "fastify";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import { userRouter } from "./routes";
import { authAdmin, authPreHandler } from "./utils/auth";

export const build = (opts: FastifyServerOptions = {}) => {
  const app = fastify(opts).withTypeProvider<TypeBoxTypeProvider>();
  app.decorateReply("user", null);
  app.decorate("auth", authPreHandler);
  app.decorate("isAdmin", authAdmin);
  app.register(userRouter, { prefix: "api/users" });

  return app;
};
