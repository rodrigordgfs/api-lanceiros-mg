import { StatusCodes } from "http-status-codes";
import { AppError } from "../../errors/AppError.js";
import { prisma } from "../../prisma/client.js";

export class SedeView {
  async post({ nome, regiao, endereco, ativo }) {
    const sedeAlreadyExists = await prisma.sedes.findFirst({
      where: {
        nome,
      },
    });

    if (sedeAlreadyExists) {
      throw new AppError("Sede já existe!");
    }

    const sede = await prisma.sedes.create({
      data: {
        nome,
        regiao,
        endereco,
        ativo,
      },
    });

    return sede;
  }

  async get({ nome, regiao }) {
    const sedes = await prisma.sedes.findMany({
      where: {
        nome: {
          contains: nome,
        },
        regiao: {
          contains: regiao,
        },
      },
      orderBy: {
        nome: "asc",
      }
    });
    return sedes;
  }

  async getById({ id }) {
    const sede = await prisma.sedes.findFirst({
      where: {
        id,
      },
    });
    return sede || {};
  }

  async patch({ id, nome, regiao, endereco, ativo }) {
    const sedeExists = await prisma.sedes.findFirst({
      where: {
        id,
      },
    });

    if (!sedeExists) {
      throw new AppError("Sede não encontrada!", StatusCodes.NOT_FOUND);
    }

    const sede = await prisma.sedes.update({
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

  async delete({ id }) {
    const sedeExists = await prisma.sedes.findFirst({
      where: {
        id,
      },
    });

    if (!sedeExists) {
      throw new AppError("Sede não encontrada!", StatusCodes.NOT_FOUND);
    }

    await prisma.sedes.delete({
      where: {
        id,
      },
    });
  }
}
