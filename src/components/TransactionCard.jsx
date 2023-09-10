import React from "react";

export default function TransactionCard({amount, date}){
    return(
        <div className="transaction-card">
            <h3>${amount}</h3>
            <p>{date}</p>
        </div>
    )
}