"use client";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { ArrowRight, RotateCcw, Search, Trash2, X } from "lucide-react";
import StudentList from "../components/StudentList";
import Container from "@/components/Container";
import useSWR from "swr";
import Link from "next/link";
import DashboardLayout from "../../components/DashboardLayout";

const StudentPage = () => {
  const [studentsList, setStudentsList] = useState([]);
 const fetcher = (url) => fetch(url).then((res) => res.json());

 const {data, isLoading,error,} = useSWR("https://studentsinfo-production.up.railway.app/students_info",fetcher)
//  setStudentsList(data)
  // const handleCreateBtn = async () => {
  //   console.log("creating")
  //   const res = await fetch(
  //     "https://studentsinfo-production.up.railway.app/students_info",
  //     {
  //       method: "POST",
  //        headers: {
  //     "Content-Type": "application/json", 
  //   },
  //       body: JSON.stringify(
  //         {
  //        "id": Math.random(),
  //         "name": "Oak Kyaw",
  //         "roll_no": "VI EC-Ext:4",
  //         "isLoggedIn": false
  //       }
  //       )
  //       ,
  //     }
  //   );

  //   const data =await res.json()
  //   console.log(data)
  //   setStudentsList(...studentsList, data)

  // };

  return (
    <DashboardLayout>
      <Container>
        <Header />
        <section>
          <div className="flex justify-between mb-5 w-full">
            <div className="flex gap-3 justify-between items-center w-full">
              <div className="relative ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <Search className="w-4 h-4 text-stone-500 dark:text-stone-400" />
                </div>
                <input
                  type="text"
                  className=" w-96 bg-stone-50 border border-stone-300 text-stone-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5  dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              <div>
                <Link href={"/dashboard/students/student-create"} className=" bg-blue-600 text-white  px-4 py-2 rounded" >
                  Create student
                </Link>
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
                    #
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
                    Roll Number
                  </th>

                  <th scope="col" className="px-6 py-5 text-nowrap">
                    Logged In
                  </th>

                  {/* <th scope="col" className="px-6 py-5 text-end">
                <Sortable handleSort={handleSort} sort_by={`created_at`}>
                  Created
                </Sortable>
              </th> */}
                  <th scope="col" className="px-6 py-5 text-end">
                    Action
                  </th>
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
                {data?.map((student,index) => (
                 
                  <StudentList student={student} key={student.id} index={index}/>
                ))}
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
    </DashboardLayout>
  );
};

export default StudentPage;
