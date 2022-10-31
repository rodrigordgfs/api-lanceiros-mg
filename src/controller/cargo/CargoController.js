import { StatusCodes } from "http-status-codes";
import postSchema from "../../validators/cargo/post.js";
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
}
