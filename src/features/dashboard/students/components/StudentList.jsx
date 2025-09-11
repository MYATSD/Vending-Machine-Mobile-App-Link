"use client"
import { ArrowRight, Trash2 } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import Swal from 'sweetalert2'
import useSWR, { mutate } from 'swr'

const StudentList = ({student: {id,name,roll_no,isLoggedIn},index}) => {
  // console.log(isLoggedIn)
   const fetcher = (url) => fetch(url).then((res) => res.json());

 const {data, isLoading,error,} = useSWR("https://studentsinfo-production-4b64.up.railway.app/students_info",fetcher)
  const handleDeleteBtn = async()=>{
    const toastId = toast.loading("Deleting ....");
    if (!confirm("Are you sure to delete?")) return;


    try {
      const res = await fetch(`https://studentsinfo-production-4b64.up.railway.app/students_info/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      
    }
   )
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.message);
      }
      toast.success(json.message, { id: toastId });
      mutate("https://studentsinfo-production-4b64.up.railway.app/students_info")
    } catch (err) {
      toast.error(err.message, { id: toastId });
      console.error(err);
    }

//    Swal.fire({
//   title: "Are you sure?",
//   text: "You won't be able to revert this!",
//   icon: "warning",
//   showCancelButton: true,
//   confirmButtonColor: "#3085d6",
//   cancelButtonColor: "#d33",
//   confirmButtonText: "Yes, delete it!"
// }).then((result) => {
//   if (result.isConfirmed) {
//    toast({id: toastId})
//   }
// });
  //  const res = await fetch(`https://studentsinfo-production-4b64.up.railway.app/students_info/${id}`,
  //   {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
      
  //   }
  //  )
  //  mutate("https://studentsinfo-production-4b64.up.railway.app/students_info")
  //  if(res.ok){
  //   toast.success("Deleted Successfully",{
  //     id: toastId
  //   })
  //  }

   }
 
  return (
      <tr className=" hover:bg-blue-50">
         <td className="px-6 py-3  ">
          {index +1}
         </td>
         <th
           scope="row"
           className="px-6 py-3 font-medium  text-stone-900 dark:text-white"
         >
           <div className="flex flex-col">
             <span className=" block text-nowrap uppercase">{name}</span>
             <span className=" block  text-stone-500 text-xs">
               
             </span>
           </div>
         </th>
       
        
         <th
           scope="row"
           className="px-6 py-3 text-nowrap font-medium text-stone-900 dark:text-white"
         >
           <span className=" block text-nowrap">{roll_no}</span>
           
         </th>
         <th
           scope="row"
           className="px-6 py-3 text-nowrap font-medium text-stone-900 dark:text-white"
         >
         <span className=" block text-nowrap">{isLoggedIn == true ? "True" : "False"}</span>
         </th>
       
         <td className="px-6 py-3 text-end">
           <div className="inline-flex  shadow-sm" role="group">
             <button
               type="button"
               onClick={handleDeleteBtn}
             
               className="size-10 flex justify-center items-center  bg-white border border-stone-200    hover:bg-stone-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-stone-800 dark:border-stone-700 dark:text-white dark:hover:text-white dark:hover:bg-stone-700 dark:focus:ring-blue-500 dark:focus:text-white"
             >
             
                 <Trash2 className="size-4" />
              
             </button>
             <Link
               href={``}
               className="size-10 flex justify-center items-center  bg-white border border-stone-200    hover:bg-stone-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-stone-800 dark:border-stone-700 dark:text-white dark:hover:text-white dark:hover:bg-stone-700 dark:focus:ring-blue-500 dark:focus:text-white"
             >
               <ArrowRight className="size-4" />
             </Link>
           </div>
         </td>
       </tr>
  )
}

export default StudentList