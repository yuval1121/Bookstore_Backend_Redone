import { RouteHandler } from "fastify";
import { itemParams, itemInput } from "../schemas/item.schema";
import {
  createItem,
  deleteItem,
  getItemById,
  getItems,
  updateItem,
} from "../services/item.service";

export const getItemsHandler: RouteHandler = async (req, rep) => {
  const Items = await getItems();
  return rep.code(200).send(Items);
};

export const getItemHandler: RouteHandler<{ Params: itemParams }> = async (
  req,
  rep
) => {
  const { id } = req.params;

  try {
    const item = await getItemById(id);
    return rep.code(200).send(item);
  } catch (e) {
    return rep.code(500).send(e);
  }
};

export const createItemHandler: RouteHandler<{ Body: itemInput }> = async (
  req,
  rep
) => {
  const body = req.body;

  try {
    const item = await createItem(body);
    return rep.code(201).send(item);
  } catch (e) {
    console.log(e);
    return rep.code(500).send(e);
  }
};

export const deleteItemHandler: RouteHandler<{ Params: itemParams }> = async (
  req,
  rep
) => {
  const { id } = req.params;

  try {
    const item = await deleteItem(id);
    return rep.code(200).send(item);
  } catch (e) {
    return rep.code(500).send(e);
  }
};

export const updateItemHandler: RouteHandler<{
  Body: itemInput;
  Params: itemParams;
}> = async (req, rep) => {
  const body = req.body;
  const { id } = req.params;

  try {
    const item = await updateItem(id, body);
    return rep.code(200).send(item);
  } catch (e) {
    return rep.code(500).send(e);
  }
};
