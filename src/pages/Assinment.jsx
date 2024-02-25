import React from "react";
import '../components/styles/assinment.css'
import a from '../pages/images/keyboard.png'
import b from '../pages/images/unlock.png'
import c from '../pages/images/menu.png'

const Assinment = () => {


    return (
        <section className="allmain-wrap">
            <div className="x-container">
                <div className="assinment-top">
                    <div className="assinment-left">
                        <select>
                            <option value="Mathematics">Mathematics</option>
                            <option value="Physical Science">Physical Science</option>
                        </select>
                    </div>
                    <div className="assinment-left">
                        <select>
                            <option value="Quiz">Quiz</option>
                            <option value="Test">Test</option>
                            <option value="Exam">Exam</option>
                        </select>
                    </div>
                </div>
                <div className="assinment-bottom">
                    <h3>Upload Questions</h3>
                    <form className="assinment-form">
                        <div className="assinment-platform">
                            <h1>Question: 1</h1>
                            <div className="platform-wrap">
                                <div className="assinment-left">
                                    <select>
                                        <option value="Upload">Upload</option>
                                        <option value="Delete it">Delete it</option>
                                    </select>
                                </div>
                                <div className="social-wrap">
                                    <img src={c} alt="" />
                                    <img src={a} alt="" />
                                    <img src={b} alt="" />
                                </div>
                            </div>
                        </div>
                        <textarea className="articles"></textarea>
                        <div className="assinment-platform">
                            <h1 className="solution">Solution</h1>
                            <div className="platform-wrap">
                                <div className="assinment-left">
                                    <select>
                                        <option value="Upload">Upload</option>
                                        <option value="Delete it">Delete it</option>
                                    </select>
                                </div>
                                <div className="social-wrap">
                                    <img src={c} alt="" />
                                    <img src={a} alt="" />
                                    <img src={b} alt="" />
                                </div>
                            </div>
                        </div>
                        <textarea className="articles"></textarea>
                        <input type="text" placeholder="Add a Question" />
                        <input type="text" placeholder="Add a solution" />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Assinment