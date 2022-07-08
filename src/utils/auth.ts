import { createVerifier } from "fast-jwt";
import { FastifyReply, FastifyRequest } from "fastify";

export const authPreHandler = async (
  req: FastifyRequest,
  rep: FastifyReply
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const verify = createVerifier({ key: async () => "secret" });
    if (token) {
      const { payload } = await verify(token);
      req.user = payload;
    }
  } catch (e) {
    return rep.code(400).send(e);
  }
};

export const authAdmin = async (req: FastifyRequest, rep: FastifyReply) => {
  if (req?.user?.role !== "admin") {
    return rep.code(401).send("Missing admin permissions");
  }
};
