import connectMongo from "../../../lib/mongodb";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  await connectMongo();

  const { id } = req.query;

  if (req.method === "DELETE") {
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json({ message: "Product deleted successfully!" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete product!" });
    }
  } else if (req.method === "PUT") {
    const { name, category, price } = req.body;

    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        id,
        { name, category, price },
        { new: true }
      );
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500).json({ error: "Failed to update product!" });
    }
  } else if (req.method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch product!" });
    }
  }
}
