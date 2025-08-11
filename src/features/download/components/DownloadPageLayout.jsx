"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DownloadPageLayout({ children }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

//   const autoLogoutIfTokenExpire = async (currentToken) => {
//     const res = await checkProfile(currentToken);
//     if (res.status === 401) {
//       toast.error("Your token has expired, please login again");
//       logout();
//     }
//   };

  useEffect(() => {

    const isLogIn =localStorage.getItem("isLoggedIn")

    if (!isLogIn) {
      router.push("/");
    } 
    setIsLoading(false);
  });

  if (isLoading) {
    return (
      <div className=" h-screen flex items-center justify-center">
        Loading....
      </div>
    );
  }

  
  return <>{children}</>;
}