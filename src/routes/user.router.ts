import {
  FastifyInstance,
  FastifyPluginAsync,
  FastifyPluginOptions,
} from "fastify";
import { registerUserHandler } from "../controllers/user.controller";
import { CreateUserInput } from "../schemas/user.schema";

const userRoutes: FastifyPluginAsync = async (
  server: FastifyInstance,
  options: FastifyPluginOptions
) => {
  server.post(
    "/",
    {
      schema: {
        body: CreateUserInput,
        response: {
          200: CreateUserInput,
        },
      },
    },
    registerUserHandler
  );
};

export default userRoutes;
