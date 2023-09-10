import {React, useEffect, useState} from "react";
import { Link, useParams, Outlet, NavLink } from "react-router-dom";
import { getVan } from "../../api";

export default function HostVanDetails(){
    const [VanDetails, setVanDetails]= useState(null)
    const params = useParams()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

 
    useEffect(()=>{
    


     async function loadVans() {
        setLoading(true)
        try {
            const data = await getVan(params.id)
            setVanDetails(data)
            console.log(data)
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

    return VanDetails &&(
        <div>
            <Link  to=".." relative="path" className="back"> &larr; <span>Back to all vans</span></Link>
            <div className="van-dts-host">
                <img className="van-host-det-img" src={VanDetails.imageUrl}  />
                <div>
                    <div className="main-info">
                        <h3 className="van-name-det">{VanDetails.name}</h3>
                        <p className="van-price-det">${VanDetails.price}/day</p>
                        <p  className={`${VanDetails.type} type`}>{VanDetails.type}</p>
                    </div>
                    <div className="host-nav">
                        <NavLink to="." end className={({isActive}) => isActive ? 'link-styles' : ''}>Details</NavLink>
                        <NavLink to="pricing" className={({isActive}) => isActive ? 'link-styles' : ''}>Pricing</NavLink>
                        <NavLink to="photos" className={({isActive}) => isActive ? 'link-styles' : ''}>Photos</NavLink>
                    </div>
                    <div className="outlet">
                        <Outlet context={[VanDetails,setVanDetails]}/>
                    </div>
                </div>
            </div>
       </div>
    ) 
} 


