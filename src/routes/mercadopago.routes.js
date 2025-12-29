import { Router } from "express";
import { createPreferenceController } from "../controllers/mercadopago.controller.js";

const router = Router();

router.post("/preference", createPreferenceController);

export default router;
