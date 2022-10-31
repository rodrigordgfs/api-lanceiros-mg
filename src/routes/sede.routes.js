import { Router } from "express";
import { SedeController } from "../controller/sede/SedeController.js";

const sedeRoutes = Router();

const sedeController = new SedeController();

sedeRoutes.post("/", sedeController.post);
sedeRoutes.get("/", sedeController.get);
sedeRoutes.get("/:id", sedeController.getById);
sedeRoutes.patch("/:id", sedeController.patch);
sedeRoutes.delete("/:id", sedeController.delete);

export { sedeRoutes };

