import { RouteHandler } from "fastify";
import { orderInput } from "../schemas/order.schema";
import { createOrder, getOrderPrice } from "../services/order.service";

export const createOrderHandler: RouteHandler<{ Body: orderInput }> = async (
  req,
  rep
) => {
  const body = req.body;
  const ownerId = req.user;
  try {
    const { owner, items, ...order } = await createOrder(ownerId.id, body);
    const { email } = owner;
    const price = await getOrderPrice(order.id);
    return rep.code(201).send({ ...order, price, email, items });
  } catch (e) {
    console.log(e);
    return rep.code(500).send(e);
  }
};
