import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanInfo(){
   const [vanDetails,setVanDetails] = useOutletContext()
    return(
        <div className="host-van-detail-info">
            <h4>Name: <span>{vanDetails.name}</span></h4>
            <h4>Category: <span>{vanDetails.type}</span></h4>
            <h4>Description: <span>{vanDetails.description}</span></h4>
            <h4>Visibility: <span>public</span></h4>
        </div>
    )
}

