// TODO: Update curriculum
import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons"

import Header from "../resources/headerMain"
import Footer from "../resources/footerMain"

import Jordan from "../../../static/assets/images/curriculum/jordan-hudgens.png"
import HTML from "../../../static/assets/images/curriculum/html.png"
import CSS from "../../../static/assets/images/curriculum/css.png"
import Javascript from "../../../static/assets/images/curriculum/javascript.png"
import JQuery from "../../../static/assets/images/curriculum/jquery.png"
import Ruby from "../../../static/assets/images/curriculum/ruby.png"
import RubyOnRails from "../../../static/assets/images/curriculum/ruby-on-rails.png"
import Devcamp from "../../../static/assets/images/curriculum/devcamp.png"

export default function curriculum() {
    const [selection, setSelection] = useState(1)

    return (
        <div className="curriculum">
            <Header />
            <div className="curriculum-content-wrapper">
                <div className="curriculum-content">
                    <div className="curriculum-header">
                        <div className="curriculum-header-content-wrapper">
                            <div className="header-text">
                                <h4>Curriculum is only as good as the people behind it</h4>
                                <p>Meet our master of curriculum. Jordan Hudgens is the CTO and Co-Founder of Bottega where he leads instruction and curriculum development for all of the Bottega code schools around the US.</p>
                                <p>As a developer for over the past decade, Jordan has traveled the world building applications and training individuals on a wide variety of topics, including: Ruby development, big data analysis, and software engineering.</p>
                                <div className="header-stats-blocks-wrapper">
                                    <div className="content-block">
                                        <div className="value">24,763</div>
                                        <div className="title">Total Students</div>
                                    </div>

                                    <div className="content-block">
                                        <div className="value">14</div>
                                        <div className="title">Years Experience</div>
                                    </div>

                                    <div className="content-block">
                                        <div className="value">4.6</div>
                                        <div className="title">Udemy Rating</div>
                                    </div>
                                </div>
                            </div>

                            <div className="header-image">
                                <img src={Jordan} alt=""/>
                            </div>
                        </div>
                    </div>
                
                    <div className="curriculum-testimonials-banner">
                        <div className="testimonials-banner-content-wrapper">
                            <div className="testimonials-viewport">
                                <div className="testimonial-blocks-wrapper" style={{transform: `translateX(-${470 * selection}px`}}>
                                    <div className="content-block">
                                        <h5>Cameron Reiter</h5>
                                        <p>“Excellent course! Especially the deep dives. This is the most comprehensive course I have found and taken. Great course for beginners and others already on the path to learning more advanced rails such as myself.” </p>
                                        <div className="stars">
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                    </div>
                                    
                                    <div className="content-block">
                                        <h5>Ron Holmes</h5>
                                        <p>“Fantastic - I really didn't want this course to end. It is a genuine teaching approach rather than the usual simply following along tutorials.” </p>
                                        <div className="stars">
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                    </div>

                                    <div className="content-block">
                                        <h5>Francisco José Hernández</h5>
                                        <p>“Very good course. It is very well explained with many good examples. I recommend it for everyone who wants to get fundamental knowledges of ruby on rails. It is for me the most complete course I have ever done in rails.” </p>
                                        <div className="stars">
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                    </div>

                                    <div className="content-block">
                                        <h5>Nilesh Pandey</h5>
                                        <p>“This course is just awesome hands down..Highly recommend it for anyone who wants to learn ruby on rails.The instructor is very engaging and clear in his teaching. No complains at all. very good Q&A support too.” </p>
                                        <div className="stars">
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                    </div>

                                    <div className="content-block">
                                        <h5>Pattersonei</h5>
                                        <p>“This is very thorough! I am about to start an internship that requires Ruby/Rails/React knowledge and I feel more confident that I'll make a good impression because of this course. Thanks so much for the depth of coverage!” </p>
                                        <div className="stars">
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                    </div>

                                    <div className="content-block">
                                        <h5>Cameron Reiter</h5>
                                        <p>“Excellent course! Especially the deep dives. This is the most comprehensive course I have found and taken. Great course for beginners and others already on the path to learning more advanced rails such as myself.” </p>
                                        <div className="stars">
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                    </div>

                                    <div className="content-block">
                                        <h5>Ron Holmes</h5>
                                        <p>“Fantastic - I really didn't want this course to end. It is a genuine teaching approach rather than the usual simply following along tutorials.” </p>
                                        <div className="stars">
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                    </div>
                                </div>
                            </div> 

                            <div className="testimonial-selectors">
                                <div className="selector" onClick={() => setSelection(1)}>
                                    <div className={`selector-content ${selection === 1 ? "selected" : null}`}/>
                                </div>
                                <div className="selector" onClick={() => setSelection(2)}>
                                    <div className={`selector-content ${selection === 2 ? "selected" : null}`}/>
                                </div>
                                <div className="selector" onClick={() => setSelection(3)}>
                                    <div className={`selector-content ${selection === 3 ? "selected" : null}`}/>
                                </div>
                                <div className="selector" onClick={() => setSelection(4)}>
                                    <div className={`selector-content ${selection === 4 ? "selected" : null}`}/>
                                </div>
                                <div className="selector" onClick={() => setSelection(5)}>
                                    <div className={`selector-content ${selection === 5 ? "selected" : null}`}/>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="curriculum-items">
                        <div className="curriculum-items-content-wrapper">
                            <h4>Core Curriculum Items</h4>
                            <div className="curriculum-items-blocks-wrapper">
                                <div className="content-block">
                                    <img src={HTML} alt=""/>
                                    <div className="content-text">
                                        <h5>HTML</h5>
                                        <span>HTML is one of the core technologies for building Web pages. HTML provides the structure of the page, along with graphics, text, links to other webpages, and other basic objects.</span>
                                    </div>
                                </div>

                                <div className="content-block">
                                    <img src={CSS} alt=""/>
                                    <div className="content-text">
                                        <h5>CSS</h5>
                                        <span>CSS stands for Cascading Style Sheets. CSS describes how HTML elements are to be displayed on screen, paper, or in other media. CSS saves a lot of work. It can control the layout of multiple web pages all at once and automatically make entire webpages adapt to fit different devices and screen sizes.</span>
                                    </div>
                                </div>

                                <div className="content-block">
                                    <img src={Javascript} alt=""/>
                                    <div className="content-text">
                                        <h5>Javascript</h5>
                                        <span>JavaScript is a client-side scripting language, which means the source code is processed by the client’s web browser rather than on the web server. This means JavaScript functions can run after a webpage has loaded without communicating with the server.</span>
                                    </div>
                                </div>

                                <div className="content-block">
                                    <img src={JQuery} alt=""/>
                                    <div className="content-text">
                                        <h5>jQuery</h5>
                                        <span>jQuery is a cross-platform JavaScript library designed to simplify the client-side scripting of HTML.</span>
                                    </div>
                                </div>

                                <div className="content-block">
                                    <img src={Ruby} alt=""/>
                                    <div className="content-text">
                                        <h5>Ruby</h5>
                                        <span>Ruby is a dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write. It’s popularity is due in a large part to the popularity of Rails.</span>
                                    </div>
                                </div>

                                <div className="content-block">
                                    <img src={RubyOnRails} alt=""/>
                                    <div className="content-text">
                                        <h5>Ruby on Rails</h5>
                                        <span>Rails is a web application development framework written in the Ruby language. It is designed to make programming web applications easier by making assumptions about what every developer needs to get started. It allows you to write less code while accomplishing more than many other languages and frameworks.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="curriculum-mid-banner">
                        <div className="mid-banner-content-wrapper">
                            <img src={Devcamp} alt=""/>
                            <h5>Try our free bootcamp prep course with DevCamp, our online learning tool</h5>
                            <a href="https://devcamp.com/users/sign_up">Sign Up Now</a>
                        </div>
                    </div>
                
                    <div className="curriculum-additional-items">
                        <div className="curriculum-additional-items-wrapper-content">
                            <h4>Additional Course Items</h4>
                            <div className="curriculum-additional-items-content">
                                <div className="left-items">
                                    <div className="content-block">
                                        <h5>Slim</h5>
                                        <span>Slim is a template language whose goal is reduce html syntax to the essential parts without becoming cryptic.</span>
                                    </div>

                                    <div className="content-block">
                                        <h5>Command Line</h5>
                                        <span>CLI is low level control over the computer and the development environment.</span>
                                    </div>

                                    <div className="content-block">
                                        <h5>TDD</h5>
                                        <span>Test-driven development (TDD) is a software development process that relies on the repetition of a very short development cycle: requirements are turned into very specific test cases, then the software is improved to pass the tests.</span>
                                    </div>

                                    <div className="content-block">
                                        <h5>Heroku</h5>
                                        <span>A commonly used back end infrastructure system. This familiarizes you will using cloud resources.</span>
                                    </div>

                                    <div className="content-block">
                                        <h5>Computer Science Basics</h5>
                                        <span>How to think and problem solve like a developer.</span>
                                    </div>

                                    <div className="content-block">
                                        <h5>Object Oriented Programming</h5>
                                        <span>Object-oriented programming (OOP) is a programming language model organized around objects rather than “actions” and data rather than logic. </span>
                                    </div>

                                    <div className="content-block">
                                        <h5>Markdown</h5>
                                        <span>Markdown is a lightweight markup language with plain text formatting syntax designed so that it can be converted to HTML and many other formats using a tool by the same name</span>
                                    </div>

                                    <div className="content-block">
                                        <h5>Postman</h5>
                                        <span>Postman helps you be more efficient while working with APIs. Using Postman, you can construct complex HTTP requests quickly, organize them in collections and share them with your co-workers.</span>
                                    </div>

                                    <div className="content-block">
                                        <h5>Code Style Guides</h5>
                                        <span>Accepted best practices in how code should be organized and written.</span>
                                    </div>

                                    <div className="content-block">
                                        <h5>IT Interviews</h5>
                                        <span>Get familiar with the types of questions and code challenges potential employers will expect you to be able to handle.</span>
                                    </div>
                                </div>

                                <div className="right-items">
                                    <div className="content-block">
                                        <h5>Saas</h5>
                                        <span>Sass is a scripting language that is interpreted into Cascading Style Sheets (CSS)</span>
                                    </div>

                                    <div className="content-block">
                                        <h5>Sinatra</h5>
                                        <span>A light-weight Ruby framework that is a good choice for some server applications.</span>
                                    </div>

                                    <div className="content-block">
                                        <h5>Amazon Web Services</h5>
                                        <span>A commonly used back end infrastructure system. This familiarizes you will using cloud resources.</span>
                                    </div>

                                    <div className="content-block">
                                        <h5>Git</h5>
                                        <span>Git is a version control system that is used for software development and other version control tasks.</span>
                                    </div>

                                    <div className="content-block">
                                        <h5>Database Theory</h5>
                                        <span>The basics of database normalization and architecture.</span>
                                    </div>

                                    <div className="content-block">
                                        <h5>Paired Programming</h5>
                                        <span>Pair programming is an agile software development technique in which two programmers work together at one workstation. One, the driver, writes code while the other, the observer or navigator, reviews each line of code as it is typed in. The two programmers switch roles frequently.</span>
                                    </div>

                                    <div className="content-block">
                                        <h5>UnitTests</h5>
                                        <span>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. Unit testing is often automated but it can also be done manually.</span>
                                    </div>

                                    <div className="content-block">
                                        <h5>Airbrake</h5>
                                        <span>Airbrake Bug Tracker captures errors and aggregates the results for developer review.</span>
                                    </div>

                                    <div className="content-block">
                                        <h5>Debugging</h5>
                                        <span>In computers, debugging is the process of locating and fixing or bypassing bugs (errors) in computer program code or the engineering of a hardware device. To debug a program or hardware device is to start with a problem, isolate the source of the problem, and then fix it.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}