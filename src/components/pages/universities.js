import React from 'react'

import Header from "../resources/headerMain"
import Footer from "../resources/footerMain"
import HeaderPartnerships from "../resources/partnerships/headerPartnerships"
import TopBanner from "../resources/partnerships/topBanner"
import WhyBottega from "../resources/partnerships/whyBottega"

export default function universities() {
    return (
        <div className="univerities">
            <Header />
            <div className="universities-content-wrapper">
                <HeaderPartnerships partner="university" />
                <TopBanner partner="university" />
                <WhyBottega partner="university" />
            </div>
            <Footer />
        </div>
    )
}