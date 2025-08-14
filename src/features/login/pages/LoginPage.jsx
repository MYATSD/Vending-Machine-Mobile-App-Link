"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useStudentInfo from "@/store/useStudentInfo";
import Container from "@/components/Container";
import Header from "@/components/Header";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { students_info } = useStudentInfo();
  const handleLogin = async () => {
   
     const res = await fetch("https://studentsinfo-production.up.railway.app/students_info");
     const students = await res.json();
    const currentStudent = students.filter(
      (s) =>
        s.name.toLowerCase() == name.trim().toLowerCase()
    );
    // const currentStudentID = currentStudent[0].id
    const currentStudentRollNo =currentStudent[0]?.roll_no.trim().replace(/[\s:;.-]/g, "").toLowerCase()
    // console.log(currentStudent[0].id)

    if (currentStudentRollNo== rollNo.trim().replace(/[\s:;.-]/g, "").toLowerCase()) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("studentName", name);
      router.push("/download");
    } else {
      setError("Invalid name or roll number.");
    }
  };

  return (
    
    <>
    <Header/>
     <section>
      <div className="relative md:static md:flex md:flex-row gap-10 w-full">
        <div className=" w-full h-screen">
          <img src="/assets/login-photo.jpg" alt="" className=" bg-cover md:bg-none" />
        </div>
        <div className="absolute md:hidden bottom-0 -translate-y-80 translate-x-4  bg-white  mt-20 rounded w-[350px]  p-2 ">
          <h2 className="text-2xl md:text-4xl font-bold md:mb-4 mt-5 md:mt-0 font-title px-4 md:px-0 ">Sanitary Napkin Vending Machine</h2>
       <div className="md:mt-10 w-full md:w-2/3 md:flex md:flex-col justify-center  md:border-gray-500 md:shadow p-5 md:p-10">
          <div className="flex flex-col w-full ">
            <label htmlFor="" className="font-normal text-md">Student Name</label>
             <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border p-2 rounded mb-2  w-full h-10 md:h-14 md:w-96 mt-2"
          />
          </div>
        <div className="flex flex-col w-full mt-5">
          <label htmlFor=""  className="font-normal text-md">Roll Number</label>
          <input
            type="text"
            placeholder="Roll No"
            value={rollNo}
            required
            onChange={(e) => setRollNo(e.target.value)}
            className="border p-2 rounded mb-4 w-full h-10 md:h-14 md:w-96 mt-2"
          />
          {error && <p className="text-red-500 mb-4">{error}</p>}
        </div>
          <button
            onClick={handleLogin}
            className="bg-pink-500 text-white mt-5 h-10 md:h-14 text-xl font-semibold rounded hover:bg-pink-600 w-full md:w-96"
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
         <div className="hidden  bg-white md:bg-none md:flex flex-col mt-20 rounded w-[350px] md:w-full  items-center p-2 md:p-0">
          <h2 className="text-2xl md:text-4xl font-bold md:mb-4 mt-5 md:mt-0 font-title px-4 md:px-0 ">Sanitary Napkin Vending Machine</h2>
       <div className="md:mt-10 w-full md:w-2/3 md:flex md:flex-col justify-center  md:border-gray-500 md:shadow p-5 md:p-10">
          <div className="flex flex-col w-full ">
            <label htmlFor="" className="font-normal text-md">Student Name</label>
             <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded mb-2  w-full h-10 md:h-14 md:w-96 mt-2"
          />
          </div>
        <div className="flex flex-col w-full mt-5">
          <label htmlFor=""  className="font-normal text-md">Roll Number</label>
          <input
            type="text"
            placeholder="Roll No"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            className="border p-2 rounded mb-4 w-full h-10 md:h-14 md:w-96 mt-2"
          />
          {error && <p className="text-red-500 mb-4">{error}</p>}
        </div>
          <button
            onClick={handleLogin}
            className="bg-pink-500 text-white mt-5 h-10 md:h-14 text-xl font-semibold rounded hover:bg-pink-600 w-full md:w-96"
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
    
    </>
  
  );
}
