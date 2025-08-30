import React from 'react'

const ProfileChangeNameSection = () => {
  return (
     <section className=" w-full">
      <h1 className="text-3xl font-bold mb-3">Change User Name</h1>
      <p className="mb-10 text-stone-500">
        Pick a new name for your account.
      </p>

      <form onSubmit={handleSubmit(handleName)}>
        <div className="w-full grid grid-cols-3 gap-x-5 gap-y-3">
          <div className=" col-span-1">
            <div className="mb-5 ">
              <label
                htmlFor="first_name"
                className={`block mb-2 text-sm font-medium ${
                  errors.name ? "text-red-500" : "text-stone-900"
                } dark:text-white`}
              >
                Update Your Name <span className=" text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("name", {
                  required: true,
                })}
                className={`bg-stone-50 w-[300px] border ${
                  errors.name
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-stone-300 focus:ring-pink-500 focus:border-pink-500"
                } text-stone-900 text-sm   block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500`}
              />
              {errors.name?.type === "required" && (
                <p className=" text-red-500 text-sm mt-1">
                  Your name is required
                </p>
              )}
            </div>
            <div className=" col-span-full">
              <div className="flex items-center mb-4 ">
                <input
                  {...register("all_correct")}
                  required
                  id="all-correct"
                  type="checkbox"
                  className="w-4 h-4 cursor-pointer text-pink-600 bg-stone-100 border-stone-300 focus:ring-pink-500"
                />
                <label
                  htmlFor="all-correct"
                  className="ml-2 text-sm cursor-pointer font-medium text-stone-900"
                >
                  Make sure  field is correct
                </label>
              </div>
            </div>
            <button
              type="button"
              onClick={handleCancel}
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-stone-900 focus:outline-none bg-white  border border-stone-200 hover:bg-stone-100 hover:text-pink-700 focus:z-10 focus:ring-4 focus:ring-stone-100 dark:focus:ring-stone-700 dark:bg-stone-800 dark:text-stone-400 dark:border-stone-600 dark:hover:text-white dark:hover:bg-stone-700"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="text-white  disabled:pointer-events-none disabled:opacity-80 inline-flex items-center justify-center gap-3 hover:bg-pink-400 bg-pink-600 font-medium  text-sm w-full sm:w-auto px-5 py-2.5"
            >
              <span>Change Name</span>
              {isSubmitting && <ButtonSpinner />}
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default ProfileChangeNameSection