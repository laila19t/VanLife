import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import TransactionCard from "../../components/TransactionCard";


export default function Income(){

    const data = [
        {name: 'Ju', uv: 4000 },
        {name: 'Au', uv: 1350 },
        {name: 'Se', uv: 3000 },
        {name: 'Oc', uv: 2700 },
        {name: 'No', uv: 1600 },
        {name: 'De', uv: 500 }
      ];

    const transactions =[
        {amount: '720', date: '1/12/22'},
        {amount: '560', date: '10/11/22'},
        {amount: '980', date: '23/11/22'},
    ]

    const transactionElements = transactions.map(trans => <TransactionCard amount={trans.amount} date={trans.date}/>)

    return(
        <div className="income-container">
            <div className="upper-income">
                <div className="chart">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            width={300}
                            height={250}
                            data={data}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Bar dataKey="uv" fill="#FF8C38" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="inner-income">
                    <div style={{display:"flex", alignItems:"baseline", gap:"10px"}}>
                    <h2 className="income-keyword">Income</h2>
                    <span className="small">last <span className="underline">30 days</span></span>
                    </div>
                    <h1>$2,260</h1>
                    <h3>Your transactions (3)</h3>
                    <div className="transactions-container">{transactionElements} </div>
                 </div>
            </div>
        </div>
    )
}