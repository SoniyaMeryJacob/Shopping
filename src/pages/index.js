// pages/index.js
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner section */}
      <div
        className="w-full h-[300px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/bg.jpeg')" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          E Supermarket
        </h1>
      </div>

      {/* Navigation bar */}
      <nav className="bg-red-500 text-white font-semibold text-center py-4">
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:underline">Category</a>
          <a href="#" className="hover:underline">Product Registration</a>
          <a href="#" className="hover:underline">Product Table</a>
        </div>
      </nav>

      {/* Page Content */}
      <div className="p-6">
        <p className="text-center text-gray-600">Welcome to E Supermarket.</p>
      </div>
    </div>
  );
}
