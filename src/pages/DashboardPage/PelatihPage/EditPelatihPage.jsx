import React from 'react'
import DashboardNavbar from '../../../components/Dashboard/DashboardNavbar/DashboardNavbar'
import Sidebar from '../../../components/Dashboard/DashboardNavbar/Sidebar'
import EditPelatih from '../../../components/Dashboard/Pelatih/EditPelatih'

const PelatihPage = () => {
  return (
    <div>
      <DashboardNavbar />
      <Sidebar />
      <EditPelatih />
    </div>
  )
}

export default PelatihPage