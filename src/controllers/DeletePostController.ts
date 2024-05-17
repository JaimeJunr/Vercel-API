import { FastifyRequest, FastifyReply } from "fastify";
import { DeletePostService } from "../services/DeletePostService";

export class DeletePostController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string };

    const deleteCustomerService = new DeletePostService();
    const customer = await deleteCustomerService.execute({ id });

    reply.send(customer);
  }
}
