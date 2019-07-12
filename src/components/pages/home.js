import React, { useState } from 'react'
import { Link } from "react-router-dom"

import Header from "../resources/headerMain"

export default function home() {

    return (
        <div className="home">
            <Header />
            <div className="home-content-wrapper">
                <div className="video-display-wrapper">
                    <video width="100%" height="100%" src="https://bottega.tech/wp-content/uploads/2019/06/Bottega-video-2.mp4?id=4090" preload="auto" loop autoPlay muted></video>          
                    <div className="video-display-text">
                        <h1>Coding Skills<br/>To Get You Hired</h1>
                        <h4>Bottega’s best in class curriculum delivers programs that are backed by The American College of Education (<a href="http://www2.acenet.edu/credit/?fuseaction=browse.getOrganizationDetail&amp;FICE=1009331">ACE</a>). This accreditation recommends college credit be awarded for Bottega courses at many universities.</h4>
                    </div>          
                </div>

                <div className="course-display-section-wrapper">
                    <div className="course-display-header">
                        <span>Choose Your Course</span>
                        <h5 className="p1">We offer the most up to date computer science tracks in the world, because we work with top employers and update them every 90 days.</h5>
                        <h5 className="p2">Our courses are designed to teach you through deep hands on learning to get you into the job market in the career of your dreams, with the help you need to understand and stay motivated every step of the way.</h5>
                    </div>

                    <div className="course-display">
                        <div className="course-block">
                            <img src="https://bottega.tech/wp-content/uploads/2018/03/Python-JS.png" alt=""/>
                            <h6 className="course-title">Full Stack Python + React</h6>
                            <h6 className="course-subtitle">Beginner</h6>
                            <h5 className="course-description">Explosive demand, Engineering track</h5>
                            <div className="course-button">
                                <div className="course-dropdown">Learn&nbsp;More</div>
                            </div>

                            <div className="learn-more-list">
                                <Link to="/python-react-full-time/">Full Time On Campus</Link>
                                <Link to="/python-react-part-time/">Part Time Remote</Link>
                                <Link to="/python-react-full-time-remote/">Full Time Remote</Link>
                            </div>
                        </div>

                        <div className="course-block">
                            <img src="https://bottega.tech/wp-content/uploads/2018/03/Front-End.png" alt=""/>
                            <h6 className="course-title">Front End Development</h6>
                            <h6 className="course-subtitle">Beginner</h6>
                            <h5 className="course-description">Build visually, highly employable skills</h5>
                            <div className="course-button">
                                <a href="/front-end-part-time/">Learn&nbsp;More</a>
                            </div>
                        </div>

                        <div className="course-block">
                            <img src="https://bottega.tech/wp-content/uploads/2018/03/Ruby-Rails.png" alt=""/>
                            <h6 className="course-title">Full Stack Ruby</h6>
                            <h6 className="course-subtitle">Advanced</h6>
                            <h5 className="course-description">High paying salary, specialization</h5>
                            <div className="course-button">
                                <a href="/ruby-full-stack-part-time-remote/">Learn&nbsp;More</a>
                            </div>
                        </div>

                        <div className="course-block">
                            <img src="https://bottega.tech/wp-content/uploads/2018/03/Machine-Learning.png" alt=""/>
                            <h6 className="course-title">Data Science</h6>
                            <h6 className="course-subtitle">Advanced</h6>
                            <h5 className="course-description">Bleeding edge problem solving, logic</h5>
                            <div className="course-button">
                                <div className="coming-soon-block">Coming&nbsp;Soon</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}