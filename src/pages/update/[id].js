import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function UpdateProduct() {
  const [product, setProduct] = useState(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [categories, setCategories] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function fetchData() {
      if (!id) return;

      const res = await fetch(`/api/products/${id}`);
      const productData = await res.json();
      setProduct(productData);
      setName(productData.name);
      setCategory(productData.category);
      setPrice(productData.price);

      // Fetch categories
      const categoryRes = await fetch("/api/category");
      const categoriesData = await categoryRes.json();
      setCategories(categoriesData);
    }
    fetchData();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, category, price }),
    });

    if (res.ok) {
      alert("Product updated successfully!");
      router.push("/products");
    } else {
      alert("Failed to update the product!");
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>Update Product</h1>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product Name"
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select a Category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
