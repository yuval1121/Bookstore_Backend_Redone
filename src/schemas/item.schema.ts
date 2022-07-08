import { Type } from "@sinclair/typebox";

export const getItemsResponseSchema = Type.Object(
  {},
  { $id: "getItemsResponseSchema" }
);

export const itemSchemaArray = [getItemsResponseSchema];
