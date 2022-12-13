import React from 'react'
import DashboardNavbar from '../../../components/Dashboard/DashboardNavbar/DashboardNavbar'
import Sidebar from '../../../components/Dashboard/DashboardNavbar/Sidebar'
import Kelas from '../../../components/Dashboard/Kelas/Kelas'

const KelasPage = () => {
  return (
    <div>
      <DashboardNavbar />
      <Sidebar />
      <Kelas />
    </div>
  )
}

export default KelasPage