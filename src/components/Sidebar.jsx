import React from "react";
import '../components/styles/sidebar.css'

import a from '../pages/images/v1.svg'
import b from '../pages/images/v3.svg'
import c from '../pages/images/v4.svg'
import d from '../pages/images/v2.svg'
import e from '../pages/images/v5.svg'
import f from '../pages/images/v8.svg'
import g from '../pages/images/v6.svg'
import h from '../pages/images/v7.svg'



import { NavLink } from "react-router-dom";

const Sidebar = ({ children, toggleValue }) => {



    const item = [
        {
            path: "/",
            name: "Dashboard",
            img: a
        },
        {
            path: "/Usermanagement",
            name: "User Management",
            img: f
        },
        {
            path: "/Assainment",
            name: "Assainment",
            img: h
        },
        {
            path: "/Data",
            name: "Data Analytics",
            img: g
        },
        {
            path: "/Predictive",
            name: "Predictive",
            img: e
        },
        {
            path: "/Notifications",
            name: "Notifications",
            img: c
        },
        {
            path: "/Profile",
            name: "Profile",
            img: b
        },
        {
            path: "/Logout",
            name: "Log out",
            img: d
        }
    ]

    const sidebarStyles = {
        width: window.innerWidth > 500 ? (window.innerWidth > 850 ? (toggleValue ? "75px" : "240px") : toggleValue ? "240px" : "75px") : "240px",
        left: window.innerWidth > 500 ? "0" : (toggleValue ? "0" : "-300px")
    }




    return (
        <div className="main-wrap">
            <div className={"sidebar"} style={sidebarStyles}>


                <div className="link-wrap">
                    {
                        item.map((val, ind) => {
                            return (
                                <NavLink to={val.path} key={ind} className="link" activeclassame="link active">
                                    <div className="top-img">
                                        <img src={val.img} alt="" />
                                    </div>
                                    <div className="name" style={{ display: window.innerWidth > 500 ? (window.innerWidth > 850 ? (toggleValue ? "none" : "block") : toggleValue ? "block" : "none") : "block" }}>{val.name}</div>
                                </NavLink>
                            )
                        })
                    }
                </div>
            </div>
            <main style={{ width: toggleValue ? "100%" : window.innerWidth > 850 ? "calc(100% - 240px)" : "100%", marginLeft: window.innerWidth > 500 ? (toggleValue ? "75px" : window.innerWidth > 850 ? "240px" : "75px") : "0", transition: ".3s" }}>{children}</main>
        </div>
    )
}

export default Sidebar