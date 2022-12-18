import React from "react";
import DashboardNavbar from "../../../components/Dashboard/DashboardNavbar/DashboardNavbar";
import Sidebar from "../../../components/Dashboard/DashboardNavbar/Sidebar";
import CreateBooking from "../../../components/Dashboard/Booking/CreateBooking";

const CreateBookingPage = () => {
  return (
    <div>
      <DashboardNavbar />
      <Sidebar active="booking" />
      <CreateBooking />
    </div>
  );
};

export default CreateBookingPage;
