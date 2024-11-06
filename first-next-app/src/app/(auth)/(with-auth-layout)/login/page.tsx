"use client";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  return (
    <>
      <h1>Login Page!</h1>
      <button
        onClick={() => router.push("/")}
        // onClick={() => router.back()} // to navigate back
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Home
      </button>
    </>
  );
}
