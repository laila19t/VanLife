import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <nav>
            <Link to="/">#VANLIFE</Link>
            <div className="nav-links">
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
                <Link to="/host">Host</Link>
            </div>
      </nav>
    )
}