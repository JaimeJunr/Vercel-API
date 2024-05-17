import prismaClient from "../prisma/index.js";

interface Props {
  title: string;
  body: string;
}

export class CreatePostService {
  async execute({ title, body }: Props) {
    if (!title || !body) {
      throw new Error("Prencha todos os Campos");
    }

    const customer = await prismaClient.posts.create({
      data: {
        title,
        body,
      },
    });

    return customer;
  }
}
