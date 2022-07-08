import { build } from "./app";

const server = build({
  logger: {
    level: "info",
    transport: {
      target: "pino-pretty",
    },
    base: {
      pid: false,
    },
    timestamp: false,
  },
});

const PORT = Number(process.env.PORT || 5000);
server.listen({ port: PORT }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  server.log.info(`Docs available at ${address}/docs`);
});
