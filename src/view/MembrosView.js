import { StatusCodes } from "http-status-codes";
import { AppError } from "../errors/AppError.js";
import { prisma } from "../prisma/client.js";

export class MembrosView {
  async post({
    sede,
    cargo,
    cpf,
    nome,
    apelido,
    telefone_contato,
    telefone_emergencia,
    data_nascimento,
    cep,
    estado,
    cidade,
    logradouro,
    numero,
    bairro,
    complemento,
    profissao,
    estado_civil,
    data_entrada,
    data_saida,
    observacoes,
    ativo,
  }) {
    const membroAlreadyExists = await prisma.membros.findFirst({
      where: {
        cpf,
      },
    });
    if (membroAlreadyExists) {
      throw new AppError("Membro com este CPF já existe!");
    }

    const sedeExists = await prisma.sedes.findFirst({
      where: {
        id: sede,
      }
    })
    if (!sedeExists) {
      throw new AppError("Sede não encontrada!", StatusCodes.NOT_FOUND);
    }

    const cargoExists = await prisma.cargos.findFirst({
      where: {
        id: cargo,
      }
    })
    if (!cargoExists) {
      throw new AppError("Cargo não encontrado!", StatusCodes.NOT_FOUND);
    }

    const membro = await prisma.membros.create({
      data: {
        sedeId: sede,
        cargoId: cargo,
        cpf,
        nome,
        apelido,
        telefone_contato,
        telefone_emergencia,
        data_nascimento,
        cep,
        estado,
        cidade,
        logradouro,
        numero,
        bairro,
        complemento,
        profissao,
        estado_civil,
        data_entrada,
        data_saida,
        observacoes,
        ativo,
      },
    });
    return membro;
  }

  async get({ nome, cpf, apelido }) {
    const membro = await prisma.membros.findMany({
      where: {
        nome: {
          contains: nome,
        },
        cpf: {
          contains: cpf,
        },
        apelido: {
          contains: apelido,
        },
      },
      orderBy: {
        nome: "asc",
      },
      include: {
        sede: {
          select: {
            id: true,
            nome: true,
            regiao: true,
          }
        },
        cargo: {
          select: {
            id: true,
            nome: true,
          }
        }
      }
    });
    return membro;
  }

  async getById({ id }) {
    const membro = await prisma.membros.findFirst({
      where: {
        id,
      },
      include: {
        sede: {
          select: {
            id: true,
            nome: true,
            regiao: true,
          }
        },
        cargo: {
          select: {
            id: true,
            nome: true,
          }
        }
      }
    });
    return membro || {};
  }

  async patch({
    sede,
    cargo,
    id,
    cpf,
    nome,
    apelido,
    telefone_contato,
    telefone_emergencia,
    data_nascimento,
    cep,
    estado,
    cidade,
    logradouro,
    numero,
    bairro,
    complemento,
    profissao,
    estado_civil,
    data_entrada,
    data_saida,
    observacoes,
    ativo,
  }) {
    const membroExists = await prisma.membros.findFirst({
      where: {
        id,
      },
    });
    if (!membroExists) {
      throw new AppError("Membro não encontrado!", StatusCodes.NOT_FOUND);
    }

    const sedeExists = await prisma.sedes.findFirst({
      where: {
        id: sede,
      }
    })
    if (!sedeExists) {
      throw new AppError("Sede não encontrada!", StatusCodes.NOT_FOUND);
    }

    const cargoExists = await prisma.cargos.findFirst({
      where: {
        id: cargo,
      }
    })
    if (!cargoExists) {
      throw new AppError("Cargo não encontrado!", StatusCodes.NOT_FOUND);
    }

    const membro = await prisma.membros.update({
      where: {
        id,
      },
      data: {
        sede,
      cargo,
        cpf,
        nome,
        apelido,
        telefone_contato,
        telefone_emergencia,
        data_nascimento,
        cep,
        estado,
        cidade,
        logradouro,
        numero,
        bairro,
        complemento,
        profissao,
        estado_civil,
        data_entrada,
        data_saida,
        observacoes,
        ativo,
      },
    });
    return membro;
  }

  async delete({ id }) {
    const membroExists = await prisma.membros.findFirst({
      where: {
        id,
      },
    });
    if (!membroExists) {
      throw new AppError("Membro não encontrado!", StatusCodes.NOT_FOUND);
    }
    await prisma.membros.delete({
      where: {
        id,
      },
    });
  }
}
