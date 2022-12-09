import React from 'react'
import DashboardNavbar from '../components/Dashboard/DashboardNavbar'
import Kelas from '../components/Dashboard/Kelas/Kelas'
import Sidebar from '../components/Dashboard/Sidebar'

const Dashboard = () => {
  return (
    <div>
      <DashboardNavbar />
      <Sidebar />
      <Kelas />
    </div>
  )
}

export default Dashboard