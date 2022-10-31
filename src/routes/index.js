import { Router } from "express";
import { cargoRoutes } from "./cargo.routes.js";
import { graduacaoRoutes } from "./graduacoes.routes.js";
import { sedeRoutes } from "./sede.routes.js";

const routes = Router();

routes.use("/sede", sedeRoutes);
routes.use("/cargo", cargoRoutes);
routes.use("/graduacao", graduacaoRoutes);

export { routes };

