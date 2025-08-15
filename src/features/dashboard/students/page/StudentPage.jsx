"use client"
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { ArrowRight, RotateCcw, Search, Trash2, X } from 'lucide-react'
import StudentList from '../components/StudentList'
import Container from '@/components/Container'

const StudentPage = () => {
        const [studentsList ,setStudentsList] = useState([])
          useEffect(() => {
            const fetchData = async () => {
              try {
                const res = await fetch("https://studentsinfo-production.up.railway.app/students_info");
                const students = await res.json();
                setStudentsList(students)
        
              } catch (error) {
                console.error("Error fetching data:", error);
              }
            };
        
            fetchData();
          }, []);
  return (
   <>
   <Container>

    
   <Header/>
      <section>
      <div className="flex justify-between mb-5">
        <div className="flex gap-3">
          <div className="relative ">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <Search className="w-4 h-4 text-stone-500 dark:text-stone-400" />
            </div>
            <input
              type="text"
              className=" w-96 bg-stone-50 border border-stone-300 text-stone-900 text-sm  focus:ring-pink-500 focus:border-pink-500 block ps-10 p-2.5  dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
              placeholder="Search Sale"
            //   onChange={handleSearchInput}
            //   ref={searchRef}
            />
            {/* {searchParams?.get("q") && (
              <div
                className="absolute inset-y-0 end-0 flex items-center pe-3.5 cursor-pointer"
                onClick={clearSearchInput}
              >
                <X className="w-4 h-4 text-stone-500 dark:text-stone-400" />
              </div>
            )} */}
          </div>
        </div>
       
      </div>
      <div className="relative overflow-x-auto shadow-md sm: mb-5">
        <table className="w-full text-sm text-left rtl:text-right text-stone-500 dark:text-stone-400">
          <thead className="text-xs text-stone-700 uppercase bg-stone-100 dark:bg-stone-700 dark:text-stone-400">
            <tr className=" ">
              {/* <th scope="col" className="px-6 py-5">
                <Sortable handleSort={handleSort} sort_by={`eb_no`}>
                  <span className=" text-nowrap">Invoice Number</span>
                </Sortable>
              </th>
              <th scope="col" className="px-6 py-5">
                <Sortable handleSort={handleSort} sort_by={`customer_name`}>
                  Customer
                </Sortable>
              </th> */}
              <th scope="col" className="px-6 py-5">
                id
              </th>
              <th scope="col" className="px-6 py-5">
                Name
              </th>
              {/* <th scope="col" className="px-6 py-5">
                <Sortable handleSort={handleSort} align={"end"} sort_by={`mmk`}>
                  <span className=" text-nowrap">Sellfare (MMK)</span>
                </Sortable>
              </th>
              <th scope="col" className="px-6 py-5">
                <Sortable handleSort={handleSort} align={"end"} sort_by={`usd`}>
                  <span className=" text-nowrap">Sellfare (USD)</span>
                </Sortable>
              </th> */}
             

              {/* <th scope="col" className="px-6 py-5">
                <Sortable
                  handleSort={handleSort}
                  sort_by={`customer_date_of_birth`}
                >
                  <span className=" text-nowrap">Date of Birth</span>
                </Sortable>
              </th> */}

              <th scope="col" className="px-6 py-5 text-nowrap">
                roll no
              </th>

              <th scope="col" className="px-6 py-5 text-nowrap">
               isLoggedIn
              </th>

             

              {/* <th scope="col" className="px-6 py-5 text-end">
                <Sortable handleSort={handleSort} sort_by={`created_at`}>
                  Created
                </Sortable>
              </th> */}
              <th scope="col" className="px-6 py-5 text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* {isLoading ? (
              <SaleSkeletonLoader />
            ) : data?.data?.length === 0 ? (
              <SaleEmptyStage />
            ) : (
              data?.data?.map((sale) => <SaleRow sale={sale} key={sale.id} />)
            )} */}
            {studentsList?.map((student)=> <StudentList student={student}/>)}
          </tbody>
        </table>
      </div>
      {/* {
        <Pagination
          links={data?.links}
          meta={data?.meta}
          handlePaginate={handlePaginate}
          handleLimit={handleLimit}
        />
      } */}
    </section>
    
   </Container>
   </>
  )
}

export default StudentPage