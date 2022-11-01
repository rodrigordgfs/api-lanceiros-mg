import { Router } from "express";
import { MembroController } from "../controller/MembrosController.js";

const membrosRoutes = Router();

const membrosController = new MembroController();

membrosRoutes.post("/", membrosController.post);
membrosRoutes.get("/", membrosController.get);
membrosRoutes.get("/:id", membrosController.getById);
membrosRoutes.patch("/:id", membrosController.patch);
membrosRoutes.delete("/:id", membrosController.delete);

export { membrosRoutes };

