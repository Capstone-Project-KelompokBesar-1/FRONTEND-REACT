import React from 'react'
import DashboardNavbar from '../../components/Dashboard/DashboardNavbar/DashboardNavbar'
import Kelas from '../../components/Dashboard/Kelas/Kelas'
import Sidebar from '../../components/Dashboard/DashboardNavbar/Sidebar'
import Transaksi from '../../components/Dashboard/Transaksi/Transaksi'

const Dashboard = () => {
  return (
    <div>
      <DashboardNavbar />
      <Sidebar />
      {/* <Transaksi /> */}
    </div>
  )
}

export default Dashboard