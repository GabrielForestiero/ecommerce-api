import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import createApp from "./app.js";

const prisma = new PrismaClient();
const app = createApp(prisma);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 API running on port ${PORT}`);
});
