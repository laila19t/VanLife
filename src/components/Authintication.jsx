import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

export default function Authintication(){
    const authinticated = localStorage.getItem("loggedin")
    const location = useLocation()

    if(!authinticated){
        return <Navigate to="/login" 
         state={{message: "You must log in first", from: location.pathname}} replace/>
    }
    return <Outlet/>
}