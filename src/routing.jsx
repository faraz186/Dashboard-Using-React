import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Dashboard from "./screens/dashboard";
import Login from "./screens/login";
import Profile from "./screens/profile";
import SignUp from "./screens/signUp";

  export default function AppRouter()
  {
      return(
          <>
          <Router>
                <Routes>
                    <Route path="/" element={<SignUp />}/>
                    <Route path="/signup" element={<SignUp />}/>
                    <Route path="/dashboard/*" element={<Dashboard />}/>
                    <Route path="/profile/:id" element={<Profile />}/>
                    <Route path="/login" element={<Login />}/>
                </Routes>
          </Router>
          </>
      )
  }