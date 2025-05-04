import { useState } from "react";
import Link from "next/link";

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
      setName("");
    } else {
      alert("Error adding category!");
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-100 flex items-center justify-center">
      
    {/* 🏠 Home Button fixed at top-left */}
    <Link href="/">
      <button className="absolute top-4 left-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md">
        🏠 Home
      </button>
    </Link>
    <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6">Add a New Category</h1>


        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter category name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded shadow-md transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}
