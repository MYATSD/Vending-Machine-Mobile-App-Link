"use client"
import { ArrowRight, Trash2 } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect } from 'react'

const StudentList = ({student: {id,name,roll_no,isLoggedIn}}) => {
 
  return (
      <tr className=" hover:bg-pink-50">
         <td className="px-6 py-3  ">
          { id}
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
           <span className=" block  text-stone-500 text-xs">
            
           </span>
         </th>
         <th
           scope="row"
           className="px-6 py-3 text-nowrap font-medium text-stone-900 dark:text-white"
         >
         { isLoggedIn}
         </th>
       
         <td className="px-6 py-3 text-end">
           <div className="inline-flex  shadow-sm" role="group">
             <button
               type="button"
             
               className="size-10 flex justify-center items-center  bg-white border border-stone-200    hover:bg-stone-100 hover:text-pink-700 focus:z-10 focus:ring-2 focus:ring-pink-700 focus:text-pink-700 dark:bg-stone-800 dark:border-stone-700 dark:text-white dark:hover:text-white dark:hover:bg-stone-700 dark:focus:ring-pink-500 dark:focus:text-white"
             >
             
                 <Trash2 className="size-4" />
              
             </button>
             <Link
               href={``}
               className="size-10 flex justify-center items-center  bg-white border border-stone-200    hover:bg-stone-100 hover:text-pink-700 focus:z-10 focus:ring-2 focus:ring-pink-700 focus:text-pink-700 dark:bg-stone-800 dark:border-stone-700 dark:text-white dark:hover:text-white dark:hover:bg-stone-700 dark:focus:ring-pink-500 dark:focus:text-white"
             >
               <ArrowRight className="size-4" />
             </Link>
           </div>
         </td>
       </tr>
  )
}

export default StudentList