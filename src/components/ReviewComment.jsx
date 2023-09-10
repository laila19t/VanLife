import React from "react";
import { AiFillStar } from "react-icons/ai";

export default function ReviewComment({num,name,date,comment}){
    const stars = []
    for(let i=0;i<num;i++){
        stars.push(<AiFillStar className="star"/>)
    }
    return(
        <div className="review-card">
            <div>
            {stars}
            </div>
            <div className="name-date">
                <h3>{name}</h3>
                <p>{date}</p>
            </div>
            <p className="comment">{comment}</p>
        </div>
    )
}