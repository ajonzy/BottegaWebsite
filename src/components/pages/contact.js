// TODO Add form submit verification messages
import React, {useState, useEffect} from 'react'
import ReCAPTCHA from "react-google-recaptcha";

import Header from "../resources/headerMain"
import Footer from "../resources/footerMain"

export default function contact() {
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [first, updateFirst] = useState("")
    const [last, updateLast] = useState("")
    const [phone, updatePhone] = useState("")
    const [email, updateEmail] = useState("")
    const [purpose, updatePurpose] = useState("---")
    const [message, updateMessage] = useState("")

    const [emptyFieldsError, updateEmptyFieldsError] = useState(false)
    const [formSubmitError, updateFormSubmitError] = useState(false)
    const [formSubmitted, updateFormSubmitted] = useState(false)

    const updateButton = () => { setButtonDisabled(!buttonDisabled) }

    useEffect(() => {
        const navbar = document.getElementById("navbar");
        const arrow = document.getElementById("back-arrow");

        navbar.classList.add("extra-border-bottom")
        arrow.classList.add("extra-border")
    })

    const handleChange = (callback) => {
        callback(event.target.value)
    }

    const handleSubmit = () => {
        event.preventDefault()
        updateEmptyFieldsError(false)

        if (first == "" || last == "" || phone == "" || email == "" || purpose == "---" || message == "") {
            updateEmptyFieldsError(true)
        }
        else {
            fetch("http://127.0.0.1:5000/send_contact_email", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    first: first,
                    last: last,
                    phone: phone,
                    email: email,
                    purpose: purpose,
                    message: message
                })
            })
            .then(data => {
                updateFormSubmitted(true)
            })
            .catch(error => {
                updateFormSubmitError(true)
            })
        }
    }

    return (
        <div className="contact">
            <Header />
            <div className="contact-content-wrapper">
                <div className="content-left">
                    <h3>Request Information</h3>
                    <p>Just leave us some basic information and we will get back to you as soon as possible.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="name-inputs">
                            <input type="text" value={first} onChange={() => handleChange(updateFirst)} placeholder="First Name"/>
                            <div className="seperator" />
                            <input type="text" value={last} onChange={() => handleChange(updateLast)} placeholder="Last Name"/>
                        </div>

                        <input type="text" value={email} onChange={() => handleChange(updateEmail)} placeholder="Email"/>
                        <input type="text" value={phone} onChange={() => handleChange(updatePhone)} placeholder="Phone #"/>
                        <label>Purpose of Inquiry</label>
                        <select value={purpose} onChange={() => handleChange(updatePurpose)}>
                            <option>---</option>
                            <option>Student Program Information</option>
                            <option>Employer Network Partnerships</option>
                            <option>Teacher Endorsements</option>
                            <option>University Partnerships</option>
                        </select>
                        <textarea value={message} onChange={() => handleChange(updateMessage)} placeholder="Your Message"/>
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