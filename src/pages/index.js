import Link from "next/link";


export default function Home() {
  return (
    <div>
    <h2>E Supermarket</h2>
      <nav>
        <Link href="/category">Category</Link>
        <Link href="/register">Product Registration</Link>
        <Link href="/products">Product Table</Link>
      </nav>
    </div>
  );
}



