import { FastifyInstance, FastifyPluginAsync } from "fastify";
import {
  getItemHandler,
  getItemsHandler,
} from "../controllers/item.controller";
import {
  getItemResponseSchema,
  getItemSchema,
  getItemsResponseSchema,
} from "../schemas/item.schema";

const itemRouter: FastifyPluginAsync = async (server: FastifyInstance) => {
  server.get(
    "/:id",
    {
      schema: {
        response: {
          200: getItemResponseSchema,
        },
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
          200: getItemsResponseSchema,
        },
      },
    },
    getItemsHandler
  );
};

export default itemRouter;
