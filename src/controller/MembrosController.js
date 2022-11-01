import { StatusCodes } from "http-status-codes";
import { patchSchema, postSchema } from "../validators/schemas/membro.js";
import validateBody from "../validators/validate.js";
import { MembrosView } from "../view/MembrosView.js";

export class MembroController {
  async post(request, response) {
    const {
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
    } = request.body;

    validateBody(postSchema, {
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
    });

    const membrosView = new MembrosView();

    const result = await membrosView.post({
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
    });

    return response.status(StatusCodes.CREATED).json(result);
  }

  async get(request, response) {
    const { nome, cpf, apelido } = request.query;

    const membrosView = new MembrosView();

    const result = await membrosView.get({ nome, cpf, apelido });

    return response.status(StatusCodes.OK).json(result);
  }

  async getById(request, response) {
    const { id } = request.params;

    const membrosView = new MembrosView();

    const result = await membrosView.getById({ id });

    return response.status(StatusCodes.OK).json(result);
  }

  async patch(request, response) {
    const { id } = request.params;
    const {
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
    } = request.body;

    validateBody(patchSchema, {
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
    });

    const membrosView = new MembrosView();

    const result = await membrosView.patch({
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
    });

    return response.status(StatusCodes.OK).json(result);
  }

  async delete(request, response) {
    const { id } = request.params;

    const membrosView = new MembrosView();

    const result = await membrosView.delete({ id });

    return response.status(StatusCodes.NO_CONTENT).json(result);
  }
}
