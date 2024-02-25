import React from "react";
import '../components/styles/data.css'
import SIngledata from "../components/Slngledata";
// import Performance from "../components/Performance";
import Whisker from "../components/Whisker";
import Activities from "../components/Activities";
import Mixedchart from "../components/Mixedchart";


const Data = () => {


    return (
        <section className="allmain-wrap">
            <div className="x-container">
                <div className="data-top">
                    <div className="assinment-top asssss">
                        <div className="assinment-left">
                            <select>
                                <option value="Mathematics">Mathematics</option>
                                <option value="Physical Science">Physical Science</option>
                            </select>
                        </div>
                        <div className="assinment-left">
                            <select>
                                <option value="Overall">Overall</option>
                                <option value="Test">Test</option>
                                <option value="Exam">Exam</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="data-bottom">
                    <div className="math-wrap">
                        <SIngledata groth={"Math Quiz Growth"} meaning={"Remaining"} percent={"57%"} />
                        <SIngledata groth={"Math Quiz Growth"} meaning={"Remaining"} percent={"57%"} />
                        <SIngledata groth={"Math Quiz Growth"} meaning={"Remaining"} percent={"57%"} />
                    </div>
                    {/* <Performance /> */}
                    <div className="boxplot-wrap">
                        <Whisker />
                        <Activities />
                    </div>
                    <Mixedchart />
                </div>
            </div>
        </section>
    )
}


export default Data