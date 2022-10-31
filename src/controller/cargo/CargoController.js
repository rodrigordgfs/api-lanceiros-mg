import { StatusCodes } from "http-status-codes";
import { patchSchema, postSchema } from "../../validators/schemas/cargo.js";
import validateBody from "../../validators/validate.js";
import { CargoView } from "../../view/cargo/CargoView.js";

export class CargoController {
  async post(request, response) {
    const { nome } = request.body;

    validateBody(postSchema, { nome });

    const cargoView = new CargoView();

    const result = await cargoView.post({ nome });

    return response.status(StatusCodes.CREATED).json(result);
  }

  async get(request, response) {
    const { nome } = request.query;

    const cargoView = new CargoView();

    const result = await cargoView.get({ nome });

    return response.status(StatusCodes.OK).json(result);
  }

  async getById(request, response) {
    const { id } = request.params;

    const cargoView = new CargoView();

    const result = await cargoView.getById({ id });

    return response.status(StatusCodes.OK).json(result);
  }

  async patch(request, response) {
    const { id } = request.params;
    const { nome, ativo } = request.body;

    validateBody(patchSchema, { nome, ativo });

    const cargoView = new CargoView();

    const result = await cargoView.patch({ id, nome, ativo });

    return response.status(StatusCodes.OK).json(result);
  }

  async delete(request, response) {
    const { id } = request.params;

    const cargoView = new CargoView();

    await cargoView.delete({ id });

    return response.status(StatusCodes.NO_CONTENT).end();
  }
}
