import { Type, Static } from "@sinclair/typebox";

export const getItemSchema = Type.Object({
  id: Type.Number(),
});

export const getItemResponseSchema = Type.Object(
  {
    id: Type.Number(),
    name: Type.String(),
    price: Type.Number(),
    alcoholic: Type.Boolean({ default: false }),
  },
  { $id: "getItemResponseSchema" }
);

export const getItemsResponseSchema = Type.Array(getItemResponseSchema, {
  $id: "getItemsResponseSchema",
});

export type getItemParams = Static<typeof getItemSchema>;
export const itemSchemaArray = [getItemResponseSchema, getItemsResponseSchema];
