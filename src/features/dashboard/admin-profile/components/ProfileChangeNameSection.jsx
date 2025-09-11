"use client"

import Container from '@/components/Container'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import useSWR, { mutate } from 'swr'

const ProfileChangeNameSection = () => {
  const router = useRouter()
   const {isSubmitting, handleSubmit, register, formState: {errors}} = useForm()
       const fetcher = (url) => fetch(url).then((res) => res.json());

   const { data, isLoading, error } = useSWR(
    "https://studentsinfo-production-4b64.up.railway.app/admin_info/1",
    fetcher
  );

  const handleChangeProfileInfo =async(formData)=>{
   const toastId = toast.loading("Uploading ....");
      console.log(formData)
     

        
        const res= await fetch(
        `https://studentsinfo-production-4b64.up.railway.app/admin_info/1`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: data.id,
            name: formData.name,
            email: formData.email,
            profile_image: data?.profile_image,
            profile: data?.profile,
            password: data?.new_password,
            password_confirmation: data?.new_password_confirmation,
            isLoggedIn: false,
            admin_id: data?.admin_id
          }),
        }
      );

      if(res.ok){

        toast.success("Profile Info change successfully",{
          id: toastId
        })
     
        mutate("https://studentsinfo-production-4b64.up.railway.app/admin_info/1")
        router.push("/dashboard/admin-profile")
      }
    
   
  }
  return (
  <>
  {isLoading ? (<p>Loading....</p>): ( <Container>


      <section className=" w-full my-20">
      <h1 className="text-3xl font-bold mb-3">Change User Profile info</h1>
      <p className="mb-10 text-stone-500">
        Pick a new name for your account.
      </p>

      <form onSubmit={handleSubmit(handleChangeProfileInfo)}>
        <div className=" grid grid-cols-3">
          <div className=" col-span-1">
            <div className="mb-5">
              <label
                htmlFor="first_name"
                className={`block mb-2 text-sm font-medium ${
                  errors.name ? "text-red-500" : "text-stone-900"
                } dark:text-white`}
              >
               Name <span className=" text-red-500">*</span>
              </label>

              <input
                type="text"
                id="name"
               defaultValue={data.name}
                {...register("name", {
                  required: true,
                })}
                
                className={`bg-stone-50 w-[300px] border ${
                  errors.name
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-stone-300 focus:ring-blue-500 focus:border-blue-500"
                } text-stone-900 text-sm   block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              />
              {errors.name?.type === "required" && (
                <p className=" text-red-500 text-sm mt-1">
                 Name is required
                </p>
              )}
            </div>
            <div className="mb-5">
              <label
                htmlFor="first_name"
                className={`block mb-2 text-sm font-medium ${
                  errors.email ? "text-red-500" : "text-stone-900"
                } dark:text-white`}
              >
              Email<span className=" text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                defaultValue={data.email}
                {...register("email", {
                  required: true,
                })}
                className={`bg-stone-50 w-[300px] border ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-stone-300 focus:ring-blue-500 focus:border-blue-500"
                } text-stone-900 text-sm   block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              />
              {errors.email?.type === "required" && (
                <p className=" text-red-500 text-sm mt-1">
                 Email is required
                </p>
              )}
            </div>
           
            <div className=" col-span-full">
              <div className="flex items-center mb-4">
                <input
                  {...register("all_correct")}
                  required
                  id="all-correct"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-stone-100 border-stone-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-stone-800 focus:ring-2 dark:bg-stone-700 dark:border-stone-600"
                />
                <label
                  htmlFor="all-correct"
                  className="ms-2 text-sm font-medium text-stone-900 dark:text-stone-300"
                >
                  I'm sure to update info.
                </label>
              </div>
            </div>

            <button
              type="button"
              onClick={() => router.push("/dashboard/admin-profile")}
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-stone-900 focus:outline-none bg-white  border border-stone-200 hover:bg-stone-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-stone-100 dark:focus:ring-stone-700 dark:bg-stone-800 dark:text-stone-400 dark:border-stone-600 dark:hover:text-white dark:hover:bg-stone-700"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="text-white  disabled:pointer-events-none disabled:opacity-80 inline-flex items-center justify-center gap-3 hover:bg-blue-400 bg-blue-600 font-medium  text-sm w-full sm:w-auto px-5 py-2.5"
            >
              <span>Update </span>
              {/* {isSubmitting && <ButtonSpinner />} */}
            </button>
          </div>
        </div>
      </form>
    </section>
   </Container>)}
  </>
  )
}

export default ProfileChangeNameSection