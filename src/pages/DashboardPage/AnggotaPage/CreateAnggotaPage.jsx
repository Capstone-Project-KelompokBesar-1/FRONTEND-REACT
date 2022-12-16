import React from 'react'
import DashboardNavbar from '../../../components/Dashboard/DashboardNavbar/DashboardNavbar'
import Sidebar from '../../../components/Dashboard/DashboardNavbar/Sidebar'
import CreateAnggota from '../../../components/Dashboard/Anggota/CreateAnggota'

const CreateAnggotaPage = () => {
  return (
    <div>
      <DashboardNavbar />
      <Sidebar />
      <CreateAnggota />
    </div>
  )
}

export default CreateAnggotaPage