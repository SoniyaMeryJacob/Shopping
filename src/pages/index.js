// HeroBanner.jsx

export default function HeroBanner() {
  return (
    <div>
      {/* Banner Image Section */}
      <div
        className="w-full h-[400px] bg-center bg-cover bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: "url('/bg.jpeg')" }} // Ensure bg.jpeg is in /public folder
      >
        <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
          E Supermarket
        </h1>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center space-x-6 bg-red-500 py-4 shadow-md">
        <button className="text-white font-semibold hover:underline">Category</button>
        <button className="text-white font-semibold hover:underline">Product Registration</button>
        <button className="text-white font-semibold hover:underline">Product Table</button>
      </div>
    </div>
  );
}
