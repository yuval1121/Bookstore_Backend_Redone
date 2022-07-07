import { FastifyReply, FastifyRequest } from "fastify";
import { CreateUserInput, LoginInput } from "../schemas/user.schema";
import { createUser, findUserByEmail } from "../services/user.service";
import bcrypt from "bcrypt";
import { createSigner } from "fast-jwt";

export const registerUserHandler = async (
  req: FastifyRequest<{ Body: CreateUserInput }>,
  rep: FastifyReply
) => {
  const body = req.body;

  try {
    const user = await createUser(body);
    return rep.code(201).send(user);
  } catch (e) {
    console.log(e);
    return rep.code(500).send("Server Error");
  }
};

export const loginUserHandler = async (
  req: FastifyRequest<{ Body: LoginInput }>,
  rep: FastifyReply
) => {
  const { email, password } = req.body;
  const user = await findUserByEmail(email);

  if (!user) {
    return rep.code(401).send("Invalid credentials");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return rep.code(401).send("Invalid credentials");
  }

  const payload = {
    name: user.name,
    role: user.role,
  };

  const sign = createSigner({ key: async () => "secret" });
  const token = await sign({ payload });
  return rep.code(200).send({ token });
};
