import { AppError } from "../errors/AppError.js";
import { prisma } from "../prisma/client.js";

export class CargoView {
  async post({ nome, ativo }) {
    const cargoAlreadyExists = await prisma.cargos.findFirst({
      where: {
        nome,
        ativo
      },
    });
    if (cargoAlreadyExists) {
      throw new AppError("Cargo já existe!");
    }
    const cargo = await prisma.cargos.create({
      data: {
        nome,
      },
    });
    return cargo;
  }

  async get({ nome }) {
    const cargo = await prisma.cargos.findMany({
      where: {
        nome: {
          contains: nome,
        },
      },
      orderBy: {
        nome: "asc",
      }
    });
    return cargo;
  }

  async getById({ id }) {
    const cargo = await prisma.cargos.findFirst({
      where: {
        id,
      },
    });
    return cargo || {};
  }

  async patch({ id, nome, ativo }) {
    const cargoExists = await prisma.cargos.findFirst({
      where: {
        id,
      },
    });
    if (!cargoExists) {
      throw new AppError("Cargo não encontrado!", StatusCodes.NOT_FOUND);
    }
    const cargo = await prisma.cargos.update({
      where: {
        id,
      },
      data: {
        nome,
        ativo,
      },
    });
    return cargo;
  }

  async delete({ id }) {
    const cargoExists = await prisma.cargos.findFirst({
      where: {
        id,
      },
    });
    if (!cargoExists) {
      throw new AppError("Cargo não encontrado!", StatusCodes.NOT_FOUND);
    }
    const cargo = await prisma.cargos.delete({
      where: {
        id,
      },
    });
    return cargo;
  }
}
