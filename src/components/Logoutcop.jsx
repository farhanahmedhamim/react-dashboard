import React, { useState } from 'react'
import '../components/styles/logoutcop.css'
import a from '../pages/images/3644996 1.svg'

import e from '../pages/images/em.png'
import p from '../pages/images/un.png'

import h from '../pages/images/view.png'
import s from '../pages/images/invisible.png'

import b from '../pages/images/facebook.png'
import c from '../pages/images/apple.png'
import d from '../pages/images/google.png'

import { Link } from 'react-router-dom'

const Logoutcop = () => {

    const [show, setShow] = useState(false)

    const toggole = () => {
        setShow(prev => !prev)
    }

    return (
        <div className="logout-container">
            <div className="logout-wrap">
                <div className="logout-image">
                    <img src={a} alt="" />
                </div>
                <form className="logout-form">
                    <div className="informative">
                        <h1>Sign in</h1>
                        <p>If you don’t have an account register You can <Link><span>Register here !</span></Link></p>
                    </div>
                    <div className="mails">
                        <div className="em">
                            <img src={e} alt="" />
                        </div>
                        <h3>Email</h3>
                        <input type="text" placeholder='Enter your email address' className="paas" />
                    </div>
                    <div className="mails">
                        <div className="em">
                            <img src={p} alt="" />
                        </div>
                        <div className="hide-show" onClick={toggole}>
                            {
                                show ? <img className="hiders" src={h} alt="" /> : <img className="showwr" src={s} alt="" />
                            }
                        </div>
                        <h3>Password</h3>
                        <input type={show ? "text" : "password"} placeholder='Enter your Password' className="paas" />
                    </div>
                    <div className="check-mark">
                        <div className="checker">
                            <input className="checkers" type="checkbox" />
                            <span>Rememebr me</span>
                        </div>
                        <p>Forgot Password ?</p>
                    </div>
                    <button>Login</button>
                    <p className="para">or continue with</p>
                    <div className="social-media">
                        <Link>
                            <img src={b} alt="" />
                        </Link>
                        <Link>
                            <img src={c} alt="" />
                        </Link>
                        <Link>
                            <img src={d} alt="" />
                        </Link>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Logoutcop