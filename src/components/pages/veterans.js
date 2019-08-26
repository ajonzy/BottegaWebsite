import React from 'react'
import { Link } from "react-router-dom"

import Header from "../resources/headerMain"
import Footer from "../resources/footerMain"
import HeaderBanner from "../resources/headerBanner"
import LegalBanner from "../resources/legalBanner"

import VeteranBanner from "../../../static/assets/images/homepage/veteran_background.jpg"
import CollegeCredit from "../../../static/assets/images/homepage/college-credit.png"
import CourseDescription from "../../../static/assets/images/homepage/course-description.jpg"
import ParttimePromo from "../../../static/assets/images/homepage/parttime-promotion.jpg"
import PythonJS from "../../../static/assets/images/homepage/Python-JS.png"
import Quotes from "../../../static/assets/images/homepage/quotes.png"
import Employers from "../../../static/assets/images/homepage/employers.png"
import BottegaDifference from "../../../static/assets/images/homepage/bottega-difference.jpg"
import ABCNews from "../../../static/assets/images/homepage/abcnews.png"
import Forbes from "../../../static/assets/images/homepage/forbes.png"
import KUTV from "../../../static/assets/images/homepage/kutv.png"
import Telemundo from "../../../static/assets/images/homepage/telemundo.png"
import YahooFinance from "../../../static/assets/images/homepage/yahoo-finance.png"


export default function veterans() {
    return (
        <div className="veterans">
            <Header />
            <div className="veterans-content-wrapper">
                <HeaderBanner 
                    banner={VeteranBanner}
                    header={<h1 style={{marginBottom: "22px"}}>Now Accepting Applications<br/>From US Veterans</h1>}
                    subHeader={<h4 style={{fontFamily: "'Roboto Mono', monospace", fontSize: "19px", fontWeight: "300"}}>Bottega’s best in class curriculum delivers <br/>programs backed by regional accreditation and <br/>college credit recommendations (Through <a href="http://www2.acenet.edu/credit/?fuseaction=browse.getOrganizationDetail&FICE=1009331">ACE</a>) to <br/>many universities.</h4>}
                />
                <div className="course-display-section-wrapper">
                    <div className="course-display-header">
                        <span>Training To Get You Certified And Job Ready In 12 Weeks!</span>
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
                            <h6><a href="https://apply.bottega.tech/">Apply&nbsp;now<span>></span></a></h6>
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
                            <h6><a href="https://apply.bottega.tech/">Apply&nbsp;now<span>></span></a></h6>
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
                            <h6><a href="https://apply.bottega.tech/">Apply&nbsp;now<span>></span></a></h6>
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
            
                <div className="bottega-difference-section-wrapper">
                    <div className="bottega-difference-section-content">
                        <span>The Bottega Difference</span>
                        <h2>Current Tech & Lifelong Learning</h2>
                        <div className="bottega-difference-lists">
                            <div className="bottega-difference-list-block">
                                <span>Customized Curriculum</span>
                                <ul>
                                    <li>Created by Subject-Matter Experts</li>
                                    <li>Individualized Learning Paths</li>
                                    <li>Industry Specific Pathways</li>
                                    <li>Dynamic Classroom Delivery</li>
                                </ul>
                            </div>

                            <div className="bottega-difference-list-block">
                                <span>Immersive Program</span>
                                <ul>
                                    <li>In-Person & Remote Learning Options</li>
                                    <li>Instructor & Mentor Support</li>
                                    <li>Student Project Collaboration</li>
                                    <li>Competency Based Education</li>
                                </ul>
                            </div>

                            <div className="bottega-difference-list-block">
                                <span>Career Services</span>
                                <ul>
                                    <li>Resume & Interview Preparation</li>
                                    <li>Online Job Placement Resources</li>
                                    <li>Advisor Support Beyond Graduation</li>
                                    <li>Continued Learning & Professional Training</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bottega-difference-img" style={{backgroundImage: `url(${BottegaDifference})`}} />
                </div>
            
                <div className="news-sources-section-wrapper" style={{marginTop: "100px"}}>
                    <div className="news-sources-section-content">
                        <div className="news-sources-banner">
                            <div className="news-source">
                                <a href="https://finance.yahoo.com/news/utahs-tech-outcomes-show-way-194500139.html">
                                    <img src={YahooFinance} alt=""/>
                                </a>
                            </div>

                            <div className="news-source">
                                <a href="https://www.abc6.com/story/40687928/utah-doubles-down-on-solving-nations-tech-shortage">
                                    <img src={ABCNews} alt=""/>
                                </a>
                            </div>

                            <div className="news-source">
                                <a href="http://www.kasa.com/story/40647153/bottega-to-train-5000-coding-foundations-apprentices-and-1000-full-stack-engineers-annually-in-jamaica-starting-in-2020">
                                    <img src={Telemundo} alt=""/>
                                </a>
                            </div>

                            <div className="news-source">
                                <a href="https://www.forbes.com/sites/larrymyler/2017/04/25/how-a-solution-to-one-of-your-problems-could-be-your-next-business/#369bf3fd5ac5">
                                    <img src={Forbes} alt=""/>
                                </a>
                            </div>

                            <div className="news-source">
                                <a href="http://kutv.com/news/2news-this-morning/live-with-casey-learning-to-code-with-bottega">
                                    <img src={KUTV} alt=""/>
                                </a>
                            </div>

                            <div className="news-source">
                                <a href="https://finance.yahoo.com/news/utahs-tech-outcomes-show-way-194500139.html">
                                    <img src={YahooFinance} alt=""/>
                                </a>
                            </div>

                            <div className="news-source">
                                <a href="https://www.abc6.com/story/40687928/utah-doubles-down-on-solving-nations-tech-shortage">
                                    <img src={ABCNews} alt=""/>
                                </a>
                            </div>

                            <div className="news-source">
                                <a href="http://www.kasa.com/story/40647153/bottega-to-train-5000-coding-foundations-apprentices-and-1000-full-stack-engineers-annually-in-jamaica-starting-in-2020">
                                    <img src={Telemundo} alt=""/>
                                </a>
                            </div>

                            <div className="news-source">
                                <a href="https://www.forbes.com/sites/larrymyler/2017/04/25/how-a-solution-to-one-of-your-problems-could-be-your-next-business/#369bf3fd5ac5">
                                    <img src={Forbes} alt=""/>
                                </a>
                            </div>

                            <div className="news-source">
                                <a href="http://kutv.com/news/2news-this-morning/live-with-casey-learning-to-code-with-bottega">
                                    <img src={KUTV} alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

               <LegalBanner />
            </div>
            <Footer />
        </div>
    )
}