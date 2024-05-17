import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import cors from "@fastify/cors";

import { routes } from "./routes.js";

const app = Fastify({ logger: true });

app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ message: error.message });
});

const start = async () => {
  await app.register(cors);
  await app.register(routes);

  app.listen({
    port: 3333,
    listenTextResolver: (address) =>
      `Prometheus metrics server is listening at ${address}`,
  });

  console.log("open");
};

export default async function handler(
  request: FastifyRequest,
  reply: FastifyReply
) {
  await app.ready();
  app.server.emit("request", request, reply);
}

start();
