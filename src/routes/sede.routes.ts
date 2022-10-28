import { Router } from "express";
import { SedeController } from "../controller/sede/SedeController";

const sedeRoutes = Router();

const sedeController = new SedeController();

sedeRoutes.post("/", sedeController.create);
sedeRoutes.get("/", sedeController.get);
sedeRoutes.get("/:id", sedeController.getById);

export { sedeRoutes };

