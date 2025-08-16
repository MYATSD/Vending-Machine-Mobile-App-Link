import { create } from "zustand";
import { persist } from "zustand/middleware";


const useStudentInfo = create(

    persist((set)=>({
 
      currentAdminInfo: {},
      setCurrentAdmin : (currentAdmin)=>set({currentAdminInfo: currentAdmin})

    }))
)


export default useStudentInfo;