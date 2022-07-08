import { FastifyInstance, FastifyPluginAsync } from "fastify";
import { getItemsHandler } from "../controllers/item.controller";

const itemRouter: FastifyPluginAsync = async (server: FastifyInstance) => {
  server.get("/", { schema: {} }, getItemsHandler);
};

export default itemRouter;
