import { Sede } from "@prisma/client";
import { AppError } from "../../errors/AppError";
import { ISede } from "../../interface/ISede";
import { prisma } from "../../prisma/client";

export class PostSedeView {
  async execute({ nome, regiao, endereco, ativo }: ISede): Promise<Sede> {
    const sedeAlreadyExists = await prisma.sede.findFirst({
      where: {
        nome,
      },
    });

    if (sedeAlreadyExists) {
      throw new AppError("Sede já existe!");
    }

    const sede = await prisma.sede.create({
      data: {
        nome,
        regiao,
        endereco,
        ativo,
      },
    });

    return sede;
  }
}
