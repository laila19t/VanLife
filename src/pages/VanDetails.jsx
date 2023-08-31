import {useEffect,useState} from "react";
import { useParams } from "react-router-dom";

export default function VansDetails(){
    const [van,setVan] = useState(null)
    const params = useParams()
    
    useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
        .then(res=> res.json())
        .then(data => setVan(data.vans))
    },[])

 return van ? (
    <div className="van-dts">
        <img src={van.imageUrl}/>
        <div className="van-det-inner">
            <h3 className="van-name-det">{van.name}</h3>
            <h3 className="van-price-det">{van.price}<span className="day-span">/day</span></h3>
            <p className={`${van.type} type`}>{van.type}</p>
            <p className="desc">{van.description}</p>
            <button className="rent-btn">Rent this van</button>
        </div>
    </div>
 ) : <h1>Loading...</h1>
}