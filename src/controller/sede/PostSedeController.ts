import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { PostSedeView } from "../../view/sede/postSedeView";

export class PostSedeController {
  async handle(request: Request, response: Response) {
    const { nome, regiao, endereco, ativo } = request.body;

    const postSedeView = new PostSedeView();

    const result = await postSedeView.execute({
      nome,
      regiao,
      endereco,
      ativo,
    });

    return response.status(StatusCodes.CREATED).json(result);
  }
}
