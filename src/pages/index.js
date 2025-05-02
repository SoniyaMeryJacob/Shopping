// HeroBanner.jsx

export default function HeroBanner() {
  return (
    <div>
      {/* Banner Image Section */}
      <div
        className="w-full h-[600px] bg-center bg-cover bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: "url('/Screenshot_20221207_111257.png')" }} // Ensure bg.jpeg is in /public folder
      >
        <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
          E Supermarket
        </h1>
      </div>

      {/* Navigation Buttons */}
      <nav className="flex justify-center space-x-6">
          <Link
            href="/category"
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md transition"
          >
            Category
          </Link>

          <Link
            href="/register"
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md transition"
          >
            Product Registration
          </Link>

          <Link
            href="/products"
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md transition"
          >
            Product Table
          </Link>
        </nav>
    </div>
  );
}
