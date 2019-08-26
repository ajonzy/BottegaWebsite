// TODO Add form submit verification messages
import React, {useState} from 'react'
import ReCAPTCHA from "react-google-recaptcha";

export default function instructorEndorsementForm() {
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [first, updateFirst] = useState("")
    const [last, updateLast] = useState("")
    const [phone, updatePhone] = useState("")
    const [email, updateEmail] = useState("")
    const [city, updateCity] = useState("")
    const [state, updateState] = useState("")
    const [district, updateDistrict] = useState("")
    const [school, updateSchool] = useState("")
    const [cactus, updateCactus] = useState("")

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

        if (first == "" || last == "" || phone == "" || email == "" || city == "" || state == "" || district == "" || school == "" || cactus == "") {
            updateEmptyFieldsError(true)
        }
        else {
            fetch("http://127.0.0.1:5000/send_instructor_endorsement_email", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    first: first,
                    last: last,
                    phone: phone,
                    email: email,
                    city: city,
                    state: state,
                    district: district,
                    school: school,
                    cactus: cactus
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
        <div id="Form" className="instructor-endorsement-form">
            <div className="instructor-endorsement-form-content-wrapper">
                <h4>Request Info for the Bottega Endorsement Program</h4>
                <p>We’re excited you have interest in our endorsement program. Fill out the form to get started.</p>
                <h5>(all fields are required, including <a href="https://www.uen.org/cactus/logon.do">CACTUS Record Number</a>)</h5>
                <form onSubmit={handleSubmit}>
                    <div className="inputs-wrapper">
                        <input type="text" value={first} onChange={() => handleChange(updateFirst)} placeholder="First Name"/>
                        <input type="text" value={last} onChange={() => handleChange(updateLast)} placeholder="Last Name"/>
                        <input type="text" value={phone} onChange={() => handleChange(updatePhone)} placeholder="Phone Number"/>
                        <input type="text" value={email} onChange={() => handleChange(updateEmail)} placeholder="Email"/>
                        <input type="text" value={city} onChange={() => handleChange(updateCity)} placeholder="City"/>
                        <input type="text" value={state} onChange={() => handleChange(updateState)} placeholder="State"/>
                        <input type="text" value={district} onChange={() => handleChange(updateDistrict)} placeholder="District"/>
                        <input type="text" value={school} onChange={() => handleChange(updateSchool)} placeholder="School"/>
                        <input type="text" value={cactus} onChange={() => handleChange(updateCactus)} placeholder="CACTUS Record Number"/>
                    </div>
                    <ReCAPTCHA
                        id="university-partner-form-captcha"
                        sitekey="6LczsrEUAAAAABEhj5FH8efGAd417MoW6jzEKrB9"
                        onChange={updateButton} 
                    />
                    <button type="submit" disabled={buttonDisabled || formSubmitted ? true : false} style={buttonDisabled ? {opacity: ".5"} : null}>Submit Application</button>
                </form>
            </div>
        </div>
    )
}