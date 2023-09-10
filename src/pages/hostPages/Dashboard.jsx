import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import {React, useEffect, useState} from "react";
import HostVanCard from "../../components/HostVanCard";
import { getHostVans } from "../../api";

export default function Dashboard(){
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

    return(
        <div className="dashboard-container">
            <div className="upper-dashboard">
                <div className="welcome">
                    <div className="welcome-inner">
                        <h2>Welcome!</h2>
                        <h3>your income <span className="underline">last 30 days</span></h3>
                        <h1>$2,260</h1>
                    </div>
                    <Link to='income' className="details">Details</Link>
                </div>
                <div className="review-score">
                    <div className="review-score-inner">
                        <h2>Review score</h2>
                        <div className="flex-star">
                        <AiFillStar className="star"/>
                        <p><strong>5.0</strong><span className="light">/5</span></p>
                        </div>
                    </div>
                    <Link to="reviews" className="details">Details</Link>
                </div>
            </div>
            <div className="listed-vans">
                <div className="flex-vans">
                    <h1>Your listed vans</h1>
                    <Link to="vans" className="details">View all</Link>
                </div>
                <div className="inner-listed-vans">{hostVanElements}</div>
            </div>
        </div>
    )
}