"use client"
import Container from '@/components/Container';
import { LogOut, LucideCircle, LucideCircleAdmin, LucideInfo, LucideKeySquare, Pencil } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'
import useSWR, { mutate } from 'swr';

const AdminProfileSection = () => {
  const router = useRouter()
    const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, isLoading, error } = useSWR(
    "https://studentsinfo-production.up.railway.app/admin_info",
    fetcher
  );

  const handleLogout =async()=>{
    console.log("logout")
       
    const res = await fetch(
        `https://studentsinfo-production.up.railway.app/admin_info/1`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: data[0].id,
            name: data[0]?.name,
            email: data[0].email,
            profile_image: data[0]?.profile_image,
            profile: data[0]?.profile,
            password: data[0]?.password,
            password_confirmation: data[0]?.password_confirmation,
            isLoggedIn: false,
            admin_id: data[0].admin_id
          }),
        }
      );
    console.log(res)
     mutate("https://studentsinfo-production.up.railway.app/admin_info")
      localStorage.clear()
       router.push("/dashboard")
    //  localStorage.removeItem("Admin Name")
    // localStorage.removeItem("isAdminLoggedIn")
    // localStorage.removeItem("isLoggedIn")
    // localStorage.removeItem("studentName")


  }
  return (
<>

{isLoading ? <p>Loading.....</p> : (   <Container>
       <section className=" w-full space-y-8 my-5">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold mb-5">Update Admin Profile</h1>
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/admin-profile/change-password"
            type="button"
            className=" flex gap-2 text-nowrap items-center justify-center  bg-white px-4 py-2 text-sm font-medium border borer-[#E4E4E7] hover:bg-stone-100 hover:text-blue-600  focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-stone-800 dark:border-stone-700 dark:text-white dark:hover:text-white dark:hover:bg-stone-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <LucideKeySquare /> Change Password
          </Link>
          <Link
            href="/dashboard/admin-profile/change-name"
            type="button"
            className=" flex gap-2 text-nowrap items-center justify-center  bg-white px-4 py-2 text-sm font-medium border borer-[#E4E4E7] hover:bg-stone-100 hover:text-blue-600  focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-stone-800 dark:border-stone-700 dark:text-white dark:hover:text-white dark:hover:bg-stone-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <Pencil /> Change Name
          </Link>
          <button onClick={handleLogout} className=" flex gap-2 text-nowrap items-center justify-center  bg-white px-4 py-2 text-sm font-medium border borer-[#E4E4E7] hover:bg-stone-100 hover:text-blue-600  focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-stone-800 dark:border-stone-700 dark:text-white dark:hover:text-white dark:hover:bg-stone-700 dark:focus:ring-blue-500 dark:focus:text-white">
            <LogOut /> Log out
          </button>
        </div>
      </div>
      <div className=" relative inline-block">
        <img
          className=" size-[120px] rounded-full object-contain border-2 border-black"
          src={
            data[0]?.profile_image
              ? data[0]?.profile_image
              : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
          }
          alt="admin photo"
        />

        {/* <UpdateProfileImageButton /> */}
      </div>

      {/* admin information card */}
      <div className=" p-6 max-w-lg  border  space-y-4.5">
        <div className="flex items-center gap-2">
          <LucideInfo className="size-5 text-black  " />
          <h4 className="font-medium text-lg">Personal Information</h4>
        </div>
        <div className="space-y-5 mt-5">
          <dl className=" flex  items-center">
            <dt className="text-stone-500 w-[150px] text-sm  dark:text-white">
              Admin Name
            </dt>
            <dd className="text-sm dark:text-stone-400">Admin</dd>
          </dl>
          <dl className=" flex  items-center">
            <dt className="text-stone-500 w-[150px] text-sm dark:text-white">
              Email Address
            </dt>
            <dd className="text-sm dark:text-stone-400">admin@gmail.com</dd>
          </dl>
          
        </div>
      </div>
      {/* <div className="flex item-center gap-1.5">
        <div>
          <span className="text-xs mb-2">Registered at</span>
          <p className="text-base font-semibold ">
            {formattedDate(created_at)}
          </p>
        </div>
      </div> */}
    </section>
   </Container>)}
  
</>
)
}

export default AdminProfileSection