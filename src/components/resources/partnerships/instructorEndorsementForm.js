// TODO Hook up form to email
import React, {useState} from 'react'
import ReCAPTCHA from "react-google-recaptcha";

export default function instructorEndorsementForm() {
    const [buttonDisabled, setButtonDisabled] = useState(true)

    const updateButton = () => { setButtonDisabled(!buttonDisabled) }

    return (
        <div id="Form" className="instructor-endorsement-form">
            <div className="instructor-endorsement-form-content-wrapper">
                <h4>Request Info for the Bottega Endorsement Program</h4>
                <p>We’re excited you have interest in our endorsement program. Fill out the form to get started.</p>
                <h5>(all fields are required, including <a href="https://www.uen.org/cactus/logon.do">CACTUS Record Number</a>)</h5>
                <form>
                    <div className="inputs-wrapper">
                        <input type="text" placeholder="First Name"/>
                        <input type="text" placeholder="Last Name"/>
                        <input type="text" placeholder="Phone Number"/>
                        <input type="text" placeholder="Email"/>
                        <input type="text" placeholder="City"/>
                        <input type="text" placeholder="State"/>
                        <input type="text" placeholder="District"/>
                        <input type="text" placeholder="School"/>
                        <input type="text" placeholder="CACTUS Record Number"/>
                    </div>
                    <ReCAPTCHA
                        id="university-partner-form-captcha"
                        sitekey="6LczsrEUAAAAABEhj5FH8efGAd417MoW6jzEKrB9"
                        onChange={updateButton} 
                    />
                    <button type="submit" disabled={buttonDisabled} style={buttonDisabled ? {opacity: ".5"} : null}>Submit Application</button>
                </form>
            </div>
        </div>
    )
}