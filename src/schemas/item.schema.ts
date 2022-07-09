import { Type, Static } from "@sinclair/typebox";

const itemInput = {
  name: Type.String(),
  price: Type.Number(),
  alcoholic: Type.Boolean({ default: false }),
};

const itemGenerated = {
  id: Type.Integer(),
};

export const getItemSchema = Type.Object(
  {
    ...itemGenerated,
  },
  { $id: "getItemSchema" }
);

export const createItemSchema = Type.Object(
  {
    ...itemInput,
  },
  { $id: "createItemSchema" }
);

export const itemResponseSchema = Type.Object(
  {
    ...itemInput,
    ...itemGenerated,
  },
  { $id: "itemResponseSchema" }
);

export const itemsResponseSchema = Type.Array(itemResponseSchema, {
  $id: "itemsResponseSchema",
});

export type itemParams = Static<typeof getItemSchema>;
export type itemInput = Static<typeof createItemSchema>;
export const itemSchemaArray = [
  getItemSchema,
  createItemSchema,
  itemResponseSchema,
  itemsResponseSchema,
];
