import connectMongo from "../../lib/mongodb";
import Category from "../../models/Category";

export default async function handler(req, res) {
  await connectMongo();

  switch (req.method) {
    case "POST":
      const { name } = req.body;
      if (!name) {
        return res.status(400).json({ error: "Category name is required" });
      }
      try {
        const category = new Category({ name });
        await category.save();
        return res.status(201).json(category);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to create category" });
      }

    case "GET":
      try {
        const categories = await Category.find();
        return res.status(200).json(categories);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to fetch categories" });
      }
  } // Closing brace for the switch statement
} // Closing brace for the handler function
