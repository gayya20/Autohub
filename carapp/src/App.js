import './App.css';
import React, { useState, useEffect } from 'react';

import { useAuthContext } from "@asgardeo/auth-react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About.js';
import Home from './components/HomePage.js';
import Contacus from './components/Contacus.js';
import UserDshboard from './components/Dashboard.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
// import AdminDasboard from "../src/pages/admin/Home.js"
import AdminDasboard from "../src/pages/admin/SideBar.jsx"




function App() {  

  const { state, signIn, signOut, getBasicUserInfo, getAccessToken } = useAuthContext();
  const root = ReactDOM.createRoot(document.getElementById('root'));
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    if (state.isAuthenticated) {
      getBasicUserInfo()
        .then((userInfo) => {
          setUserRole(userInfo.applicationRoles);

        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [state.isAuthenticated, getBasicUserInfo]);


  return (
    <div>
    {/* <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path="/" element={<HomePage/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/contacus" element={<Contacus/>}/>

        
      </Routes>
    </BrowserRouter>      */}


     {state.isAuthenticated ? (
        userRole === "Admin" ? (
          <AdminDasboard />
        ) : userRole === "User" ? (
          <UserDshboard />
        ) : userRole === "HouseOwner" ? (
          <UserDshboard />
        ) : (
          <Home/>
        )
      ) : (
        <Home/>
      )}

    </div>
  );
}

export default App;
