import { orderInput } from "../schemas/order.schema";
import prisma from "../utils/prisma";

export const createOrder = async (ownerId: number, order: orderInput) => {
  const { items } = order;

  const mapIds = items.map(e => {
    return { id: e };
  });

  return await prisma.order.create({
    data: {
      items: {
        connect: [...mapIds],
      },
      owner: {
        connect: { id: ownerId },
      },
    },
    include: {
      owner: {
        select: {
          email: true,
        },
      },
      items: {
        select: {
          name: true,
        },
      },
    },
  });
};

export const getOrderPrice = async (id: number) => {
  const { items } = await prisma.order.findFirstOrThrow({
    where: {
      id,
    },
    select: {
      items: {
        select: {
          id: true,
        },
      },
    },
  });
  const itemIds = items.map(item => item.id);
  const aggregate = await prisma.item.aggregate({
    where: {
      id: { in: itemIds },
    },
    _sum: {
      price: true,
    },
  });
  return aggregate._sum.price;
};
