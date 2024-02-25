import React from "react";
import '../components/styles/usermanagement.css'
import User from "../components/User";
import Studentgrap from "../components/Studentgrap";
import Girls from "../components/Girls";
import Datachart from "../components/Datachart";
import Customers from "../components/Customers";


const Usermanagement = () => {





    return (
        <section className="allmain-wrap">
            <div className="x-container">
                <div className="usermanagement-top">
                    <User users={"22,490"} agriment={"Real Time Users"} />
                    <User users={"800,000"} agriment={"Subscriber"} />
                    <User users={"82,490"} agriment={"Impression"} />
                    <User agrimental={"Engagement Rate"} ggreemental={"94 %"} />
                </div>
                <div className="usermanagement-center">
                    <Studentgrap />
                    <Girls />
                </div>
                <div className="usermanagement-bottom">
                    <Datachart />
                    <Customers />
                </div>
            </div>
        </section>
    )
}

export default Usermanagement