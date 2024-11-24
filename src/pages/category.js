import { useState } from "react";

export default function Category() {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/category", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });

    if (res.ok) {
      alert("Category added successfully!");
      setName(""); // Clear input after successful submission
    } else {
      alert("Error adding category!");
    }
  };
  return (
    <div className="container">
      <h1>Add a New Category</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter category name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
