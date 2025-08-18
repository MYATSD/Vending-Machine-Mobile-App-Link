"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import Header from '../../components/Header'
import Container from '@/components/Container'
import { mutate } from 'swr'
import { useRouter } from 'next/navigation'

const StudentCreatePage = () => {
  const {handleSubmit, isSubmitting,register, formState: {errors}} = useForm()
  const router = useRouter()

  const onSubmit = async(formData)=>{
    console.log(formData)
     console.log("creating")
    const res = await fetch(
      "https://studentsinfo-production.up.railway.app/students_info",
      {
        method: "POST",
         headers: {
      "Content-Type": "application/json", 
    },
        body: JSON.stringify(
          {
         "id": Date.now(),
          "name": formData.name,
          "roll_no": formData.roll_no,
          "isLoggedIn": false
        }
        )
        ,
      }
    );

    const data =await res.json()
    console.log(data)
    mutate("https://studentsinfo-production.up.railway.app/students_info")
   
    if(formData.back_to_customer_list){
      router.push("/dashboard/students")
    }

  }
  return (
    <Container>

    <Header/>

      <div className=" w-full">
      <h1 className="text-3xl font-bold mb-3">Create New Student</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-1/3 gap-5">
          <div className="">
            <div className="">
              <label
                htmlFor="name"
                className={`block mb-2 text-sm font-medium ${
                  errors.name ? "text-red-500" : "text-stone-900"
                } dark:text-white`}
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                {...register("name", { required: true })}
                className={`bg-stone-50 border ${
                  errors.name
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-stone-300 focus:ring-pink-500 focus:border-pink-500"
                } text-stone-900 text-sm  block w-full p-2.5`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  Employee Name is required
                </p>
              )}
            </div>
          </div>
          <div className="mt-5">
            <label
              htmlFor="roll_no"
              className={`block mb-2 text-sm font-medium ${
                errors.roll_no ? "text-red-500" : "text-stone-900"
              } dark:text-white`}
            >
             Roll Number
            </label>
            <input
              id="roll_no"
              type="text"
              {...register("roll_no")}
              className={`bg-stone-50 border ${
                errors.roll_no
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-stone-300 focus:ring-pink-500 focus:border-pink-500"
              } text-stone-900 text-sm  block w-full p-2.5`}
            />
            {errors.roll_no && (
              <p className="text-red-500 text-sm mt-1">
               Roll Number is required
              </p>
            )}
          </div>

          
         
          <div className="col-span-full mt-5">
            <div className="flex items-center mb-4">
              <input
                {...register("all_correct")}
                required
                id="all-correct"
                type="checkbox"
                className="w-4 h-4 text-pink-600 bg-stone-100 border-stone-300 focus:ring-pink-500"
              />
              <label
                htmlFor="all-correct"
                className="ml-2 text-sm font-medium text-stone-900"
              >
                Make sure all fields are correct
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                {...register("back_to_customer_list")}
                id="back-to-Customer-list"
                type="checkbox"
                className="w-4 h-4 text-pink-600 bg-stone-100 border-stone-300 focus:ring-pink-500"
              />
              <label
                htmlFor="back-to-Customer-list"
                className="ml-2 text-sm font-medium text-stone-900"
              >
                Back to Customer List after saving
              </label>
            </div>

            <button
              type="button"
              onClick={() => ""}
              className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-stone-900 bg-white  border border-stone-200 hover:bg-stone-100 focus:z-10 focus:ring-4"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="text-white bg-pink-600 disabled:pointer-events-none disabled:opacity-80 inline-flex items-center justify-center gap-3 hover:bg-pink-600 font-medium  text-sm w-full sm:w-auto px-5 py-2.5"
            >
              <span>Save Customer</span>
              {/* {isSubmitting && <ButtonSpinner />} */}
            </button>
          </div>
        </div>
      </form>
    </div>
    </Container>
  )
}

export default StudentCreatePage