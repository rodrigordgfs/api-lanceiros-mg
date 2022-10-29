import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { SedeView } from "../../view/sede/SedeView";

export class SedeController {
  async create(request: Request, response: Response) {
    const { nome, regiao, endereco, ativo } = request.body;

    const sedeView = new SedeView();

    const result = await sedeView.create({
      nome,
      regiao,
      endereco,
      ativo,
    });

    return response.status(StatusCodes.CREATED).json(result);
  }

  async get(request: Request, response: Response) {
    const nome = request.query.nome as string;
    const regiao = request.query.regiao as string;

    const sedeView = new SedeView();

    const result = await sedeView.get({ nome, regiao });

    return response.status(StatusCodes.OK).json(result);
  }

  async getById(request: Request, response: Response) {
    const { id } = request.params;

    const sedeView = new SedeView();

    const result = await sedeView.getById({ id });

    return response.status(StatusCodes.OK).json(result);
  }

  async patch(request: Request, response: Response) {
    const { id } = request.params;
    const { nome, regiao, endereco, ativo } = request.body;

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
}
