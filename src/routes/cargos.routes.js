import { Router } from "express";
import { CargoController } from "../controller/CargosController.js";

const cargoRoutes = Router();

const cargoController = new CargoController();

cargoRoutes.post("/", cargoController.post);
cargoRoutes.get("/", cargoController.get);
cargoRoutes.get("/:id", cargoController.getById);
cargoRoutes.patch("/:id", cargoController.patch);
cargoRoutes.delete("/:id", cargoController.delete);

export { cargoRoutes };

