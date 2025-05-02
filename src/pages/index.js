import Link from "next/link";

export default function HeroBanner() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Image Banner */}
      <div
        className="w-full h-[600px] bg-center bg-cover bg-no-repeat flex items-center justify-center relative"
        style={{ backgroundImage: "url('/download.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" /> {/* Optional overlay */}
        <h1 className="text-white text-4xl md:text-5xl font-bold z-10">
          E Supermarket
        </h1>
      </div>

      {/* Navigation Buttons */}
      <nav className="flex justify-center space-x-6 py-10">
        <Link
          href="/category"
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-md transition"
        >
          Category
        </Link>

        <Link
          href="/register"
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-md transition"
        >
          Product Registration
        </Link>

        <Link
          href="/products"
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-md transition"
        >
          Product Table
        </Link>
      </nav>
    </div>
  );
}
