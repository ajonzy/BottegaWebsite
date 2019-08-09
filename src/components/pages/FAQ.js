import React from 'react'

import Header from "../resources/headerMain"
import Footer from "../resources/footerMain"
import LegalBanner from "../resources/legalBanner"

export default function faqPage() {
    return (
        <div className="faq-page">
            <Header />
            <div className="faq-page-content-wrapper">
                
                <LegalBanner />
            </div>
            <Footer />
        </div>
    )
}