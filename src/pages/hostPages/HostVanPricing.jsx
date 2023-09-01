import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPricing(){
    const [vanDetails,setVanDetails] = useOutletContext()

    return(
        <h3 className="host-van-price">${vanDetails.price}<span>/day</span></h3>
    )
}