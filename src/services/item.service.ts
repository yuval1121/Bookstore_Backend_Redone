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
