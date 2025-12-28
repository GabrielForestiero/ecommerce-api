import {
  getAllProducts,
  getProductById,
} from "../services/products.service.js";

export async function getProducts(req, res) {
  const products = await getAllProducts(req.prisma);
  res.json(products);
}

export async function getProduct(req, res) {
  const { id } = req.params;

  const product = await getProductById(req.prisma, id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
}
