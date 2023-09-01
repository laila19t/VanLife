import {React, useEffect, useState} from "react";
import HostVanCard from "../../components/HostVanCard";

export default function HostVans(){
   const [hostVans, setHostVans]= useState([])
   useEffect(()=>{
    fetch("/api/host/vans")
    .then(res=>res.json())
    .then(data=> setHostVans(data.vans))
   },[])

   const hostVanElements = hostVans.map((van)=>{
    return <HostVanCard 
    image={van.imageUrl}
    name={van.name} 
    price={van.price}
    id={van.id}
    key={van.id}/>
   })
    return hostVans ?(
         <div className="host-vans-container">
        {hostVanElements}
        </div> 
    ): <h1>Loading...</h1> 
} 