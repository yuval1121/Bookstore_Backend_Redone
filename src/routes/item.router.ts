import { FastifyInstance, FastifyPluginAsync } from "fastify";
import {
  createItemHandler,
  deleteItemHandler,
  getItemHandler,
  getItemsHandler,
} from "../controllers/item.controller";
import {
  createItemSchema,
  getItemSchema,
  itemResponseSchema,
  itemsResponseSchema,
} from "../schemas/item.schema";

const itemRouter: FastifyPluginAsync = async (server: FastifyInstance) => {
  server.get(
    "/:id",
    {
      schema: {
        response: {
          200: itemResponseSchema,
        },
        tags: ["Items"],
        params: getItemSchema,
      },
    },
    getItemHandler
  );

  server.get(
    "/",
    {
      schema: {
        response: {
          200: itemsResponseSchema,
        },
        tags: ["Items"],
      },
    },
    getItemsHandler
  );

  server.post(
    "/",
    {
      preHandler: [server.auth, server.authAdmin],
      schema: {
        body: createItemSchema,
        response: {
          200: itemResponseSchema,
        },
        tags: ["Items"],
      },
    },
    createItemHandler
  );

  server.delete(
    "/:id",
    {
      preHandler: [server.auth, server.authAdmin],
      schema: {
        response: {
          200: itemResponseSchema,
        },
        tags: ["Items"],
        params: getItemSchema,
      },
    },
    deleteItemHandler
  );
};

export default itemRouter;
