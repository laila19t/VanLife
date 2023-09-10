import React from "react";

export default function RatingBar({stars,value}){
    return(
        <div className="rating-bar">
            <h3>{stars} {stars>1 ? 'stars' :'star'}</h3>
            <div className={value>0 ? 'bar yellow' : 'bar'}></div>
            <p>{value}%</p>
        </div>
    )
}