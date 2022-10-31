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
}
