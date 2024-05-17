import { FastifyRequest, FastifyReply } from "fastify";
import { CreatePostService } from "../services/CreatePostService";

export class CreatePostController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { title, body } = request.body as { title: string; body: string };

    const customerService = new CreatePostService();
    const customer = await customerService.execute({ title, body });

    reply.send(customer);
  }
}
