import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { getVans } from "../api";

export default function VansDetails() {
    const [van, setVan] = useState(null)
    const params = useParams()
    const location = useLocation()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    console.log(params.id)
    useEffect(() => {
        async function loadVanDetails() {
            setLoading(true)
           
            try {
                const data = await getVans(params.id)
                setVan(data)
                console.log(van)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        loadVanDetails()
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <div>
            <Link
                to={location.state.search ? `..?${location.state.search}` : '..'}
                relative="path"
                className="back"
            >&larr; <span>Back to {location.state.search ? van.type : "all"} vans</span></Link>
      { van && ( <div className="van-dts">

                <img src={van.imageUrl} />
                <div className="van-det-inner">
                    <h3 className="van-name-det">{van.name}</h3>
                    <h3 className="van-price-det">{van.price}<span className="day-span">/day</span></h3>
                    <p className={`${van.type} type`}>{van.type}</p>
                    <p className="desc">{van.description}</p>
                    <button className="rent-btn">Rent this van</button>
                </div>
            </div>)}
        </div>
    ) 
}