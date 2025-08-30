"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const DashboardLayout = ({children}) => {

      const router = useRouter();
      const [isLoading, setIsLoading] = useState(true);
      const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    //   const autoLogoutIfTokenExpire = async (currentToken) => {
    //     const res = await checkProfile(currentToken);
    //     if (res.status === 401) {
    //       toast.error("Your token has expired, please login again");
    //       logout();
    //     }
    //   };
    
      useEffect(() => {
    
       
    const isLogIn = localStorage.getItem("isAdminLoggedIn") === "true";
setIsLoggedIn(isLogIn);
        if (!isLogIn) {
          router.push("/dashboard");
        } 
        setIsLoading(false);
      },[isLoggedIn]);
    
      if (isLoading) {
        return (
          <div className=" h-screen flex items-center justify-center">
            Loading....
          </div>
        );
      }
    
      
      return <>{children}</>;

}

export default DashboardLayout