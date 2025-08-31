"use client";
import useAdminInfo from "@/store/useAdminInfo";
import Link from "next/link";
import React, { useState } from "react";
import useSWR from "swr";

const Header = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, isLoading, error } = useSWR(
    "https://studentsinfo-production.up.railway.app/admin_info",
    fetcher
  );
  
  //  const {currentAdminInfo} = useAdminInfo()
  //  console.log(currentAdminInfo)

//  console.log(currentAdminInfo)
 
return (
  <>
  {isLoading ? <p>Loading...</p> : data[0]?.isLoggedIn && (
  <header className="mb-5 py-3 border-b border-stone-200 sticky top-0 z-50 bg-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="flex items-end gap-3">
                {/* <img src={`/assets/Menstruation.png`} className="h-12" alt="" /> */}
                <h1 className="text-xl hidden sm:block font-bold leading-tight tracking-tight text-stone-900 md:text-3xl dark:text-white">
                  Admin Dashboard
                </h1>
              </div>
            </div>
            <Link href="/dashboard/admin-profile" className="flex gap-3 items-center">
              <img
                src={data[0]?.profile_image ? data[0].profile_image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"}
                alt="account photo"
                className="border-2 border-white shadow-sm size-8 rounded-full object-cover object-top"
              />
              <div>
                <p className="font-bold">{data[0]?.name}</p>
                <p className="text-sm text-stone-500">{data[0]?.email}</p>
              </div>
            </Link>
          </div>
        </header>
 )}
  
  </>
  
 
)
};

export default Header;