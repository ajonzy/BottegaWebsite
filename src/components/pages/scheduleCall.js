import React from 'react'

import Header from "../resources/headerMain"
import Footer from "../resources/footerMain"

import USFlag from "../../../static/assets/images/scheduleCall/us-flag.png"
import MexicoFlag from "../../../static/assets/images/scheduleCall/mexico-flag.jpg"
import JamaicaFlag from "../../../static/assets/images/scheduleCall/jamaica-flag.jpg"


export default function scheduleCall() {
    return (
        <div className="schedule-call">
            <Header />
            <div className="schedule-call-content-wrapper">
                <div className="schedule-call-content">
                    <h2>Have Questions? Schedule A Call!</h2>
                    <h5>Select The Country You Reside In.</h5>
                    <h5>Seleccione el país en el que reside.</h5>
                    <div className="country-links">
                        <a href="https://calendly.com/bottega-advisors/phonecall"><img src={USFlag} alt=""/></a>
                        <a href="https://calendly.com/bottega-advisors/llamada"><img src={MexicoFlag} alt=""/></a>
                        <a href="https://calendly.com/bottega-advisors/phonecall"><img src={JamaicaFlag} alt=""/></a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}