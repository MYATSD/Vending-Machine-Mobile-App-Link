"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useStudentInfo from "@/store/useAdminInfo";
import Container from "@/components/Container";
import Header from "@/components/Header";
import { useForm } from "react-hook-form";

export default function DashboardLoginPage() {
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { students_info } = useStudentInfo();
  const { handleSubmit, register, isSubmitting } = useForm();
  const {currentAdminInfo ,setCurrentAdmin}         = useStudentInfo()
  console.log(currentAdminInfo)
  const handleLogin = async (data) => {
    console.log(data)
    const res = await fetch(
      "https://studentsinfo-production.up.railway.app/admin_info"
    );
    const admin = await res.json();
    console.log(admin);
     const currentAdminEmail =  admin[0].email.toLowerCase() == data.email.trim().toLowerCase()? admin[0].email: ""
  
     const currentAdminPassword= admin[0].password
    // const current =currentStudent[0]?.roll_no.trim().replace(/[\s:;.-]/g, "").toLowerCase()
    // console.log(currentStudent[0].id)

        if (currentAdminPassword== data.password.trim().replace(/[\s:;.-]/g, "").toLowerCase()) {
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("Admin Name", admin[0].name);
          const currenAdmin = { name : admin[0].name,
            email: admin[0].email,
            password: admin[0].password,
            profile_image: admin[0].profile_image,
            isLoggedIn: true
          }
          setCurrentAdmin(currenAdmin)
          router.push("/dashboard/students");
        } else {
          setError("Invalid name or roll number.");
        }
  };

  return (
    <>
     
      <section className="bg-stone-50 dark:bg-stone-900 min-h-svh bg-[url('/images/login-cartoon-img.png')] bg-no-repeat bg-bottom bg-[length:400px_auto] lg:bg-[length:500px_auto] ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-svh lg:py-0">
          <div className="w-full bg-white  shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-stone-800 dark:border-stone-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className=" flex items-end gap-1">
               
                <h1 className="text-xl font-bold leading-tight tracking-tight text-pink-600  md:text-3xl dark:text-white">
                  Sanitary Napkin Vending Machine Dashboard
                </h1>
              </div>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(handleLogin)}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-stone-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    autoComplete="email"
                    id="email"
                    className="bg-stone-50 border border-stone-300 text-stone-900  focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-stone-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    {...register("password")}
                    id="password"
                    autoComplete="current-password"
                    placeholder="••••••••"
                    className="bg-stone-50 border border-stone-300 text-stone-900  focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-pink-600 bg-stone-100 border-stone-300   focus:ring-pink-500 dark:focus:ring-pink-600 dark:ring-offset-stone-800 focus:ring-2 dark:bg-stone-700 dark:border-stone-600"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ms-2 text-sm font-medium text-stone-900 dark:text-stone-300"
                      >
                        Remember Me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-pink-600 hover:underline dark:text-pink-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-white flex disabled:pointer-events-none disabled:opacity-80 justify-center items-center gap-3 bg-pink-600 hover:bg-pink-400 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium  text-sm px-5 py-2.5 text-center dark:bg-pink-400 dark:hover:bg-pink-500 dark:focus:ring-pink-600"
                >
                  Sign in
                  {isSubmitting && <p>loading.....</p>}
                </button>
                {/* <p className="text-sm font-light text-stone-500 dark:text-stone-400">
        Don’t have an account yet?{" "}
        <Link
          href="/register"
          className="font-medium text-pink-600 hover:underline dark:text-pink-500"
        >
          Sign up
        </Link>
      </p> */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
