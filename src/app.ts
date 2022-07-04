import fastify, { FastifyServerOptions } from "fastify";

export const build = (opts: FastifyServerOptions = {}) => {
  const app = fastify(opts);
  app.get("/", async (req, res) => {
    return { hello: "world" };
  });
  return app;
};
