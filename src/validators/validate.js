import { StatusCodes } from "http-status-codes";
import { AppError } from "../errors/AppError.js";

export default function validateBody(schema, data) {
  const validate = schema.validate(data);
  if (validate.error) {
    throw new AppError(
      validate.error.details[0].message,
      StatusCodes.BAD_REQUEST
    );
  }
}
