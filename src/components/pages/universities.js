import React from 'react'

import Header from "../resources/headerMain"
import Footer from "../resources/footerMain"
import HeaderPartnerships from "../resources/partnerships/headerPartnerships"
import TopBanner from "../resources/partnerships/topBanner"

export default function universities() {
    return (
        <div className="univerities">
            <Header />
            <div className="universities-content-wrapper">
                <HeaderPartnerships partner="university" />
                <TopBanner partner="university" />
            </div>
            <Footer />
        </div>
    )
}