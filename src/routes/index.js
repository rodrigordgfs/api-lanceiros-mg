import { Router } from "express";
import { sedeRoutes } from "./sede.routes.js";

const routes = Router();

routes.use("/sede", sedeRoutes);

export { routes };

