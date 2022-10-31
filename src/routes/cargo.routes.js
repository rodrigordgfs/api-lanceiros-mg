import { Router } from "express";
import { CargoController } from "../controller/cargo/CargoController.js";

const cargoRoutes = Router();

const cargoController = new CargoController();

cargoRoutes.post("/", cargoController.post);

export { cargoRoutes };

