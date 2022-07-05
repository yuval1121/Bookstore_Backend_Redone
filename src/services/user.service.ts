import prisma from "../utils/prisma";
import bcrypt from "bcrypt";
import { CreateUserInputType } from "../schemas/user.schema";

export const createUser = async (input: CreateUserInputType) => {
  const { password, ...rest } = input;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  return await prisma.user.create({
    data: { ...rest, password: hashedPassword },
  });
};
