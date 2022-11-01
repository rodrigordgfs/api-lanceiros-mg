import { StatusCodes } from "http-status-codes";
import { AppError } from "../errors/AppError.js";

export default function validateBody(schema, data) {
  const validate = schema.validate(data);
  if (validate.error) {
    throw new AppError(
      String(validate.error.details[0].message).replace(/"/g, ""),
      StatusCodes.BAD_REQUEST
    );
  }
}
