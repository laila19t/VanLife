import React from "react";
import about from "../assets/van.png"
import { Link } from "react-router-dom";

export default function About(){
    return (
        <>
        <div className="about">
            <img src={about}/>
            <div className="inner-about">
                <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                (Hitch costs extra 😉)</p>
                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                <div className="inner-orange">
                    <h3>Your destination is waiting.</h3>
                    <h3 className="second-h3">Your van is ready.</h3>
                    <Link to="/vans" className="explore-vans">Explore our vans</Link>
                </div>
            </div>
        </div>
        </>
    )
}