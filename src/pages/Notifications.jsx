import React from "react";
import '../components/styles/notification.css'
import p from '../pages/images/placeholder.png'



const Notification = () => {
    return (
        <section className="allmain-wrap">
            <div className="x-container">
                <div className="notification-box">
                    <div className="notification-top">
                        <div className="notification-left">
                            <h4>Notifications</h4>
                            <select>
                                <option value="All">All</option>
                                <option value="one">one</option>
                                <option value="two">two</option>
                            </select>
                        </div>
                        <div className="notification-right">
                            <p>Mark all as read</p>
                            <select>
                                <option value="All"></option>
                                <option value="one">1</option>
                                <option value="two">2</option>
                            </select>
                        </div>
                    </div>
                    <div className="notification-bottom">
                        <div className="comment-wrap">
                            <div className="single-comment">
                                <div className="comment-left">
                                    <img src={p} alt="" />
                                </div>
                                <div className="comment-right">
                                    <p>Lorem ipsum dolor sit amet consectetur. Eget sed ante proin platea pellentesque sed leo. Risus vitae vitae elit massa mattis. Nulla diam.</p>
                                    <div className="button-list">
                                        <button className="red">Accept</button>
                                        <button className="ass">Reject</button>
                                    </div>
                                    <span>Today at 9:42 AM</span>
                                </div>
                            </div>
                            <div className="single-comment">
                                <div className="comment-left">
                                    <img src={p} alt="" />
                                </div>
                                <div className="comment-right">
                                    <p>Lorem ipsum dolor sit amet consectetur. Eget sed ante proin platea pellentesque sed leo. Risus vitae vitae elit massa mattis. Nulla diam.</p>
                                    <span>Today at 9:42 AM</span>
                                </div>
                            </div>
                            <div className="single-comment">
                                <div className="comment-left">
                                    <img src={p} alt="" />
                                </div>
                                <div className="comment-right">
                                    <p>Lorem ipsum dolor sit amet consectetur. Eget sed ante proin platea pellentesque sed leo. Risus vitae vitae elit massa mattis. Nulla diam.</p>
                                    <p className="pargraph">
                                        Lorem ipsum dolor sit amet consectetur. Sapien semper nibh at vel. Massa risus eu varius semper dignissim molestie. Placerat condimentum venenatis aliquet nam ullamcorper. Dolor a facilisis risus sapien et aenean. Gravida nisl tellus suspendisse at enim euismod.
                                        Id quisque mollis pulvinar at ut sapien. Nibh mauris orci enim aliquam elementum. Cursus neque iaculis egestas ut commodo amet platea non. Viverra quis amet tellus velit blandit. Sed donec nunc suspendisse dictum. Commodo sed nascetur egestas lacus tempor. Fames posuere.
                                    </p>
                                    <span>Today at 9:42 AM</span>
                                </div>
                            </div>
                            <div className="single-comment">
                                <div className="comment-left">
                                    <img src={p} alt="" />
                                </div>
                                <div className="comment-right">
                                    <p>Lorem ipsum dolor sit amet consectetur. Eget sed ante proin platea pellentesque sed leo. Risus vitae vitae elit massa mattis. Nulla diam.</p>
                                    <span>Today at 9:42 AM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Notification