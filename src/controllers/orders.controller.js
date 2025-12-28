import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function createOrder(req, res) {
  const { items } = req.body;

  if (!items || items.length === 0) {
    return res.status(400).json({ error: "Empty order" });
  }

  // 🔐 VALIDACIÓN REAL
  const products = await prisma.product.findMany({
    where: {
      id: { in: items.map((i) => i.productId) },
    },
  });

  let total = 0;

  const orderItems = items.map((item) => {
    const product = products.find(
      (p) => p.id === item.productId
    );

    if (!product) {
      throw new Error("Invalid product");
    }

    total += product.price * item.quantity;

    return {
      productId: product.id,
      quantity: item.quantity,
      price: product.price,
    };
  });

  const order = await prisma.order.create({
    data: {
      total,
      items: {
        create: orderItems,
      },
    },
  });

  return res.json(order);
}
