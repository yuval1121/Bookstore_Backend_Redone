import { build } from "./app";

const server = build({
  logger: {
    level: "info",
    transport: {
      target: "pino-pretty",
    },
  },
});

const PORT = Number(process.env.PORT || 5000);
server.listen({ port: PORT }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
