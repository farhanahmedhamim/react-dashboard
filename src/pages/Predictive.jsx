import React from "react";
import '../components/styles/predictive.css'

import Datetime from "../components/Datetime";
// import Monthly from "../components/Monthly";
import Recent from "../components/Recent";


const Predictive = () => {
    return (
        <section className="allmain-wrap">
            <div className="x-container">
                <div className="assinment-top">
                    <div className="assinment-left">
                        <select>
                            <option value="Mathematics">Mathematics</option>
                            <option value="Physical Science">Physical Science</option>
                        </select>
                    </div>
                    <div className="assinment-left">
                        <select>
                            <option value="Quiz">Overall</option>
                            <option value="Quiz">Quiz</option>
                            <option value="Test">Test</option>
                            <option value="Exam">Exam</option>
                        </select>
                    </div>
                </div>
                <div className="predective-wrap">
                    <Datetime />
                    {/* <Monthly /> */}
                    <Recent />
                </div>
            </div>
        </section>
    )
}


export default Predictive