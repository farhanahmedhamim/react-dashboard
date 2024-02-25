import React, { useEffect, useState } from "react";
import '../components/styles/dashboard.css'
import a from '../pages/images/Vector.svg'
import b from '../pages/images/one.svg'
import c from '../pages/images/two.svg'
import d from '../pages/images/Group 1000005214.svg'
import Progress from "../components/Progress";
import Traffic from "../components/Traffic";
import CustomCalendar from "../components/CustomCalendar";
import BigBar from "../components/BigBar";
import Perform from "../components/Perform";
import Average from "../components/Average";

const Dashboard = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        setData([
            {
                img: a,
                count: "130",
                name: "Organic Visitor"
            },
            {
                img: b,
                count: "120K",
                name: "Visitor From Advertise"
            },
            {
                img: c,
                count: "30%",
                name: "Detection Rate"
            },
            {
                img: d,
                count: "80%",
                name: "Ads Click Rate"
            }
        ])
    }, [])

    return (
        <section className="allmain-wrap">
            <div className="x-container">
                <div className="avg-rap">
                    <Average dataArr={[21, 22, 10, 28, 16, 21]} avg={"1,213k"} persent={"70.8%"} impression={"Avg impression"} rounded={5} />
                    <Average dataArr={[10, 18, 10, 28, 30, 21]} avg={"97.7%"} persent={"40.8%"} impression={"Avg Engagements rate"} rounded={1} />
                    <Average dataArr={[15, 18, 10, 22, 25, 22]} avg={"823k"} persent={"0.82%"} impression={"Avg Reach"} rounded={1} />
                </div>
                <div className="bigbar-container">
                    <BigBar />
                </div>
                <div className="center-wrap">
                    <div className="single-center bdbdbd">
                        <Traffic />
                    </div>
                    <div className="single-center">
                        <Progress />
                    </div>
                    <div className="single-center">
                        <CustomCalendar />
                    </div>
                </div>
                <div className="mainform-wrap">
                    <h4>Performing Post</h4>
                    <div className="preformming-wrap">
                        {
                            data.map((val, i) => {
                                return (
                                    <Perform key={i} val={val} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard
