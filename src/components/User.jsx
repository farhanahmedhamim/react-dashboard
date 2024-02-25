import React from 'react'
import '../components/styles/user.css'
import a from '../pages/images/Vector22.svg'

const User = (props) => {


    return (
        <div className="user-content">
            <div className="user-text">
                <h1>{props.users}</h1>
                <h2>{props.ggreemental}</h2>
                <p>{props.agriment}</p>
                <h4>{props.agrimental}</h4>
            </div>
            <div className="user-charts">
                <img src={a} alt="" />
            </div>
        </div >
    )
}

export default User