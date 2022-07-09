import { FastifyInstance, FastifyPluginAsync } from "fastify";
import { createOrderHandler } from "../controllers/order.controller";
import { orderInputSchema, orderResponseSchema } from "../schemas/order.schema";

const orderRouter: FastifyPluginAsync = async (server: FastifyInstance) => {
  server.post(
    "/",
    {
      preHandler: [server.auth],
      schema: {
        body: orderInputSchema,
        response: {
          200: orderResponseSchema,
        },
        tags: ["Orders"],
      },
    },
    createOrderHandler
  );
};

export default orderRouter;
