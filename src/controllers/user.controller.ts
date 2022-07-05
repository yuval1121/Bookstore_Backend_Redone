import { FastifyReply, FastifyRequest } from "fastify";
import { CreateUserInputType } from "../schemas/user.schema";
import { createUser } from "../services/user.service";

export const registerUserHandler = async (
  req: FastifyRequest<{ Body: CreateUserInputType }>,
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
