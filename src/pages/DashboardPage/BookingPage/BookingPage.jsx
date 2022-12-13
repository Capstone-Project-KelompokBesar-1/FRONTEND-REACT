import React from 'react'
import DashboardNavbar from '../../../components/Dashboard/DashboardNavbar/DashboardNavbar'
import Sidebar from '../../../components/Dashboard/DashboardNavbar/Sidebar'
import Booking from '../../../components/Dashboard/Booking/Booking'

const BookingPage = () => {
  return (
    <div>
      <DashboardNavbar />
      <Sidebar />
      <Booking />
    </div>
  )
}

export default BookingPage