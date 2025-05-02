import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl text-center">
      <Image
  src="/bg.jpeg"
  alt="Supermarket"
  width={800}
  height={400}
  className="rounded-md mb-6 mx-auto"
/>
        <h1 className="text-4xl font-bold text-gray-800 mb-6">E Supermarket</h1>
        <nav className="flex justify-center space-x-6">
          <Link href="/category" className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md transition">
            Category
          </Link>
          <Link href="/register" className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md transition">
            Product Registration
          </Link>
          <Link href="/products" className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md transition">
            Product Table
          </Link>
        </nav>
      </div>
    </div>
  );
}
