import React from 'react'

import Header from "../resources/headerMain"
import Footer from "../resources/footerMain"
import HeaderVideo from "../resources/headerVideo"
import LegalBanner from "../resources/legalBanner"

export default function veterans() {
    return (
        <div className="veterans">
            <Header />
            
            <LegalBanner />
            <Footer />
        </div>
    )
}