import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function HostLayout(){

   
   return(
    <>
        <div className="host-nav">
            <NavLink to="." end className={({isActive}) => isActive ? 'link-styles' : ''} >Dashboard</NavLink>
            <NavLink to="income" className={({isActive}) => isActive ? 'link-styles' : ''}>Income</NavLink>
            <NavLink to="vans" className={({isActive}) => isActive ? 'link-styles' : ''}>Vans</NavLink>
            <NavLink to="reviews" className={({isActive}) => isActive ? 'link-styles' : ''}>Reviews</NavLink>
        </div>
        <Outlet/>
    </>
   )
}