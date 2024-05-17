import { FastifyRequest, FastifyReply } from "fastify";
import { ListPostsService } from "../services/ListPostsService";

export class ListPostsController {
  async handle(reply: FastifyReply) {
    const listcustomerService = new ListPostsService();
    const customers = await listcustomerService.execute();

    reply.send(customers);
  }
}
