import { Router } from "express";
import { cargoRoutes } from "./cargos.routes.js";
import { membrosRoutes } from "./membros.routes.js";
import { sedeRoutes } from "./sedes.routes.js";

const routes = Router();

routes.use("/sede", sedeRoutes);
routes.use("/cargo", cargoRoutes);
routes.use("/membro", membrosRoutes);

export { routes };

