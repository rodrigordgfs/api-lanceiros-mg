import express from "express";
import "express-async-errors";
import { StatusCodes } from "http-status-codes";
import { AppError } from "./errors/AppError.js";
import { routes } from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(routes);
app.use(
  (error, request, response, next) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: "error",
        message: error.message,
      });
    }

    response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      status: "error",
      message: `Internal server error - ${error.message}`,
    });
  }
);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
