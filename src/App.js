import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, {useState} from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Homepage';
import DropIn from './pages/DropIn';
import CourtRental from './pages/CourtRental';
import Profile from './pages/Profile';
import MembershipPlans from './pages/MembershipPlans';
import MyBookings from './pages/MyBookings';
import MySchedules from './pages/MySchedules';
import Career from './pages/Career';
import Login from './Admin/login';
import Dashboard from './Admin/dashboard';
import Booking2 from './Admin/booking-list-2';
import Booking3 from './Admin/booking-list-3';
import Booking5 from './Admin/booking-list-5';
import Booking6 from './Admin/booking-list-6';
import Booking8 from './Admin/booking-list-8';
import Booking9 from './Admin/booking-list-9';
import Booking10 from './Admin/booking-list-10';
import Membership from './Admin/membership';
import Head from './Admin/head';
import Side from './Admin/side';
import GoToTop from "./components/GoToTop";
import Sidebar from "./components/Sidebar";
import ToolBar from './pages/ToolBar';
import Backdrop from './pages/Backdrop';

function App() {

  const[sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState)
  }

  return (
    <>
    {/* <Sidebar> */}
    {/* <ToolBar openSidebar = {toggleSidebar} /> */}
    {/* <Backdrop sidebar={sidebar} closeSidebar = {toggleSidebar}/> */}
    {/* <Sidebar sidebar={sidebar}/> */}
    <Router>
      <div className="App">
        <Header />
            <Routes>
              <Route index path="/" element={<Home />} />            
              <Route path="/DropIn" element={<DropIn />} />
              <Route path="/CourtRental" element={<CourtRental />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/MembershipPlans" element={<MembershipPlans />} />
              <Route path="/MyBookings" element={<MyBookings />} />
              <Route path="/MySchedules" element={<MySchedules />} />
              <Route path="/Career" element={<Career />} />
              <Route path="/Admin" element={<Login />} />
              <Route path="/Admin/Dashboard" element={<Dashboard />} />
              <Route path="/Admin/Booking2" element={<Booking2 />} />
              <Route path="/Admin/Booking3" element={<Booking3 />} />
              <Route path="/Admin/Booking5" element={<Booking5 />} />
              <Route path="/Admin/Booking6" element={<Booking6 />} />
              <Route path="/Admin/Booking8" element={<Booking8 />} />
              <Route path="/Admin/Booking9" element={<Booking9 />} />
              <Route path="/Admin/Booking10" element={<Booking10 />} />
              <Route path="/Admin/Membership" element={<Membership />} />
              <Route path="/Admin/Head" element={<Head />} />
              <Route path="/Admin/Side" element={<Side />} /> 
            </Routes>
          <GoToTop />
        <Footer />
      </div>
    </Router>
    {/* </Sidebar> */}
    <Router>

    </Router>
    </>
  );
}

export default App;
