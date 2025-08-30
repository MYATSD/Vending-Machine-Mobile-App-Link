import React from 'react'
import AdminProfileSection from '../components/AdminProfileSection'
import DashboardLayout from '../../components/DashboardLayout'
import { Toaster } from 'react-hot-toast'

const AdminProfilePage = () => {
  return (
   <DashboardLayout>

     <AdminProfileSection/>
     <Toaster/>
   </DashboardLayout>
  )
}

export default AdminProfilePage