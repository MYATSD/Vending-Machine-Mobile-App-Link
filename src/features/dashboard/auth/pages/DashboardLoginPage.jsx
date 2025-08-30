"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useStudentInfo from "@/store/useAdminInfo";
import Container from "@/components/Container";
import Header from "@/components/Header";
import { useForm } from "react-hook-form";
import useSWR, { mutate } from "swr";

export default function DashboardLoginPage() {
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const router = useRouter();
  const { students_info } = useStudentInfo();
  const { handleSubmit, register, isSubmitting } = useForm();
  const { currentAdminInfo, setCurrentAdmin } = useStudentInfo();

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, isLoading, error } = useSWR(
    "https://studentsinfo-production.up.railway.app/admin_info",
    fetcher
  );
  const handleLogin = async (formData) => {
    const currentAdminEmail = formData.email;

    const currentAdmin = data.filter(
      (admin) => admin.email === currentAdminEmail
    );
    const currentAdminId = currentAdmin[0].id;
    const currentAdminName = currentAdmin[0].name;
    const currentAdminProfile = currentAdmin[0].profile;
    const currentAdminProfileImage = currentAdmin[0].profile_image;
    const currentAdminPassword = currentAdmin[0].password;
    const currentAdminPasswordConfirmation = currentAdmin[0].password_confirmation;
    // const current =currentStudent[0]?.roll_no.trim().replace(/[\s:;.-]/g, "").toLowerCase()
    console.log(currentAdmin)
    console.log(formData)

    if (currentAdmin[0].password == formData.password) {
      const res = await fetch(
        `https://studentsinfo-production.up.railway.app/admin_info/${currentAdminId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            admin_id: currentAdminId,
            name: currentAdmin[0]?.name,
            email: currentAdminEmail,
            profile_image: currentAdmin[0]?.profile_image,
            profile: currentAdmin[0]?.profile,
            password: currentAdmin[0]?.password,
            password_confirmation: currentAdmin[0]?.password_confirmation,
            isLoggedIn: true,
          }),
        }
      );
      const data = await res.json();
  
      mutate("https://studentsinfo-production.up.railway.app/admin_info")
      localStorage.setItem("isAdminLoggedIn", true);
      localStorage.setItem("Admin Name", currentAdminName);
      // const currentAdmin = {
      //   name: admin[0].name,
      //   email: admin[0].email,
      //   password: admin[0].password,
      //   profile_image: admin[0].profile_image,
      //   isLoggedIn: true,
      // };
       setCurrentAdmin(currentAdmin[0]);
      router.push("/dashboard/students");
    } else {
    }
  };

  return (
    <>
      <section className="bg-stone-50 dark:bg-stone-900 min-h-svh bg-[url('/images/login-cartoon-img.png')] bg-no-repeat bg-bottom bg-[length:400px_auto] lg:bg-[length:500px_auto] ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-svh lg:py-0">
          <div className="w-full bg-white  shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-stone-800 dark:border-stone-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className=" flex items-end gap-1">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-blue-600  md:text-3xl dark:text-white">
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
                    className="bg-stone-50 border border-stone-300 text-stone-900  focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    className="bg-stone-50 border border-stone-300 text-stone-900  focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                        className="w-4 h-4 text-blue-600 bg-stone-100 border-stone-300   focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-stone-800 focus:ring-2 dark:bg-stone-700 dark:border-stone-600"
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
                    className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-white flex disabled:pointer-events-none disabled:opacity-80 justify-center items-center gap-3 bg-blue-600 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center dark:bg-blue-400 dark:hover:bg-blue-500 dark:focus:ring-blue-600"
                >
                  Sign in
                  {isSubmitting && <p>loading.....</p>}
                </button>
                {/* <p className="text-sm font-light text-stone-500 dark:text-stone-400">
        Don’t have an account yet?{" "}
        <Link
          href="/register"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
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
