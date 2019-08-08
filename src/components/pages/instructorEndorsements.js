import React from 'react'

import Header from "../resources/headerMain"
import Footer from "../resources/footerMain"
import HeaderPartnerships from "../resources/partnerships/headerPartnerships"
import TopBanner from "../resources/partnerships/topBanner"
import WhyBottega from "../resources/partnerships/whyBottega"
import CodeToSuccess from "../resources/partnerships/codeToSuccess"
import InstructorEndorsementForm from "../resources/partnerships/instructorEndorsementForm"

import LegalBanner from "../resources/legalBanner"

export default function instructorEndorsements() {
    return (
        <div className="instructor-endorsements">
            <Header />
            <div className="universities-content-wrapper">
                <HeaderPartnerships partner="instructor" />
                <TopBanner partner="instructor" />
                <WhyBottega partner="instructor" />
                <CodeToSuccess />
                <InstructorEndorsementForm />
                <LegalBanner />
            </div>
            <Footer />
        </div>
    )
}