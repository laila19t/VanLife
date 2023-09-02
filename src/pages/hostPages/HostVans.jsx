import {React, useEffect, useState} from "react";
import HostVanCard from "../../components/HostVanCard";
import { getHostVans } from "../../api";

export default function HostVans(){
   const [hostVans, setHostVans]= useState([])
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(null)

   useEffect(()=>{
    async function loadVans() {
        setLoading(true)
        try {
            const data = await getHostVans()
            setHostVans(data)
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    loadVans()

   },[])


   if (loading) {
    return <h1>Loading...</h1>
}

if (error) {
    return <h1>There was an error: {error.message}</h1>
}

   const hostVanElements = hostVans.map((van)=>{
    return <HostVanCard 
    image={van.imageUrl}
    name={van.name} 
    price={van.price}
    id={van.id}
    key={van.id}/>
   })

    return hostVans &&(
         <div className="host-vans-container">
        {hostVanElements}
        </div> 
    )
} 