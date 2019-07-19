import React from 'react'
import { Link } from 'react-router-dom'

import Logo from "../../../static/assets/images/bottega-logo-white.png"

export default function footerMain() {
    return (
        <div className="footer-main">
            <div className="footer-main-content">
                <div className="footer-top">
                    <div className="logo">
                        <Link to="/">
                            <img src={Logo} alt=""/>
                        </Link>
                    </div>

                    <div className="quick-links">
                        <h4>Quick Links</h4>
                        <Link to="/faq/">FAQ</Link>
                        <Link to="/accreditation/">Accreditation</Link>
                        <Link to="/contact/">Contact</Link>
                    </div>

                    <div className="resources">
                        <h4>Resources</h4>
                        <a href="https://apply.bottega.tech/applicant/signup?source=55543D50DD20E9X">Apply</a>
                        <Link to ="/privacy-policy/">Privacy Policy</Link>
                        <a href="/static/assets/downloads/logo-pack.zip" download>Download Press Kit</a>
                    </div>

                    <div className="contact">
                        <h4>Say Hello</h4>
                        <p>
                            Phone: (801) 980-3664<br/>
                            Email: support@bottega.tech<br/>
                            Location: 2912 Executive Pkwy<br/>
                            STE #220 Lehi, UT 84043
                        </p>
                    </div>
                </div>
            
                <div className="hr" />

                <div className="footer-bottom">
                    <span>Copyright &#169; 2019. All right reserved</span>
                </div>
            </div>
        </div>
    )
}