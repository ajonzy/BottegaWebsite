// TODO Add form submit verification messages
import React, {useState} from 'react'
import ReCAPTCHA from "react-google-recaptcha";

export default function universityPartnerForm() {
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [first, updateFirst] = useState("")
    const [last, updateLast] = useState("")
    const [phone, updatePhone] = useState("")
    const [email, updateEmail] = useState("")

    const [emptyFieldsError, updateEmptyFieldsError] = useState(false)
    const [formSubmitError, updateFormSubmitError] = useState(false)
    const [formSubmitted, updateFormSubmitted] = useState(false)

    const updateButton = () => { setButtonDisabled(!buttonDisabled) }

    const handleChange = (callback) => {
        callback(event.target.value)
    }

    const handleSubmit = () => {
        event.preventDefault()
        updateEmptyFieldsError(false)

        if (first == "" || last == "" || phone == "" || email == "") {
            updateEmptyFieldsError(true)
        }
        else {
            fetch("http://127.0.0.1:5000/send_university_email", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    first: first,
                    last: last,
                    phone: phone,
                    email: email
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
        <div className="university-partner-form">
            <div className="university-partner-form-content-wrapper">
                <div className="partner-description">
                    <h2>Partner With Bottega</h2>
                    <h5>We're excited you have interest in partnering with us!</h5>
                </div>

                <div className="partner-form">
                    <form onSubmit={handleSubmit}> 
                        <h6>Please fill out the fields below to get started.</h6>
                        <div className="name-inputs">
                            <input type="text" value={first} onChange={() => handleChange(updateFirst)} placeholder="First Name"/>
                            <div className="seperator" />
                            <input type="text" value={last} onChange={() => handleChange(updateLast)} placeholder="Last Name"/>
                        </div>

                        <input type="text" value={phone} onChange={() => handleChange(updatePhone)} placeholder="Phone #"/>
                        <input type="text" value={email} onChange={() => handleChange(updateEmail)} placeholder="Email"/>
                        <ReCAPTCHA
                            id="university-partner-form-captcha"
                            sitekey="6LczsrEUAAAAABEhj5FH8efGAd417MoW6jzEKrB9"
                            onChange={updateButton} 
                        />
                        <button type="submit" disabled={buttonDisabled || formSubmitted ? true : false} style={buttonDisabled ? {opacity: ".5"} : null}>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}