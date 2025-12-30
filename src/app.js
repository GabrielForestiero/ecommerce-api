import express from "express";
import cors from "cors";
import productsRoutes from "./routes/products.routes.js";
import ordersRoutes from "./routes/orders.routes.js";
import mercadopagoRoutes from "./routes/mercadopago.routes.js";
import authRoutes from "./routes/auth.routes.js";

export default function createApp(prisma) {
  const app = express();

  // 👇 CORS VA ACÁ
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN || "http://localhost:3001",
      methods: ["GET", "POST", "PUT", "DELETE"],
    })
  );

  app.use(express.json());

  // 👇 Inyectamos prisma en la request
  app.use((req, _, next) => {
    req.prisma = prisma;
    next();
  });

  app.use("/products", productsRoutes);
  app.use("/orders", ordersRoutes);
  app.use("/api/mercadopago", mercadopagoRoutes);
  app.use("/auth", authRoutes);

  return app;
}
