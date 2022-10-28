import { Router } from "express";
import { PostSedeController } from "../controller/sede/PostSedeController";

const sedeRoutes = Router();

const postSedeController = new PostSedeController();

sedeRoutes.post("/", postSedeController.handle);

export { sedeRoutes };

