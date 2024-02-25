import React, { useState } from "react";
import '../components/styles/profile.css'
import a from '../pages/images/Vector.png'
import b from '../pages/images/email.png'
import c from '../pages/images/x30 8.Whatsapp.png'
import e from '../pages/images/down-arrow.png'
import p from '../pages/images/placeholder.png'



const Profile = () => {


    const [hide, setHide] = useState(false)
    const [type, setType] = useState(false)
    const [off, setOff] = useState(false)
    const [oone, setOone] = useState(false)
    const [two, setTwo] = useState(false)

    const nose = () => {
        setOff(prev => !prev)
    }

    const offer = () => {
        setOone(prev => !prev)
    }

    const must = () => {
        setTwo(prev => !prev)
    }

    const toogleshow = () => {
        setHide(prev => !prev)
    }
    const toogleshows = () => {
        setType(prev => !prev)
    }


    return (
        <section className="allmain-wrap">
            <div className="x-container">
                <div className="profile-top">
                    <div className="profile-left">
                        <h2>Edit Profile</h2>
                        <div className="user-profile">
                            <img className="picture" src={p} alt="" />
                            <div className="user-info">
                                <select>
                                    <option value="Upload">Upload</option>
                                    <option value="Delete">Delete</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="profile-right">
                        <button className="ase">Cancel</button>
                        <button className="blue">Save Changes</button>
                    </div>
                </div>
                <div className="profile-bottom">
                    <div className="form-wrap">
                        <div className="generals">
                            <div className="lines">
                                <h3>GENERALS</h3>
                                <div className="liner"></div>
                            </div>
                            <form className="generals-form">
                                <div className="single-input">
                                    <p>First Name</p>
                                    <input type="text" />
                                </div>
                                <div className="single-input">
                                    <p>Middle Name</p>
                                    <input type="text" />
                                </div>
                                <div className="single-input">
                                    <p>Last Name</p>
                                    <input type="text" />
                                </div>
                                <div className="single-input">
                                    <p>Username</p>
                                    <input type="text" />
                                </div>
                                <div className="single-input">
                                    <span className="show" onClick={toogleshow}>{hide ? "HIDE" : "SHOW"}</span>
                                    <p>Password</p>
                                    <input type={hide ? "text" : "password"} />
                                </div>
                                <div className="single-input">
                                    <span className="show" onClick={toogleshows}>{type ? "HIDE" : "SHOW"}</span>
                                    <p>Re-Type Password</p>
                                    <input type={type ? "text" : "password"} />
                                </div>
                            </form>
                        </div>
                        <div className="generals">
                            <div className="lines">
                                <h3>CONTACT</h3>
                                <div className="liner"></div>
                            </div>
                            <form className="generals-form">
                                <div className="single-input">
                                    <div className="photos" style={{ left: off ? "0px" : "30px", bottom: off ? "50px" : "20px" }}>
                                        <img src={a} alt="" />
                                    </div>
                                    <p>Mobile Phone</p>
                                    <input type="text" onClick={nose} />
                                </div>
                                <div className="single-input">
                                    <div className="photos" style={{ left: oone ? "0px" : "30px", bottom: oone ? "50px" : "20px" }}>
                                        <img src={c} alt="" />
                                    </div>
                                    <p>Whatsapp</p>
                                    <input type="text" onClick={offer} />
                                </div>
                                <div className="single-input">
                                    <div className="photos" style={{ left: two ? "0px" : "30px", bottom: two ? "50px" : "20px" }}>
                                        <img src={b} alt="" />
                                    </div>
                                    <p>Email</p>
                                    <input type="text" onClick={must} />
                                </div>
                                <div className="single-input">
                                    <p>Address</p>
                                    <input type="text" />
                                </div>
                                <div className="single-input">
                                    <span className="show">
                                        <img src={e} alt="" />
                                    </span>
                                    <p>City</p>
                                    <input type="text" />
                                </div>
                                <div className="single-input">
                                    <span className="show">
                                        <img src={e} alt="" />
                                    </span>
                                    <p>Country</p>
                                    <input type="text" />
                                </div>
                            </form>
                        </div>
                        <div className="generals">
                            <div className="lines">
                                <h3>ABOUT ME</h3>
                                <div className="liner"></div>
                            </div>
                            <div className="tell-about">
                                <span>Tell About You</span>
                                <form className="generals-form">
                                    <textarea></textarea>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile