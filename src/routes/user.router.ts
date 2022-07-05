import {
  FastifyInstance,
  FastifyPluginAsync,
  FastifyPluginOptions,
} from "fastify";
import { registerUserHandler } from "../controllers/user.controller";
import { CreateUserInput, CreateUserOutput } from "../schemas/user.schema";

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
          201: CreateUserOutput,
        },
      },
    },
    registerUserHandler
  );
};

export default userRoutes;
