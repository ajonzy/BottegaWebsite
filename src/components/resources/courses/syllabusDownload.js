// TODO Hook up form to email
import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons"

export default function syllabusDownload(props) {
    const [first, updateFirst] = useState("")
    const [last, updateLast] = useState("")
    const [phone, updatePhone] = useState("")
    const [email, updateEmail] = useState("")

    const [emptyFieldsError, updateEmptyFieldsError] = useState(false)

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
            const downloader = document.getElementById("downloader");
            downloader.click()

            window.open(props.syllabus, "_blank")
        }
    }

    return (
        <div className="syllabus-download">
            <div className="syllabus-download-content-wrapper">
                <div className="download-description">
                    <FontAwesomeIcon icon={faArrowAltCircleDown} />
                    <span>More information? Download the track syllabus.</span>
                </div>

                <div className="download-form">
                    <form onSubmit={handleSubmit}>
                        <div className="download-inputs">
                            <input type="text" name="first" value={first} onChange={() => handleChange(updateFirst)} placeholder="First Name (required)"/>
                            <input type="text" name="last" value={last} onChange={() => handleChange(updateLast)} placeholder="Last Name (required)"/>
                            <input type="text" name="phone" value={phone} onChange={() => handleChange(updatePhone)} placeholder="Phone (required)"/>
                            <input type="text" name="email" value={email} onChange={() => handleChange(updateEmail)} placeholder="Email (required)"/>
                        </div>

                        <div className="button-message-wrapper">
                            <button type="submit">Download&nbsp;Syllabus</button>
                            <h4 style={{visibility: emptyFieldsError ? "visible" : "hidden"}}>All fields are required. Please check and try again.</h4>
                            <a id="downloader" href={props.syllabus} download style={{display: "none"}} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}