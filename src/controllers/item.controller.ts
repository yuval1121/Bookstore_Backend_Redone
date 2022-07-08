import { RouteHandler } from "fastify";
import { getItemParams } from "../schemas/item.schema";
import { getItemById, getItems } from "../services/item.service";

export const getItemsHandler: RouteHandler = async (req, rep) => {
  const Items = await getItems();
  return rep.code(200).send(Items);
};

export const getItemHandler: RouteHandler<{ Params: getItemParams }> = async (
  req,
  rep
) => {
  const { id } = req.params;
  try {
    const item = await getItemById(id);
    return rep.code(200).send(item);
  } catch (e) {
    return rep.code(400).send(e);
  }
};
