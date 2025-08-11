"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useStudentInfo from "@/store/useStudentInfo";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const {students_info} = useStudentInfo()
    console.log(students_info)
  const handleLogin = async () => {
  
    // const res = await fetch("/data.json");
    // const students = await res.json();
    const exists = students_info.map(
      (s) =>
        s.name.toLowerCase() === name.trim().toLowerCase() &&
        s.rollNo === rollNo.trim()
    );

    if (exists) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("studentName", name);
      router.push("/download");
    } else {
      setError("Invalid name or roll number.");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded mb-2 w-64"
      />
      <input
        type="text"
        placeholder="Roll No"
        value={rollNo}
        onChange={(e) => setRollNo(e.target.value)}
        className="border p-2 rounded mb-4 w-64"
      />
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <button
        onClick={handleLogin}
        className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
      >
        Login
      </button>
      <p className="mt-4">
        Don’t have an account?{" "}
        <a href="/register" className="text-blue-500">Register</a>
      </p>
    </main>
  );
}
