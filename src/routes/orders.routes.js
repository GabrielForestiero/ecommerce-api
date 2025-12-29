import express from "express";
import { auth } from "../middlewares/auth.js";       // 👈 ESTE
import { authRequired } from "../middlewares/authRequired.js";
import {
  createOrder,
  getMyOrders
} from "../controllers/orders.controller.js";

const router = express.Router();

// 👇 auth opcional: guest o user
router.post("/", auth, createOrder);

// 👇 solo usuarios
router.get("/my", authRequired, getMyOrders);

export default router;
