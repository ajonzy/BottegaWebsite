import React, {useState} from 'react'
import ReCAPTCHA from "react-google-recaptcha";

export default function universityPartnerForm() {
    const [buttonDisabled, setButtonDisabled] = useState(true)

    const updateButton = () => { setButtonDisabled(!buttonDisabled) }

    return (
        <div className="university-partner-form">
            <div className="university-partner-form-content-wrapper">
                <div className="partner-description">
                    <h2>Partner With Bottega</h2>
                    <h5>We're excited you have interest in partnering with us!</h5>
                </div>

                <div className="partner-form">
                    <form>
                        <h6>Please fill out the fields below to get started.</h6>
                        <div className="name-inputs">
                            <input type="text" placeholder="First Name"/>
                            <div className="seperator" />
                            <input type="text" placeholder="Last Name"/>
                        </div>

                        <input type="text" placeholder="Email"/>
                        <input type="text" placeholder="Phone #"/>
                        <ReCAPTCHA
                            id="university-partner-form-captcha"
                            sitekey="6LczsrEUAAAAABEhj5FH8efGAd417MoW6jzEKrB9"
                            onChange={updateButton} 
                        />
                        <button type="submit" disabled={buttonDisabled} style={buttonDisabled ? {opacity: ".5"} : null}>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}