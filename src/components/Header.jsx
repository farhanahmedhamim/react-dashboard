import React, { useState } from 'react'
import '../components/styles/header.css'

import a from '../pages/images/menu.png'
import b from '../pages/images/search.png'
import c from '../pages/images/grid.png'
import d from '../pages/images/comment.png'
import e from '../pages/images/email.png'
import f from '../pages/images/1.jpg'
import g from '../pages/images/united-states.png'
import h from '../pages/images/logo-light-icon.png'
import i from '../pages/images/logo-light-text.png'
import x from '../pages/images/close.png'
import more from '../pages/images/more.png'


const Header = ({ toggleValue, setToggleValue }) => {

    const [hide, setHide] = useState(true)
    const [smToggle, setSmToggle] = useState(false)

    const show = () => {
        setHide(prev => !prev)
    }
    const smRun = () => {
        setSmToggle(prev => !prev)
    }




    return (
        <header>
            <form className="main-form" style={{ width: hide ? "0px" : "100%", height: hide ? "0px" : "98%" }}>
                <input type="text" placeholder="Search & enter" />
                <img src={x} alt="" onClick={show} style={{ display: hide ? "none" : "block" }} />
            </form>
            <div className="header-leftside">
                <img className="icons" src={h} alt="" />
                <img className="texts" src={i} alt="" style={{ display: toggleValue ? "none" : window.innerWidth > 850 ? "block" : "none" }} />
                <div className="single-image" onClick={setToggleValue}>
                    <img className="menu" src={a} alt="" />
                </div>
                <div className="single-image" onClick={show}>
                    <img className="same" src={b} alt="" />
                </div>
            </div>
            <div className="header-righttside">
                <div className="single-image">
                    <img className="sames" src={d} alt="" />
                </div>
                <div className="single-image">
                    <img className="samer" src={e} alt="" />
                </div>
                <div className="single-image">
                    <img className="prfile" src={f} alt="" />
                </div>
                <div className="single-image">
                    <img className="flag" src={g} alt="" />
                </div>
            </div>
            <img src={more} alt="" className='showMore' onClick={smRun} />
            <div className={smToggle ? "active showSm" : "showSm"}>
                <div className="single-image">
                    <img className="grid" src={c} alt="" />
                </div>
                <div className="sm-wrap">
                    <div className="single-image">
                        <img className="sames" src={d} alt="" />
                    </div>
                    <div className="single-image">
                        <img className="samer" src={e} alt="" />
                    </div>
                    <div className="single-image">
                        <img className="prfile" src={f} alt="" />
                    </div>
                    <div className="single-image">
                        <img className="flag" src={g} alt="" />
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header