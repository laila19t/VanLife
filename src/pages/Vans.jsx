import {useEffect, useState} from "react";
import Van from "../components/Van";

export default function Vans(){
    const [vanData, setVanData] = useState([])
   useEffect(()=>{
    fetch("/api/vans")
    .then(res=> res.json())
    .then(data => {setVanData(data.vans)
         console.log(vanData)})
   },[])

   const vanElements = vanData.map(van => <Van 
        image={van.imageUrl}
        name={van.name}
        price={van.price}
        type={van.type}
        key={van.id}
        />)

    return(
        <div className="var-elements-container">
            <h1>Explore our van options</h1>
            <div className="van-elements">
            {vanElements} 
            </div>
        </div>
    )
}