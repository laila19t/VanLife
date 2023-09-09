import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
    return (
        <>
        <div className="home">
            <h1>You got the travel plans, we got the travel vans.</h1>
            <h3>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</h3>
            <Link to='vans' className="find-van">Find your van</Link>
        </div>
          </>
    )
}