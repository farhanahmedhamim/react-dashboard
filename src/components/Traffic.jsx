import React, { useEffect, useState } from 'react'
import '../components/styles/traffic.css'

const Traffic = () => {
    const [tableData, setTableData] = useState([])
    useEffect(() => {
        setTableData([
            {
                name: "Facebook",
                count: 3540,
                rate: 80
            },
            {
                name: "Twitter",
                count: 2245,
                rate: 60
            },
            {
                name: "LinkedIn",
                count: 1842,
                rate: 40
            },
            {
                name: "YouTube",
                count: 1748,
                rate: 20
            },
            {
                name: "Google Plus",
                count: 262,
                rate: 10
            }
        ])
    }, [])
    return (
        <div className='traffic'>
            <h3>Social Media Traffic</h3>
            <div className="trafficTable">
                <div className="tableHeading">
                    <span>Network</span>
                    <span>Visitors</span>
                </div>
                <div className="tableBody">
                    {
                        tableData.map((val, i) => {
                            return (
                                <div key={i} className='tableRow'>
                                    <span>{val.name}</span>
                                    <span>{val.count}</span>
                                    <div className="progressAmount">
                                        <div className="inner" style={{ width: `${val.rate}%`, height: "100%" }}></div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        //     <div className="progressAmount">
        //     <div className="inner" style={{ width: `${val.rate}%`, height: "100%" }}></div>
        // </div>
    )
}

export default Traffic