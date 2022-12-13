import React from 'react'
import DashboardNavbar from '../../../components/Dashboard/DashboardNavbar/DashboardNavbar'
import Sidebar from '../../../components/Dashboard/DashboardNavbar/Sidebar'
import EditBooking from '../../../components/Dashboard/Booking/EditBooking'

const BookingPage = () => {
  return (
    <div>
      <DashboardNavbar />
      <Sidebar />
      <EditBooking />
    </div>
  )
}

export default BookingPage