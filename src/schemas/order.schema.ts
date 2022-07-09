import { Type, Static } from "@sinclair/typebox";

const orderInput = {
  items: Type.Array(Type.Integer()),
};

const orderGenerated = {
  id: Type.Integer(),
  email: Type.String({ format: "email" }),
  createAt: Type.String(),
  updatedAt: Type.String(),
  price: Type.Number(),
  items: Type.Array(Type.String()),
};

export const orderInputSchema = Type.Object(
  {
    ...orderInput,
  },
  { $id: "orderInputSchema" }
);

export const orderResponseSchema = Type.Object(
  {
    ...orderInput,
    ...orderGenerated,
  },
  { $id: "orderResponseSchema" }
);

export type orderInput = Static<typeof orderInputSchema>;

export const orderSchemaArray = [orderInputSchema, orderResponseSchema];
