import { AppError } from "../../errors/AppError.js";
import { prisma } from "../../prisma/client.js";

export class CargoView {
  async post({ nome }) {
    const cargoAlreadyExists = await prisma.cargo.findFirst({
      where: {
        nome,
      },
    });
    if (cargoAlreadyExists) {
      throw new AppError("Cargo já existe!");
    }
    const cargo = await prisma.cargo.create({
      data: {
        nome,
      },
    });
    return cargo;
  }

  async get({ nome }) {
    const cargo = await prisma.cargo.findMany({
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
    const cargo = await prisma.cargo.findFirst({
      where: {
        id,
      },
    });
    return cargo || {};
  }

  async patch({ id, nome, ativo }) {
    const cargoExists = await prisma.cargo.findFirst({
      where: {
        id,
      },
    });
    if (!cargoExists) {
      throw new AppError("Cargo não encontrado!", StatusCodes.NOT_FOUND);
    }
    const cargo = await prisma.cargo.update({
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
    const cargoExists = await prisma.cargo.findFirst({
      where: {
        id,
      },
    });
    if (!cargoExists) {
      throw new AppError("Cargo não encontrado!", StatusCodes.NOT_FOUND);
    }
    const cargo = await prisma.cargo.delete({
      where: {
        id,
      },
    });
    return cargo;
  }
}
