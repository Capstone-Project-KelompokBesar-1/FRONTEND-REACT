import React from 'react'
import DashboardNavbar from '../../../components/Dashboard/DashboardNavbar/DashboardNavbar'
import Sidebar from '../../../components/Dashboard/DashboardNavbar/Sidebar'
import EditKelas from '../../../components/Dashboard/Kelas/EditKelas'

const EditKelasPage = () => {
  return (
    <div>
      <DashboardNavbar />
      <Sidebar />
      <EditKelas />
    </div>
  )
}

export default EditKelasPage