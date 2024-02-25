import React from 'react'
import '../components/styles/perform.css'

const Perform = (props) => {
    return (
        <div className="single-box">
            <div className="countup">
                <img src={props.val.img} alt="" />
                <h1>{props.val.count}</h1>
            </div>
            <p>{props.val.name}</p>
        </div>
    )
}

export default Perform