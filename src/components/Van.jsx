import React from "react";
import {Link} from "react-router-dom"

export default function Van({image,name,price,type,id}){
    return(
    
        <div className="van-card">
            <img src={image}/>
            <h3 className="van-name">{name}</h3>
            <h3 className="van-price">{price}<span className="day-span">/day</span></h3>
            <p className={type}>{type}</p>
        </div>
 
    
    )
}