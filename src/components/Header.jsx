import React, {useContext, useState} from "react";
import { NavLink, Link } from "react-router-dom";
import userIcon from "../assets/user.png"
import { signUserOut } from "../api";
import { userAuthContext } from "../App";

export default function Header(){
    const [logged,isLogged] = useContext(userAuthContext);

    function fakeLogOut() {
        localStorage.removeItem("loggedin")
        signUserOut()
        isLogged(null)
    }
    return(
        <nav>
            <Link to="/">#VANLIFE</Link>
            <div className="nav-links">
               {logged && <NavLink to="/host" className={({isActive})=> isActive ? 'link-styles' : ''}>Host</NavLink>}
                <NavLink to="/about" className={({isActive})=> isActive ? 'link-styles' : ''}>About</NavLink>
                <NavLink to="/vans" className={({isActive})=> isActive ? 'link-styles' : ''}>Vans</NavLink>
                {!logged && <NavLink to="login" className="login-link" >
                    <img src={userIcon} className="user-icon"/>
                </NavLink>}
                { logged && <button className="logout" onClick={fakeLogOut}>Log out</button>}
            </div>
      </nav>
    )
}