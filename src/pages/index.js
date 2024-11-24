import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h1>E Supermarket</h1>
      <nav>
        <Link href="/category">Category</Link>
        <Link href="/register">Product Registration</Link>
        <Link href="/products">Product Table</Link>
      </nav>
    </div>
  );
}
