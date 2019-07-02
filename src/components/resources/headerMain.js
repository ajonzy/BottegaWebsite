import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faSignInAlt, faScroll } from "@fortawesome/free-solid-svg-icons"

import Logo from "../../../static/assets/images/bottega-logo-black.png"

export default function haedermain() {
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

            <div className="header-bottom">
                <div className="nav-links-wrapper">
                    <div className="nav-link">
                        <Link to="/python-react-full-time">Programs&nbsp;<span class="dropdown-arrow">&#x02C5;</span></Link>
                        <div className="nav-dropdown">
                            <Link to="/python-react-full-time">Python React Full Time</Link>
                            <Link to="/python-react-full-time-remote">Python React Full Time Remote</Link>
                            <Link to="/python-react-part-time">Python React Part Time</Link>
                            <Link to="/front-end-part-time">Front-End Part Time</Link>
                        </div>
                    </div>

                    <div className="nav-link">
                        <Link to="/outcomes">Outcomes&nbsp;<span class="dropdown-arrow">&#x02C5;</span></Link>
                        <div className="nav-dropdown">
                            <Link to="/employer-list">Employer List</Link>
                        </div>
                    </div>

                    <div className="nav-link">
                        <Link to="/instructor-endorsements">Instructor&nbsp;Endorsements</Link>
                    </div>

                    <div className="nav-link">
                        <Link to="/university-partners">University&nbsp;Partners&nbsp;<span class="dropdown-arrow">&#x02C5;</span></Link>
                        <div className="nav-dropdown">
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