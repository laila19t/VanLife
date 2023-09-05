import React from "react";
import { NavLink, Link } from "react-router-dom";
import userIcon from "../assets/user.png"

export default function Header(){

    function fakeLogOut() {
        localStorage.removeItem("loggedin")
    }

    return(
        <nav>
            <Link to="/">#VANLIFE</Link>
            <div className="nav-links">
                <NavLink to="/host" className={({isActive})=> isActive ? 'link-styles' : ''}>Host</NavLink>
                <NavLink to="/about" className={({isActive})=> isActive ? 'link-styles' : ''}>About</NavLink>
                <NavLink to="/vans" className={({isActive})=> isActive ? 'link-styles' : ''}>Vans</NavLink>
                <NavLink to="login" className="login-link" >
                    <img src={userIcon} className="user-icon"/>
                </NavLink>
                <button onClick={fakeLogOut}>X</button>
            </div>
      </nav>
    )
}