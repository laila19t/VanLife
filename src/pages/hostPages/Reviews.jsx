import React from "react";
import { AiFillStar } from "react-icons/ai";
import RatingBar from "../../components/RatingBar";
import ReviewComment from "../../components/ReviewComment";

export default function Reviews(){
    const rating = [
        {stars: 5, value: 100},
        {stars: 4, value: 0},
        {stars: 3, value: 0},
        {stars: 2, value: 0},
        {stars: 1, value: 0},
    ]

    const reviews = [
        {
            starsNum: 5,
            name: 'Elliot',
            date: 'December 1, 2022',
            comment: 'The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!'
        },
        {
            starsNum: 5,
            name: 'Sandy',
            date: 'November 23, 2022',
            comment: 'This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!'
        }
    ]

    const barElements = rating.map(rate => <RatingBar stars={rate.stars} value={rate.value}/>)
    const reviewElements = reviews.map(rev => <ReviewComment num={rev.starsNum} name={rev.name} date={rev.date} comment={rev.comment}/>)

    return(
        <div className="reviews-container">
            <h1>Your reviews <span className="small">last <span className="underline">30 days</span></span></h1>
            <div className="reviews-inner-container">
                <div className="reviews-pannel">
                    <div className="overall-rate">
                        <h3>5.0</h3>
                        <AiFillStar className="star"/>
                        <p>overall rating</p>
                    </div>
                    <div className="rating-bars-container">{barElements}</div>
                </div>
                <div className="reviews-section">
                    <h3 className="rev-num">Reviews (2)</h3>
                    <div className="review-elements">
                      {reviewElements}
                    </div>
                </div>
            </div>
        </div>
    )
}