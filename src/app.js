import express from "express";
import cors from "cors";
import productsRoutes from "./routes/products.routes.js";
import ordersRoutes from "./routes/orders.routes.js";

export default function createApp(prisma) {
  const app = express();

  // 👇 CORS VA ACÁ
  app.use(
    cors({
      origin: "http://localhost:3001",
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

  return app;
}
