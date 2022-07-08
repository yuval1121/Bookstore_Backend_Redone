import { RouteHandler } from "fastify";
import { ItemParams, itemInput } from "../schemas/item.schema";
import {
  createItem,
  deleteItem,
  getItemById,
  getItems,
} from "../services/item.service";

export const getItemsHandler: RouteHandler = async (req, rep) => {
  const Items = await getItems();
  return rep.code(200).send(Items);
};

export const getItemHandler: RouteHandler<{ Params: ItemParams }> = async (
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

export const createItemHandler: RouteHandler<{ Body: itemInput }> = async (
  req,
  rep
) => {
  const body = req.body;
  const item = await createItem(body);
  return rep.code(201).send(item);
};

export const deleteItemHandler: RouteHandler<{ Params: ItemParams }> = async (
  req,
  rep
) => {
  const { id } = req.params;
  try {
    const item = await deleteItem(id);
    return rep.code(200).send(item);
  } catch (e) {
    return rep.code(400).send(e);
  }
};
