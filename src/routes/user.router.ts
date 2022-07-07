import { FastifyInstance, FastifyPluginAsync } from "fastify";
import {
  loginUserHandler,
  registerUserHandler,
} from "../controllers/user.controller";
import {
  createUserSchema,
  createUserResponseSchema,
  loginSchema,
  loginResponseSchema,
} from "../schemas/user.schema";

const userRouter: FastifyPluginAsync = async (server: FastifyInstance) => {
  server.post(
    "/register",
    {
      schema: {
        body: createUserSchema,
        response: {
          201: createUserResponseSchema,
        },
      },
    },
    registerUserHandler
  );

  server.post(
    "/login",
    {
      schema: {
        body: loginSchema,
        response: {
          200: loginResponseSchema,
        },
      },
    },
    loginUserHandler
  );
};

export default userRouter;
