import { StatusCodes } from "http-status-codes";
import { patchSchema, postSchema } from "../validators/schemas/sede.js";
import validateBody from "../validators/validate.js";
import { SedeView } from "../view/SedesView.js";

export class SedeController {
  async post(request, response) {
    const { nome, regiao, endereco, ativo } = request.body;

    validateBody(postSchema, { nome, regiao, endereco, ativo });

    const sedeView = new SedeView();

    const result = await sedeView.post({
      nome,
      regiao,
      endereco,
      ativo,
    });

    return response.status(StatusCodes.CREATED).json(result);
  }

  async get(request, response) {
    const { nome, regiao } = request.query;

    const sedeView = new SedeView();

    const result = await sedeView.get({ nome, regiao });

    return response.status(StatusCodes.OK).json(result);
  }

  async getById(request, response) {
    const { id } = request.params;

    const sedeView = new SedeView();

    const result = await sedeView.getById({ id });

    return response.status(StatusCodes.OK).json(result);
  }

  async patch(request, response) {
    const { id } = request.params;
    const { nome, regiao, endereco, ativo } = request.body;

    validateBody(patchSchema, { nome, regiao, endereco, ativo });

    const sedeView = new SedeView();

    const result = await sedeView.patch({
      id,
      nome,
      regiao,
      endereco,
      ativo,
    });

    return response.status(StatusCodes.OK).json(result);
  }

  async delete(request, response) {
    const { id } = request.params;

    const sedeView = new SedeView();

    await sedeView.delete({ id });

    return response.status(StatusCodes.OK).send();
  }
}
