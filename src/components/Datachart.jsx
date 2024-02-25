import React, { useEffect, useState } from 'react'
import '../components/styles/datachart.css'
import a from '../pages/images/man.avif'




const Datachart = () => {
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        setTableData([
            {
                img: a,
                name: "Debra",
                joined: "June 1, 2020",
                id: "#APL-0001",
                roll: "07",
                classParticipation: "97%",
                quizRes: "Positive"
            },
            {
                img: a,
                name: "Camenun",
                joined: "June 1, 2020",
                id: "#APL-0001",
                roll: "07",
                classParticipation: "95%",
                quizRes: "Negative"
            },
            {
                img: a,
                name: "Debra",
                joined: "June 1, 2020",
                id: "#APL-0001",
                roll: "07",
                classParticipation: "97%",
                quizRes: "Positive"
            },
            {
                img: a,
                name: "Camenun",
                joined: "June 1, 2020",
                id: "#APL-0001",
                roll: "07",
                classParticipation: "95%",
                quizRes: "Negative"
            },
            {
                img: a,
                name: "Debra",
                joined: "June 1, 2020",
                id: "#APL-0001",
                roll: "07",
                classParticipation: "97%",
                quizRes: "Positive"
            },
            {
                img: a,
                name: "Camenun",
                joined: "June 1, 2020",
                id: "#APL-0001",
                roll: "07",
                classParticipation: "95%",
                quizRes: "Negative"
            },
            {
                img: a,
                name: "Debra",
                joined: "June 1, 2020",
                id: "#APL-0001",
                roll: "07",
                classParticipation: "97%",
                quizRes: "Positive"
            },
            {
                img: a,
                name: "Camenun",
                joined: "June 1, 2020",
                id: "#APL-0001",
                roll: "07",
                classParticipation: "95%",
                quizRes: "Negative"
            },
           
        ])
    }, [])



    return (
        <div className="tabledata-container">
            <table>
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" />
                        </th>
                        <th>Name</th>
                        <th>Date Joined</th>
                        <th>ID</th>
                        <th>Roll Number</th>
                        <th>Class Participation</th>
                        <th>Quiz Result</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map((val, i) => {
                            return (
                                <tr key={i}>
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <td>
                                        <img src={val.img} alt="" />
                                        <span>{val.name}</span>
                                    </td>
                                    <td>{val.joined}</td>
                                    <td>{val.id}</td>
                                    <td>{val.roll}</td>
                                    <td>{val.classParticipation}</td>
                                    <td>{val.quizRes}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>

            </table>
        </div>
    )
}

export default Datachart