import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos(){
    const [vanDetails,setVanDetails] = useOutletContext()

    return(
        <img src={vanDetails.imageUrl} className="host-van-detail-image" />
    )
}