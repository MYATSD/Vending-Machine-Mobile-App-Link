"use client"
import Container from '@/components/Container'
import React from 'react'
import { useForm } from 'react-hook-form'

const ProfileChangeImageSection = () => {
    const {isSubmitting, handleSubmit, register, formState: {errors}} = useForm()
    const handleCancel = ()=>{
        console.log("cancel")
    }
    const handleChangeImage = ()=>{


    }
  return (
    <Container>


        <section className=" w-full my-10">
      <h1 className="text-3xl font-bold mb-3">Change User Image</h1>
      <p className="mb-10 text-stone-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At alias
        necessitatibus quos earum itaque.
      </p>
      <form onSubmit={handleSubmit(handleChangeImage)}>
        <div className=" grid grid-cols-3">
          <div className=" col-span-1">
            <div className="mb-5">
              <label
                htmlFor="profile_image"
                className={`block mb-2 text-sm font-medium ${
                  errors.profile_image ? "text-red-500" : "text-stone-900"
                } dark:text-white`}
              >
                Change Image <span className=" text-red-500">*</span>
              </label>
{/* 
              <ProfileUploadInputImage
                inputName="profile_image"
                register={register}
                setValue={setValue}
                required={true}
                uploadUrl={galleryApiUrl}
                defaultValue={account.profile_image}
                errors={errors}
              /> */}

              {errors.profile_image && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.profile_image.type === "required" &&
                    "Profile image is required"}
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
                  Make sure all field are correct
                </label>
              </div>
            </div>
            <button
              type="button"
              onClick={handleCancel}
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-stone-900 focus:outline-none bg-white  border border-stone-200 hover:bg-stone-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-stone-100 dark:focus:ring-stone-700 dark:bg-stone-800 dark:text-stone-400 dark:border-stone-600 dark:hover:text-white dark:hover:bg-stone-700"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="text-white bg-blue-600 disabled:pointer-events-none disabled:opacity-80 inline-flex items-center justify-center gap-3 hover:bg-blue-600 font-medium  text-sm w-full sm:w-auto px-5 py-2.5"
            >
              <span>Change Image</span>
              {/* {isSubmitting && <ButtonSpinner />} */}
            </button>
          </div>
        </div>
      </form>
    </section>
    </Container>
  )
}

export default ProfileChangeImageSection