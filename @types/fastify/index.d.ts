import fastify from "fastify";

declare module "fastify" {
  export interface FastifyInstance {
    auth: (req, rep) => Promise<undefined>;
    isAdmin: (req, rep) => Promise<undefined>;
  }

  export interface FastifyRequest {
    user: {
      name: string;
      role: string;
    };
  }
}
