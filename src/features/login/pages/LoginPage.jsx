"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useStudentInfo from "@/store/useStudentInfo";
import Container from "@/components/Container";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { students_info } = useStudentInfo();
  console.log(students_info);
  const handleLogin = async () => {
    // const res = await fetch("/data.json");
    // const students = await res.json();
    const exists = students_info.map(
      (s) =>
        s.name.toLowerCase() === name.trim().toLowerCase() &&
        s.rollNo === rollNo.trim().replace(/[\s:;.-]/g, "").toLowerCase()
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
    <section>
      <div className="relative lg:flex lg:flex-row gap-10 w-full">
        <div className=" w-full h-screen">
          <img src="/assets/login-photo.jpg" alt="" className=" bg-cover lg:bg-none" />
        </div>
        <div className="absolute bottom-0 -translate-y-32 translate-x-4 bg-white lg:bg-none lg:flex flex-col mt-20 rounded w-[350px] lg:w-full  items-center p-2 lg:p-0">
          <h2 className="text-2xl lg:text-4xl font-bold lg:mb-4 mt-5 lg:mt-0 font-title px-4 lg:px-0 ">Sanitary Napkin Vending Machine</h2>
       <div className="lg:mt-10 w-full lg:w-2/3 lg:flex lg:flex-col justify-center  lg:border-gray-500 lg:shadow p-5 lg:p-10">
          <div className="flex flex-col w-full ">
            <label htmlFor="" className="font-normal text-md">Student Name</label>
             <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded mb-2  w-full h-10 lg:h-14 lg:w-96 mt-2"
          />
          </div>
        <div className="flex flex-col w-full mt-5">
          <label htmlFor=""  className="font-normal text-md">Roll Number</label>
          <input
            type="text"
            placeholder="Roll No"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            className="border p-2 rounded mb-4 w-full h-10 lg:h-14 lg:w-96 mt-2"
          />
          {error && <p className="text-red-500 mb-4">{error}</p>}
        </div>
          <button
            onClick={handleLogin}
            className="bg-pink-500 text-white mt-5 h-10 lg:h-14 text-xl font-semibold rounded hover:bg-pink-600 w-full lg:w-96"
          >
            Login
          </button>
          {/* <p className="mt-4">
            Don’t have an account?{" "}
            <a href="/register" className="text-blue-500">
              Register
            </a>
          </p> */}
       </div>
        </div>
      </div>
    </section>
  );
}
