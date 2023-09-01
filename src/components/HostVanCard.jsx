import React from "react";
import { Link } from "react-router-dom";

export default function HostVanCard({image,name,price,id}){
    return(
        <Link to={`/host/vans/${id}`} className="van-link">
            <div className="host-vans-card">
                <img src={image}/>
                <h3>{name}</h3>
                <p>${price}/day</p>
            </div>
        </Link>
    )
} 