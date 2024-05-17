import prismaClient from "../prisma/index.js";

interface Props {
  id: string;
}

export class DeletePostService {
  async execute({ id }: Props) {
    if (!id) {
      throw new Error("Solitação invalidade");
    }

    const findCustomer = await prismaClient.posts.findFirst({
      where: {
        id: id,
      },
    });

    if (!findCustomer) {
      throw new Error("Cliente não existe!");
    }

    await prismaClient.posts.delete({
      where: {
        id: findCustomer.id,
      },
    });
    return { ok: true };
  }
}
