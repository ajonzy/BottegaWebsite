import React, { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"

import Header from "../resources/headerMain"
import Footer from "../resources/footerMain"
import HeaderVideo from "../resources/headerVideo"
import LegalBanner from "../resources/legalBanner"

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
import BottegaDifference from "../../../static/assets/images/homepage/bottega-difference.jpg"
import Quotes2 from "../../../static/assets/images/homepage/quotes2.png"
import Quotes3 from "../../../static/assets/images/homepage/quotes3.png"
import Testimonial1 from "../../../static/assets/images/homepage/testimonial1.jpg"
import Testimonial2 from "../../../static/assets/images/homepage/testimonial2.jpg"
import Testimonial3 from "../../../static/assets/images/homepage/testimonial3.jpg"
import Testimonial4 from "../../../static/assets/images/homepage/testimonial4.jpg"
import ABCNews from "../../../static/assets/images/homepage/abcnews.png"
import Forbes from "../../../static/assets/images/homepage/forbes.png"
import KUTV from "../../../static/assets/images/homepage/kutv.png"
import Telemundo from "../../../static/assets/images/homepage/telemundo.png"
import YahooFinance from "../../../static/assets/images/homepage/yahoo-finance.png"

export default function home() {
    const [testimonial, setTestimonial] = useState(0)
    const updateTestimonial = useRef()

    useEffect(() => {
        updateTestimonial.current = updateTestimonial.current !== -1 ? setInterval(() => setTestimonial(testimonial === 3 ? 0 : testimonial + 1), 7000) : -1

        return () => {
            clearInterval(updateTestimonial.current)
        }
    })

    const handleTestimonialSelectorClick = (num) => {
        clearInterval(updateTestimonial.current)
        updateTestimonial.current = -1
        setTestimonial(num)
    }

    return (
        <div className="home">
            <Header />
            <div className="home-content-wrapper">
                <HeaderVideo 
                    video={BottegaVideo} 
                    header={<h1 style={{marginBottom: "22px"}}>Coding Skills<br/>To Get You Hired</h1>} 
                    subHeader={<h4 style={{fontFamily: "'Roboto Mono', monospace", fontSize: "19px", fontWeight: "300"}}>Bottega’s best in class curriculum delivers programs<br/>that are backed by The American College of Education<br/>(<a href="http://www2.acenet.edu/credit/?fuseaction=browse.getOrganizationDetail&amp;FICE=1009331">ACE</a>). This accreditation recommends college credit be<br/>awarded for Bottega courses at many universities.</h4>} 
                />

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
                                <p><span className="apply-arrow">></span></p>
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
                                <p><span className="apply-arrow">></span></p>
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
                                <p><span className="apply-arrow">></span></p>
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
            
                <div className="testimonials-section-wrapper">
                    <div className="testimonials-section-content">
                        <div className="testimonials-description-wrapper">
                            <h3>Check Out Our Students Who Are Ready To Hit The Market Running</h3>
                            <p>We care about the outcome of our students. We do everything we can to help their success.</p>
                            <div className="testimonials-button">
                                <a href="http://talent.bottega.tech/">Students<span className="hover-arrow"><FontAwesomeIcon icon={faLongArrowAltRight} /></span></a>
                            </div>
                        </div>

                        <div className="testimonials-display-wrapper">
                            <div className="testimonials-blocks-wrapper" style={{transform: `translateX(-${722 * testimonial}px)`}}>
                                <div className="testimonials-block">
                                    <div className="quotes-images-wrapper">
                                        <img src={Quotes3} alt=""/>
                                        <img src={Quotes2} alt=""/>
                                    </div>
                                    <p>Bottega is definitely something to get involved in. They have amazing teachers that really help you understand what to do in coding. The information is very thorough. The staff will help and work with you every way possible because they know this program is worth your time and effort for a better career. I love bottega and can't give enough great reviews about it and would recommend it to anyone. </p>
                                    <div className="testimonial-author">
                                        <div className="author-img" style={{backgroundImage: `url(${Testimonial1})`}} />

                                        <div className="author-text">
                                            <span className="name">Michael Hettich</span>
                                            <span className="location">Full Stack - Lehi, UT</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="testimonials-block">
                                    <div className="quotes-images-wrapper">
                                        <img src={Quotes3} alt=""/>
                                        <img src={Quotes2} alt=""/>
                                    </div>
                                    <p>What can I say.... This place offers a first class education from people with amazing amounts of knowledge. The instructors are great to work with. The transformation I have seen in myself and everyone else in my cohort has been incredible. From day one to where I am now with a little over 6 weeks left, I feel as if I have finally found something not that I can just do but something I'm ment to do. Bottega tech is amazing. </p>
                                    <div className="testimonial-author">
                                        <div className="author-img" style={{backgroundImage: `url(${Testimonial2})`}} /> 

                                        <div className="author-text">
                                            <span className="name">Levi Smith</span>
                                            <span className="location">Full Stack - Lehi, UT</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="testimonials-block">
                                    <div className="quotes-images-wrapper">
                                        <img src={Quotes3} alt=""/>
                                        <img src={Quotes2} alt=""/>
                                    </div>
                                    <p>Awesome program! I have learned so much since I've been here. For the tuition I paid I feel like I've gotten ten fold the knowledge! This has been a real game changer in my life and I'm glad I made the choice to come here. </p>
                                    <div className="testimonial-author">
                                        <div className="author-img" style={{backgroundImage: `url(${Testimonial3})`}} /> 
                                        
                                        <div className="author-text">
                                            <span className="name">Dan Coley</span>
                                            <span className="location">Full Stack - Lehi, UT</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="testimonials-block">
                                    <div className="quotes-images-wrapper">
                                        <img src={Quotes3} alt=""/>
                                        <img src={Quotes2} alt=""/>
                                    </div>
                                    <p>I came in not knowing anything about development. After only a short couple months the growth has been wild. The content is very easy to understand and there is alwasy an instructor to answer any questions or walk you through any issues you are having. Very fun, driven, and layed back group. We have alot of fun but do a ton of work while we are doing it. </p>
                                    <div className="testimonial-author">
                                        <div className="author-img" style={{backgroundImage: `url(${Testimonial4})`}} /> 

                                        <div className="author-text">
                                            <span className="name">Christoph M</span>
                                            <span className="location">Full Stack - Lehi, UT</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="testimonials-selectors">
                        <div className="selector-wrapper" onClick={() => handleTestimonialSelectorClick(0)}>
                            <div className={testimonial === 0 ? "selector-big" : "selector"} />
                        </div>

                        <div className="selector-wrapper" onClick={() => handleTestimonialSelectorClick(1)}>
                            <div className={testimonial === 1 ? "selector-big" : "selector"} />
                        </div>

                        <div className="selector-wrapper" onClick={() => handleTestimonialSelectorClick(2)}>
                            <div className={testimonial === 2 ? "selector-big" : "selector"} />
                        </div>

                        <div className="selector-wrapper" onClick={() => handleTestimonialSelectorClick(3)}>
                            <div className={testimonial === 3 ? "selector-big" : "selector"} />
                        </div>
                    </div>
                </div>
            
                <div className="news-sources-section-wrapper">
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