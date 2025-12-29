import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function createOrder(req, res) {
  try {
    const { items } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ error: "Empty order" });
    }

    // 👇 NUEVO: usuario si está logueado
    const userId = req.user?.id ?? null;

    const products = await prisma.product.findMany({
      where: {
        id: { in: items.map((i) => i.productId) },
      },
    });

    let total = 0;

    const orderItems = items.map((item) => {
      const product = products.find((p) => p.id === item.productId);

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

    // 🧾 ORDEN SIEMPRE PENDING
    const order = await prisma.order.create({
      data: {
        total,
        status: "PENDING",
        userId, // 👈 ACÁ se asocia o queda null
        items: {
          create: orderItems,
        },
      },
    });

    return res.status(201).json({ orderId: order.id });

  } catch (error) {
    console.error("Error creando orden:", error);
    return res.status(500).json({ error: "Error creating order" });
  }
}




export async function getMyOrders(req, res) {
  // requiere auth
  if (!req.user) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  const orders = await prisma.order.findMany({
    where: { userId: req.user.id },
    orderBy: { createdAt: "desc" },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  });

  res.json(orders);
}
