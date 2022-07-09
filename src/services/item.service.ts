import { itemInput } from "../schemas/item.schema";
import prisma from "../utils/prisma";

export const getItems = async () => {
  return await prisma.item.findMany({
    select: {
      id: true,
      name: true,
      price: true,
      alcoholic: true,
    },
  });
};

export const getItemById = async (id: number) => {
  return await prisma.item.findFirstOrThrow({
    where: {
      id,
    },
  });
};

export const createItem = async (item: itemInput) => {
  return await prisma.item.create({
    data: {
      ...item,
    },
  });
};

export const deleteItem = async (id: number) => {
  return await prisma.item.delete({
    where: {
      id,
    },
  });
};

export const updateItem = async (id: number, data: itemInput) => {
  return await prisma.item.update({
    where: {
      id,
    },
    data,
  });
};
