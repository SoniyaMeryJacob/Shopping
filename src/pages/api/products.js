import connectMongo from "../../lib/mongodb";
import Product from "../../models/Product";

export default async function handler(req, res) {
  await connectMongo(); // Make sure MongoDB connection is established

  // Handle GET request to fetch products
  if (req.method === "GET") {
    try {
      const products = await Product.find(); // Retrieve products from MongoDB
      return res.status(200).json(products); // Respond with products
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to fetch products" }); // Handle DB fetch errors
    }
  }

  // Handle POST request to create new products (if necessary)
  if (req.method === "POST") {
    const { name, category, price } = req.body;
    if (!name || !category || !price) {
      return res.status(400).json({ error: "Missing required fields" }); // Ensure all fields are provided
    }
    try {
      const newProduct = new Product({ name, category, price });
      await newProduct.save();
      return res.status(201).json(newProduct); // Respond with created product
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to create product" }); // Handle DB save errors
    }
  }

  // Handle DELETE request to delete a product (if necessary)
  if (req.method === "DELETE") {
    const { id } = req.query;
    if (!id) {
      return res.status(400).json({ error: "Product ID is required" });
    }
    try {
      await Product.findByIdAndDelete(id); // Delete product by ID
      return res.status(200).json({ message: "Product deleted" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to delete product" }); // Handle delete errors
    }
  }

  // Handle other HTTP methods
  return res.status(405).json({ error: "Method Not Allowed" });
}
