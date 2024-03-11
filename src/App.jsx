import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login'
import RegisterPage from "./pages/auth/Register";
import Home from "./pages/user/Home";
import About from "./pages/user/About";
import Croploan from "./pages/user/Croploan";
import Farmmech from "./pages/user/Farmmech";
import Landpur from "./pages/user/Landpur";
import Livestk from "./pages/user/Livestk";
import Solarpmp from "./pages/user/Solarpmp";
import  Warehouse  from "./pages/user/Warehse";
import MediaCard from "./pages/user/card";
import Profile from "./pages/user/Profile";
// import Admin from "./pages/admin/Adminpage";

// import LoanStatsBox from "./pages/admin/LoanStatsBox";
import LoanApplicationForm from "./pages/auth/Loanapply";
import Dashboard from "./pages/admin/Dashboard";
import Borrower from "./pages/admin/Borrower";



function App() {
  return (

    <Routes>
      <Route exact path="/" element={<Login />}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path="/register" element={<RegisterPage />}/>
      <Route exact path="/home" element={<Home/>}/>
      <Route export path="/about" element={<About/>}/>
      <Route export path="/croploan" element={<Croploan/>}/>
      <Route path="/farmmech" element={<Farmmech/>}/>
      <Route path="/landpur"  element={<Landpur/>}/>
      <Route path="/livestk" element={<Livestk/>}/>
      <Route path="/solarpmp" element={<Solarpmp/>}/>
      <Route path="/warehse" element={<Warehouse/>}/>
      <Route path="/mediacard" element={<MediaCard/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      {/* // <Route path='/userdet' element={<UserStatsBox/>}/> */}
      {/* <Route path='/loanstats' element={<LoanStatsBox/>}/> */}
      <Route path="loanapply" element={<LoanApplicationForm/>}/>
      <Route path="/borrower" element={<Borrower/>}/>
    </Routes>

  )
}
export default App//////////////////////////////////////