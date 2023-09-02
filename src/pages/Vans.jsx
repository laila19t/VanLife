import { useEffect, useState } from "react";
import Van from "../components/Van";
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from "../api";

export default function Vans() {
    const [vanData, setVanData] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const typeFilter = searchParams.get("type")
    console.log(typeFilter)

    const filteredVans = typeFilter ? vanData.filter(van => van.type === typeFilter) : vanData

    useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVans()
                setVanData(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        loadVans()
    }, [])

    const vanElements = filteredVans.map(van =>
        <Link to={`${van.id}`} className="van-link" state={{ search: searchParams.toString() }}>
            <Van
                image={van.imageUrl}
                name={van.name}
                price={van.price}
                type={van.type}
                key={van.id}
                id={van.id}
            /> </Link>)

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <div className="var-elements-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <Link to="?type=simple" className={`van-type simple ${typeFilter === 'simple' ? 'selected' : ''}`}>Simple</Link>
                <Link to="?type=rugged" className={`van-type rugged ${typeFilter === 'rugged' ? 'selected' : ''}`}>Rugged</Link>
                <Link to="?type=luxury" className={`van-type luxury ${typeFilter === 'luxury' ? 'selected' : ''}`}>Luxury</Link>
                {typeFilter ? <Link to="." className=" clear">Clear filters</Link> : null}
            </div>
            <div className="van-elements">
                {vanElements}
            </div>
        </div>
    )
}