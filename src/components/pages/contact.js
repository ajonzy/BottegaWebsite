// TODO Hook up form to email
import React, {useState, useEffect} from 'react'
import ReCAPTCHA from "react-google-recaptcha";

import Header from "../resources/headerMain"
import Footer from "../resources/footerMain"

export default function contact() {
    const [buttonDisabled, setButtonDisabled] = useState(true)

    const updateButton = () => { setButtonDisabled(!buttonDisabled) }

    useEffect(() => {
        const navbar = document.getElementById("navbar");
        const arrow = document.getElementById("back-arrow");

        navbar.classList.add("extra-border-bottom")
        arrow.classList.add("extra-border")
    })

    return (
        <div className="contact">
            <Header />
            <div className="contact-content-wrapper">
                <div className="content-left">
                    <h3>Request Information</h3>
                    <p>Just leave us some basic information and we will get back to you as soon as possible.</p>
                    <form>
                        <div className="name-inputs">
                            <input type="text" placeholder="First Name"/>
                            <div className="seperator" />
                            <input type="text" placeholder="Last Name"/>
                        </div>

                        <input type="text" placeholder="Email"/>
                        <input type="text" placeholder="Phone #"/>
                        <label>Purpose of Inquiry</label>
                        <select>
                            <option>---</option>
                            <option>Student Program Information</option>
                            <option>Employer Network Partnerships</option>
                            <option>Teacher Endorsements</option>
                            <option>University Partnerships</option>
                        </select>
                        <textarea placeholder="Your Message"/>
                        <ReCAPTCHA
                            id="university-partner-form-captcha"
                            sitekey="6LczsrEUAAAAABEhj5FH8efGAd417MoW6jzEKrB9"
                            onChange={updateButton} 
                        />
                        <button type="submit" disabled={buttonDisabled} style={buttonDisabled ? {opacity: ".5"} : null}>Send Message</button>
                    </form>
                </div>

                <div className="content-right">
                    <h3>Contact.</h3>
                    <p>We are headquartered in beautiful Utah with a campus in <br/>Lehi, Utah. If you’d like to see our campus, schedule a tour <br/>or give us a call.</p>
                    <p>support@bottega.tech <br/>801.980.3664</p>
                    <h5>Lehi, Utah</h5>
                    <p>2912 Executive Pkwy STE #220 <br/>Lehi, UT 84043</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}