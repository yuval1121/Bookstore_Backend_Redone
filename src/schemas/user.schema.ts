import { Static, Type } from "@sinclair/typebox";

const userCore = {
  name: Type.String(),
  email: Type.String({ format: "email" }),
  age: Type.Integer(),
  role: Type.Optional(
    Type.Union([Type.Literal("customer"), Type.Literal("admin")])
  ),
};

export const createUserSchema = Type.Object(
  {
    ...userCore,
    password: Type.String(),
  },
  { $id: "createUserSchema" }
);

export const createUserResponseSchema = Type.Object(
  {
    ...userCore,
    id: Type.Integer(),
  },
  { $id: "createUserResponseSchema" }
);

export const loginSchema = Type.Object(
  {
    email: Type.String({ format: "email" }),
    password: Type.String(),
  },
  { $id: "loginSchema" }
);

export const loginResponseSchema = Type.Object(
  {
    token: Type.String(),
  },
  { $id: "loginResponseSchema" }
);

export type CreateUserInput = Static<typeof createUserSchema>;
export type LoginInput = Static<typeof loginSchema>;

export const userSchemaArray = [
  createUserSchema,
  createUserResponseSchema,
  loginSchema,
  loginResponseSchema,
];
