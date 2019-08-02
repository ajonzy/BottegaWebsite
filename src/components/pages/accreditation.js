import React from 'react'

import Header from "../resources/headerMain"
import Footer from "../resources/footerMain"
import HeaderBanner from "../resources/headerBanner"

import ExplainationImage from "../../../static/assets/images/accreditation/accreditation-description.jpg"
import AdvancEDLogo from "../../../static/assets/images/accreditation/AdvancED_logo.png"
import ACELogo from "../../../static/assets/images/accreditation/ACE_Logo.png"
import BannerBackground from "../../../static/assets/images/accreditation/accreditation-banner.jpg"

export default function accreditation() {
    return (
        <div className="accreditation">
            <Header />
            <div className="accreditation-content-wrapper">
                <HeaderBanner 
                    header={<h1>Accreditation¹ Means <br/>Accountability</h1>}
                />
                <div className="accreditation-explaination-content-wrapper">
                    <div className="explaination-text-content">
                        <div className="explaination-header">
                            <h3>Accreditation<sup>1</sup> Means You Have Assurance You Are Benefiting From A Rigorous, Audited Program.</h3>
                            <p>Accreditation<sup>1</sup> is designed to help educational institutions boost their ongoing performance efforts for the benefit of their students. Accreditation<sup>1</sup> matters because our students deserve the highest level of educational excellence possible.</p>
                        </div>

                        <div className="explaination-content-blocks-wrapper">
                            <div className="content-block">
                                <img src={AdvancEDLogo} style={{width: "125px", height: "39px"}} alt=""/>
                                <p>AdvancED® is the world’s largest education community, serving more than 34,000 educational institutions. They’re a non-profit, non-partisan organization that conducts rigorous, on-site reviews of a variety of educational institutions and systems to ensure that all learners realize their full potential.</p>
                            </div>

                            <div className="content-block">
                                <img src={ACELogo} style={{width: "125px", height: "27px"}} alt=""/>
                                <p>The American Council on Education’s College Credit Recommendation Service (CREDIT®) was established in 1974 to connect workplace learning with colleges and universities by helping students gain access to academic credit for formal training taken outside traditional degree programs.</p>
                            </div>
                        </div>
                    </div>

                    <div className="explaination-image">
                        <img src={ExplainationImage} alt=""/>
                    </div>
                </div>

                <div className="accreditation-banner">
                    <div className="accreditiation-banner-content">
                        <div className="banner-text">
                            <h3>Gain A Better Education</h3>
                            <p>Accreditation<sup>1</sup> requires ensuring the curriculum meets a certain quality standard. You, as a student, benefit from the teaching practices and procedures that allow us to retain our accreditation<sup>1</sup>.</p>
                        </div>

                        <div className="banner-button">
                            <a href="#">View Curriculumn</a> {/* TODO: Build curriculum page */}
                        </div>
                    </div>

                    <div className="accreditation-banner-background"style={{backgroundImage: `url(${BannerBackground})`}} />
                </div>
            </div>
            <Footer />
        </div>
    )
}