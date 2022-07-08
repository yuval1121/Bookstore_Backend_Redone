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
