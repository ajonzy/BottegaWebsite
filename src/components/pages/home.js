import React, { useState } from 'react'
import { Link } from "react-router-dom"

import Header from "../resources/headerMain"

import CollegeCredit from "../../../static/assets/images/homepage/college-credit.png"
import CourseDescription from "../../../static/assets/images/homepage/course-description.jpg"
import ParttimePromo from "../../../static/assets/images/homepage/parttime-promotion.jpg"
import FrontEnd from "../../../static/assets/images/homepage/Front-End.png"
import MachineLearning from "../../../static/assets/images/homepage/Machine-Learning.png"
import PythonJS from "../../../static/assets/images/homepage/Python-JS.png"
import RubyRails from "../../../static/assets/images/homepage/Ruby-Rails.png"
import BottegaVideo from "../../../static/assets/images/homepage/Bottega-video.mp4"
import Quotes from "../../../static/assets/images/homepage/quotes.png"
import Employers from "../../../static/assets/images/homepage/employers.png"

export default function home() {

    return (
        <div className="home">
            <Header />
            <div className="home-content-wrapper">
                <div className="video-display-wrapper">
                    <video width="100%" height="100%" src={BottegaVideo} preload="auto" loop autoPlay muted></video>          
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
                            <img src={PythonJS} alt=""/>
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
                            <img src={FrontEnd} alt=""/>
                            <h6 className="course-title">Front End Development</h6>
                            <h6 className="course-subtitle">Beginner</h6>
                            <h5 className="course-description">Build visually, highly employable skills</h5>
                            <div className="course-button">
                                <a href="/front-end-part-time/">Learn&nbsp;More</a>
                            </div>
                        </div>

                        <div className="course-block">
                            <img src={RubyRails} alt=""/>
                            <h6 className="course-title">Full Stack Ruby</h6>
                            <h6 className="course-subtitle">Advanced</h6>
                            <h5 className="course-description">High paying salary, specialization</h5>
                            <div className="course-button">
                                <a href="/ruby-full-stack-part-time-remote/">Learn&nbsp;More</a>
                            </div>
                        </div>

                        <div className="course-block">
                            <img src={MachineLearning} alt=""/>
                            <h6 className="course-title">Data Science</h6>
                            <h6 className="course-subtitle">Advanced</h6>
                            <h5 className="course-description">Bleeding edge problem solving, logic</h5>
                            <div className="course-button">
                                <div className="coming-soon-block">Coming&nbsp;Soon</div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="course-description-section-wrapper">
                    <img src={CourseDescription} alt=""/>
                    <div className="course-description-section">
                        <div className="course-description-block">
                            <h3>Full Time On-Campus</h3>
                            <h5>12 Weeks</h5>
                            <h5>9am to 5pm + after hours</h5>
                            <p>
                                Class Hours: 600+<br/>
                                Daily instructor led class time<br/>
                                Attend our Lehi, UT campus<br/>
                                Financing Available
                            </p>
                            <a href="https://apply.bottega.tech/" className="apply-wrapper">
                                Apply&nbsp;now
                                <p><div>></div></p>
                            </a>
                        </div>

                        <div className="course-description-block">
                            <h3>Part Time Online</h3>
                            <h5>6-9 Months</h5>
                            <h5>2-3 hours per day</h5>
                            <p>
                                Class hours: 600+<br/>
                                Unlimited online TA assistance<br/>
                                Guided online learning path<br/>
                                Financing Available
                            </p>
                            <a href="https://apply.bottega.tech/" className="apply-wrapper">
                                Apply&nbsp;now
                                <p><div>></div></p>
                            </a>
                        </div>

                        <div className="course-description-block">
                            <h3>Full Time Online</h3>
                            <h5>12 Weeks</h5>
                            <h5>9am to 5pm + after hours</h5>
                            <p>
                                Class Hours: 600+<br/>
                                Daily instructor led class time<br/>
                                Attend by remotely accessing course webinars<br/>
                                Financing Available
                            </p>
                            <a href="https://apply.bottega.tech/" className="apply-wrapper">
                                Apply&nbsp;now
                                <p><div>></div></p>
                            </a>
                        </div>
                    </div>
                </div>
            
                <div className="parttime-promotion-section-wrapper" style={{backgroundImage: `url(${ParttimePromo})`}}>
                    <div className="parttime-promotion-content">
                        <h2>Keep Your Day Job, Learn Part Time</h2>
                        <h5>Can’t attend full time? Learn anytime anywhere with our part time online program. We built a game changing online learning software to guide you to success.  See your progress, mix and match skill based learning, all with instructors and access to mentors for when you get stuck.</h5>
                        <div className="parttime-promotion-button">
                            <Link to="/python-react-part-time/">Learn More</Link>
                        </div>
                    </div>
                </div>
            
                <div className="college-credit-promotion-section-wrapper">
                    <div className="college-credit-section-content">
                        <div className="college-credit-section-text">
                            <div className="college-credit-text-block">
                                <h2>Courses So Good They Come With College Credit <a href="http://www2.acenet.edu/credit/?fuseaction=browse.getOrganizationDetail&FICE=1009331">Recommendations</a></h2>
                                <div className="spacer"></div>
                                <span>Yup! We’re the only bootcamp offering a transcript accepted by universities.</span>
                            </div>

                            <div className="college-credit-text-block">
                                <h2>Bringing Students From Day 1 To Hired</h2>
                                <span>Our intensive curriculum is centered around building a foundation for students to find placement as an entry level developer. We believe any student determined to learn can become a developer with our world-class courses.</span>
                            </div>
                        </div>

                        <div className="college-credit-img">
                            <img src={CollegeCredit} alt=""/>
                        </div>
                    </div>
                </div>

                <div className="recruitment-quote-wrapper">
                    <div className="recruitment-quote-content">
                        <img src={Quotes} alt=""/>
                        <h4>"Bottega is the first and only coding school that SEARCH Group Partners regularly contacts for candidate recommendations. Bottega grads perform extremely well in the interview process and have continuously won jobs over students from other schools. I find them to be well prepared, polished, and have no hesitation to introduce them to my clients."</h4>
                        <h5>Kat Campagna</h5>
                        <h6>Client Relations and Recruiting Manager—SEARCH Group Partners</h6>
                    </div>
                </div>
            
                <div className="employers-section-wrapper">
                    <div className="employers-section-content">
                        <h2>Courses Targeted To Get You Hired!</h2>
                        <p>Our graduates get hired by some of the<br/>world’s best companies.</p>
                        <Link to="/employer-list/">Click here to see more!</Link>
                    </div>

                    <img src={Employers} alt=""/>
                </div>
            </div>
        </div>
    )
}