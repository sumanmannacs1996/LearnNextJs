import Link from "next/link";

export default function ProductList() {
  return (
    <>
      <h1>
        <Link href="/product/1">Product List</Link>
      </h1>
      <h2>Product 1</h2>
      <h2>Product 2</h2>
      <h2>Product 3</h2>
      <h2>Product 4</h2>
      <h2>Product 5</h2>
    </>
  );
}
