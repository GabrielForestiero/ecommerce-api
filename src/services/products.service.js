export async function getAllProducts(prisma) {
  return prisma.product.findMany();
}

export async function getProductById(prisma, id) {
  return prisma.product.findUnique({
    where: { id },
  });
}
