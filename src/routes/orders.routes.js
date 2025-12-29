import express from "express";
import {
  createOrder,
  createOrderFromMP,
} from "../controllers/orders.controller.js";

const router = express.Router();

// flujo normal
router.post("/", createOrder);

// flujo Mercado Pago
router.post("/from-mp", createOrderFromMP);

export default router;
