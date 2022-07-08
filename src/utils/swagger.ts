import { SwaggerOptions } from "@fastify/swagger";

export const swagOptions: SwaggerOptions = {
  routePrefix: "/docs",
  exposeRoute: true,
  openapi: {
    info: {
      title: "Coffeeshop backend endpoints",
      description: "Testing the API",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
};
