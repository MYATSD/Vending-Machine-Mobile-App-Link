import React from 'react'

const LoginForm = () => {

<section className="bg-stone-50 dark:bg-stone-900 min-h-svh bg-[url('/assets/bg-photo.jpg')] bg-no-repeat bg-[length:700px_auto] lg:bg-[length:500px_auto] ">
      <div className="flex flex-col items-center md:justify-center px-6 py-40 md:py-8  mx-auto min-h-svh lg:py-0">
        <div className="w-full bg-white  shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-stone-800 dark:border-stone-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className=" flex items-end gap-1">
             
              <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-3xl dark:text-white">
                Welcome
              </h1>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  return (

<form className="max-w-sm sm:mx-auto my-20 mx-5 ">
  <div className="mb-5">
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
    <input type="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
  </div>
  <div className="mb-5">
    <label htmlFor="rollNo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your rollNo</label>
    <input type="rollNo" id="rollNo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input id="remember" type="checkbox" defaultValue className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

  )
}

export default LoginForm