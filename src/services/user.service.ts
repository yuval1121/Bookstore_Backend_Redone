import prisma from "../utils/prisma";
import bcrypt from "bcrypt";
import { CreateUserInput } from "../schemas/user.schema";

export const createUser = async (input: CreateUserInput) => {
  const { password, ...rest } = input;

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);

  return await prisma.user.create({
    data: { ...rest, password: hashedPassword },
  });
};

export const findUserByEmail = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  return user;
};
