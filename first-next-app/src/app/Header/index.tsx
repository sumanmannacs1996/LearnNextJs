"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../styles.css";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Login", path: "/login" },
  { name: "Register", path: "/register" },
  { name: "Forgot Password", path: "/forgot-password" },
  { name: "Product", path: "/product" },
  { name: "Docs", path: "/docs" },
];

export default function () {
  const pathname = usePathname();
  return (
    <header
      style={{
        backgroundColor: "lightblue",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <p>Header</p>
      <div>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={
              pathname === link.path ? "font-bold mr-4" : "text-blue-500 mr-4"
            }
          >
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  );
}
