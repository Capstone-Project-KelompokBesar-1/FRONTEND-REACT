import React from 'react'
import DashboardNavbar from '../../../components/Dashboard/DashboardNavbar/DashboardNavbar'
import Sidebar from '../../../components/Dashboard/DashboardNavbar/Sidebar'
import MainMenu from '../../../components/Dashboard/MainMenu/MainMenu'

const MainPage = () => {
  return (
    <div>
      <DashboardNavbar />
      <Sidebar />
      <MainMenu />
    </div>
  )
}

export default MainPage