import { Router } from "express";
import ProfessionalController from "./controllers/ProfessionalController";

const routes = Router();

routes.get("/professionals/:id", ProfessionalController.index);
routes.get(
  "/professionals/:id/availability",
  ProfessionalController.availability
);

export default routes;
