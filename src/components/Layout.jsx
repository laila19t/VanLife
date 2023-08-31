import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout(){
    return (
        <div className="site-wrapper ">
        <Header />
        <Outlet />
        <div className="footer">
            <h3>Ⓒ 2022 #VANLIFE</h3>
        </div>
        </div>
    )
}