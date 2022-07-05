import { Static, Type } from "@sinclair/typebox";

const userCore = {
  name: Type.String(),
  email: Type.String({ format: "email" }),
  age: Type.Integer(),
  role: Type.Optional(Type.String()),
};

export const CreateUserInput = Type.Object({
  ...userCore,
  password: Type.String(),
});

export const CreateUserOutput = Type.Object({
  ...userCore,
  id: Type.Integer(),
});

export type CreateUserInputType = Static<typeof CreateUserInput>;
