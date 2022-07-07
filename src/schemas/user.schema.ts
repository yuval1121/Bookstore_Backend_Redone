import { Static, Type } from "@sinclair/typebox";

const userCore = {
  name: Type.String(),
  email: Type.String({ format: "email" }),
  age: Type.Integer(),
  role: Type.Optional(
    Type.Union([Type.Literal("customer"), Type.Literal("admin")])
  ),
};

export const createUserSchema = Type.Object({
  ...userCore,
  password: Type.String(),
});

export const createUserResponseSchema = Type.Object({
  ...userCore,
  id: Type.Integer(),
});

export const loginSchema = Type.Object({
  email: Type.String({ format: "email" }),
  password: Type.String(),
});

export const loginResponseSchema = Type.Object({
  token: Type.String(),
});

export type CreateUserInput = Static<typeof createUserSchema>;
export type LoginInput = Static<typeof loginSchema>;
