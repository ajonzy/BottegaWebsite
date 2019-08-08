import React, { useState } from 'react'

export default function socialPartners() {
    const [partner, setPartner] = useState("codeToSuccess")

    return (
        <div className="social-partners">
            <div className="social-partners-content-wrapper">
                <hr/>
                <h3>Social Initiatives And Partnerships</h3>
                <div className="social-partner-buttons-wrapper">
                    <div className="social-partner-button" style={partner === "codeToSuccess" ? {backgroundColor: "#00c274", color: "white", borderLeft: "none"} : {borderLeft: "none"}} onClick={() => setPartner("codeToSuccess")}>Code To Success</div>
                    <div className="social-partner-button" style={partner === "codeImpact" ? {backgroundColor: "#00c274", color: "white"} : null} onClick={() => setPartner("codeImpact")}>Code Impact</div>
                    <div className="social-partner-button" style={partner === "healTheHeroFoundation" ? {backgroundColor: "#00c274", color: "white"} : null} onClick={() => setPartner("healTheHeroFoundation")}>Heal The Hero Foundation</div>
                    <div className="social-partner-button" style={partner === "OPIF" ? {backgroundColor: "#00c274", color: "white"} : null} onClick={() => setPartner("OPIF")}>OPIF</div>
                </div>
                <div className="social-partner-decription">
                    <p style={partner === "codeToSuccess" ? {opacity: "1", zIndex: "1"} : null}>Bottega has a mission to support the advance Computer Science education for future generations. Bottega provides the 9 week curriculum for High School students with options to transition CREDIT towards a CS degree and pathways for furthering their education.</p>
                    <p style={partner === "codeImpact" ? {opacity: "1", zIndex: "1"} : null}>Bottega supports a dual initiative towards Veterans and Women in Technology. Bottega provides scholarships and funding for students whom are supported through education, community engagement, mentorship, and career placement services. The focus is to create accelerated opportunities to allow adults to skill-up, retrain. or change careers without creating unnecessary burden in length of time or financially.</p>
                    <p style={partner === "healTheHeroFoundation" ? {opacity: "1", zIndex: "1"} : null}>Heal the Hero Foundation, a public charity, has partnered with Bottega to provide scholarships to qualified Veteran students and other individuals. Scholarship participants receive a credentialed program designed to improve mental focus, optimal brain performance/productivity and emotional/mental balance. The program’s aim is to support the student’s potential to succeed in his/her studies and ultimate employment.</p>
                    <p style={partner === "OPIF" ? {opacity: "1", zIndex: "1"} : null}>Operation Pay it Forward, which operates as a 501(c)(3), and Bottega have partnered to offer courses and activities to build community and provide education for Veterans. Through this partnership, Veterans are able to build skills and move into an exciting career in Software Development.</p>
                </div>
                <hr id="Form"/>
            </div>
        </div>
    )
}