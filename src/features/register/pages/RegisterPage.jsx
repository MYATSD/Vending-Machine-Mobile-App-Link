"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    const res = await fetch("http://localhost:5000/students_info");
    const students = await res.json();
    console.log(students)
    const exists = students.map(
      (s) =>
        s.name.toLowerCase() === name.trim().toLowerCase() &&
        s.rollNo === rollNo.trim()
    );

    if (exists) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("studentName", name);
      router.push("/download");
    } else {
      setError("You are not in the student list.");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
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
        onClick={handleRegister}
        className="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600"
      >
        Login
      </button>
      {/* <p className="mt-4">
        Already have an account?{" "}
        <a href="/login" className="text-blue-500">Login</a>
      </p> */}
    </main>
  );
}
