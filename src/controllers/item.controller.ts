import { RouteHandler } from "fastify";
import { getItems } from "../services/item.service";

export const getItemsHandler: RouteHandler<{
  Params: { id: number };
}> = async (req, res) => {
  const Items = await getItems();
  return res.code(200).send(Items);
};
