"use client";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentAdminInfo ,setCurrentAdminInfo] = useState({})
   const adminName = localStorage.getItem("Admin Name");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://studentsinfo-production.up.railway.app/admin_info");
        const adminInfo = await res.json();
        console.log(adminInfo)

       
        const foundAdmin = adminInfo?.filter(
          (admin) => admin.name === adminName
        );

        if (foundAdmin) {
          setIsAdmin(true);
          setCurrentAdminInfo(foundAdmin[0])
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // run only once
 console.log(currentAdminInfo)
 
  return (
    <>
      {isAdmin && (
        <header className="mb-5 py-3 border-b border-stone-200 sticky top-0 z-50 bg-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="flex items-end gap-3">
                <img src={`/assets/Menstruation.png`} className="h-12" alt="" />
                <h1 className="text-xl hidden sm:block font-bold leading-tight tracking-tight text-stone-900 md:text-3xl dark:text-white">
                  Vending Machine
                </h1>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <img
                src={currentAdminInfo?.profile_image ? currentAdminInfo.profile_image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"}
                alt="account photo"
                className="border-2 border-white shadow-sm size-8 rounded-full object-cover object-top"
              />
              <div>
                <p className="font-bold">{currentAdminInfo?.name}</p>
                <p className="text-sm text-stone-500">{currentAdminInfo?.email}</p>
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;