import { Static, Type } from "@sinclair/typebox";

export const CreateUserInput = Type.Object({
  name: Type.String(),
  email: Type.String({ format: "email" }),
  password: Type.String(),
  age: Type.Integer(),
  role: Type.Optional(Type.String()),
});

export type CreateUserInputType = Static<typeof CreateUserInput>;
