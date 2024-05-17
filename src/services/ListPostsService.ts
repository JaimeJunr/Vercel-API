import prismaClient from "../prisma/index.js";

export class ListPostsService {
  async execute() {
    const customer = await prismaClient.posts.findMany();

    return customer;
  }
}
