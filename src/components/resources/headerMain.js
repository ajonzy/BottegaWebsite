import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faSignInAlt, faScroll } from "@fortawesome/free-solid-svg-icons"

import Logo from "../../../static/assets/images/bottega-logo-black.png"

export default function headerMain() {
    return (
        <div className="header-main">
            <div className="header-top">
                <div className="social-media-wrapper">
                    <Link to="https://www.facebook.com/bottegaschool/">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </Link>

                    <Link to="https://www.linkedin.com/school/bottega-tech/">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </Link>

                    <Link to="https://www.instagram.com/bottega.tech/?hl=en">
                        <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                </div>
            </div>

            <div className="header-center">
                <div className="logo-login-wrapper">
                    <div className="log">
                        <Link to="/">
                            <img src={Logo} alt=""/>
                        </Link>
                    </div>
                    
                    <div className="login-apply-button-wrapper">
                        <div className="login-wrapper button-wrapper">
                            <div className="nav-link-circle">
                                <Link to="https://bottega.devcamp.com/users/sign_in">
                                    <FontAwesomeIcon icon={faSignInAlt} />
                                </Link>
                            </div>

                            <div className="nav-link">
                                <Link to="https://bottega.devcamp.com/users/sign_in">DevCamp&nbsp;Login</Link>
                            </div>
                        </div>

                        <div className="apply-wrapper button-wrapper">
                            <div className="nav-link-circle">
                                <Link to="https://apply.bottega.tech">
                                    <FontAwesomeIcon icon={faScroll} />
                                </Link>
                            </div>

                            <div className="nav-link">
                                <Link to="https://apply.bottega.tech">Apply&nbsp;Here</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-bottom" id="navbar">
                <div className="nav-links-wrapper">
                    <div className="nav-link" style={{width: "77.5px"}}>
                        <Link to="/python-react-full-time">Programs&nbsp;<span className="dropdown-arrow">&#x02C5;</span></Link>
                        <div className="nav-dropdown" style={{width: "195px"}}>
                            <Link to="/python-react-full-time">Python&nbsp;React&nbsp;Full&nbsp;Time</Link>
                            <Link to="/python-react-full-time-remote">Python&nbsp;React&nbsp;Full&nbsp;Time&nbsp;Remote</Link>
                            <Link to="/python-react-part-time">Python&nbsp;React&nbsp;Part&nbsp;Time</Link>
                            <Link to="/front-end-part-time">Front&nbsp;End&nbsp;Part&nbsp;Time</Link>
                        </div>
                    </div>

                    <div className="nav-link" style={{width: "80.8px"}}>
                        <Link to="/outcomes">Outcomes&nbsp;<span className="dropdown-arrow">&#x02C5;</span></Link>
                        <div className="nav-dropdown" style={{width: "85px"}}>
                            <Link to="/employer-list">Employer&nbsp;List</Link>
                        </div>
                    </div>

                    <div className="nav-link">
                        <Link to="/instructor-endorsements">Instructor&nbsp;Endorsements</Link>
                    </div>

                    <div className="nav-link" style={{width: "134.1px"}}>
                        <Link to="/university-partners">University&nbsp;Partners&nbsp;<span className="dropdown-arrow">&#x02C5;</span></Link>
                        <div className="nav-dropdown" style={{width: "73px"}}>
                            <Link to="/universities">Universities</Link>
                        </div>
                    </div>

                    <div className="nav-link">
                        <Link to="/veterans">Veterans</Link>
                    </div>

                    <div className="nav-link">
                        <a href="https://press.bottega.tech/">Press</a>
                    </div>

                    <div className="nav-link">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfwgZ5RogSsCaYhs9vbDev8Olu6-mUHB8Rt_wgeIENfL37jwQ/viewform?usp=sf_link">Jamaica&nbsp;Applicants</a>
                    </div>
                </div>
            </div>
        </div>
    )
}