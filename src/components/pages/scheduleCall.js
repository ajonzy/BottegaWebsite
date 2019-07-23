import React from 'react'

import Header from "../resources/headerMain"
import Footer from "../resources/footerMain"

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
                        <a href=""></a>
                        <a href=""></a>
                        <a href=""></a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}