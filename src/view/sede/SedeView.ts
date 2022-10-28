import { Sede } from "@prisma/client";
import { AppError } from "../../errors/AppError";
import { ISede } from "../../interface/ISede";
import { ISedeID } from "../../interface/ISedeID";
import { prisma } from "../../prisma/client";

export class SedeView {
  async create({ nome, regiao, endereco, ativo }: ISede): Promise<Sede> {
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

  async get({ nome, regiao }: ISede): Promise<Sede[]> {
    const sedes = await prisma.sede.findMany({
      where: {
        nome: {
          contains: nome,
        },
        regiao: {
          contains: regiao,
        },
      },
    });
    return sedes;
  }

  async getById({ id }: ISedeID): Promise<Sede> {
    const sede = await prisma.sede.findFirst({
      where: {
        id,
      },
    });
    return sede as Sede;
  }
}
