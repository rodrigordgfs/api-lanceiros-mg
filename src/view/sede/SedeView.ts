import { Sede } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { AppError } from "../../errors/AppError";
import { ISede } from "../../interface/sede/ISede";
import { ISedeID } from "../../interface/sede/ISedeID";
import { prisma } from "../../prisma/client";

export class SedeView {
  async post({ nome, regiao, endereco, ativo }: ISede): Promise<Sede> {
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

  async patch({ id, nome, regiao, endereco, ativo }: ISede): Promise<Sede> {
    const sedeExists = await prisma.sede.findFirst({
      where: {
        id,
      },
    });

    if (!sedeExists) {
      throw new AppError("Sede não encontrada!", StatusCodes.NOT_FOUND);
    }

    const sede = await prisma.sede.update({
      where: {
        id,
      },
      data: {
        nome,
        regiao,
        endereco,
        ativo,
      },
    });
    return sede;
  }

  async delete({ id }: ISedeID): Promise<void> {
    const sedeExists = await prisma.sede.findFirst({
      where: {
        id,
      },
    });

    if (!sedeExists) {
      throw new AppError("Sede não encontrada!", StatusCodes.NOT_FOUND);
    }

    await prisma.sede.delete({
      where: {
        id,
      },
    });
  }
}
