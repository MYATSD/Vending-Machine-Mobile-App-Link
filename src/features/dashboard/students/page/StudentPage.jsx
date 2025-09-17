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

 const {data, isLoading,error,} = useSWR("https://studentsinfo-production-4b64.up.railway.app/students_info",fetcher)


  return (
    <DashboardLayout>
      <Container>
        <Header />
        <section>
          <div className="flex justify-between mb-5 w-full">
            <div className="flex gap-3 justify-end items-center w-full">
              
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
