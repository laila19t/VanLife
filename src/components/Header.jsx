import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header(){

    return(
        <nav>
            <Link to="/">#VANLIFE</Link>
            <div className="nav-links">
                <NavLink to="/about" className={({isActive})=> isActive ? 'link-styles' : ''}>About</NavLink>
                <NavLink to="/vans" className={({isActive})=> isActive ? 'link-styles' : ''}>Vans</NavLink>
                <NavLink to="/host" className={({isActive})=> isActive ? 'link-styles' : ''}>Host</NavLink>
            </div>
      </nav>
    )
}