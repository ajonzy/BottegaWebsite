import React, { useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faMicroscope, faAtom } from "@fortawesome/free-solid-svg-icons"

import BannerImage from "../../../../static/assets/images/partnerships/top-banner.jpg"

export default function topBanner(props) {
    useEffect(() => {
        const button = document.getElementById("top-partner-banner-button")

        const buttonLocation = button.getBoundingClientRect().top

        window.addEventListener("scroll", () => {
            console.log(buttonLocation - window.innerHeight);
            console.log(window.pageYOffset);
            if (window.pageYOffset >= (buttonLocation - window.innerHeight)) {
                button.classList.add("triggered")
            }
        })
    })

    const bannerContent = {
        university: (
            <div className="top-banner-content-wrapper">
                <div className="top-banner-content">
                    <h3>University Partnerships</h3>
                    <a href="#Form" id="top-partner-banner-button">Partner with Bottega</a>
                </div>
            </div>
        ),
        instructor: (
            <div className="top-banner-content-wrapper">
                <div className="top-banner-content">
                    <h3>Bottega Endorsement Offerings</h3>
                    <div className="endorsement-offerings-content-blocks-wrapper">
                        <div className="content-block">
                            <FontAwesomeIcon icon={faLaptopCode} />
                            <h4>Web Development</h4>
                            <p>This easy to complete track teaches you the foundations of modern web development.</p>
                            <h6>Certification: Web Development, HTML5</h6>
                        </div>

                        <div className="content-block">
                            <FontAwesomeIcon icon={faMicroscope} />
                            <h4>Computer Science 1</h4>
                            <p>This three course track teaches the fundamentals of computer science principles and industry best practices.</p>
                            <h6>Certification: Computer Programming 1,<br/>AP CS Principles,<br/>Computer Science 1</h6>
                        </div>

                        <div className="content-block">
                            <FontAwesomeIcon icon={faAtom} />
                            <h4>Computer Science 2</h4>
                            <p>This five course track teaches fundamental and advanced concepts of computer science principles and industry best practices.</p>
                            <h6>Certification: Computer Programming (CP) 1,<br/>Computer Science (CS) Principles,<br/>CS I, CP II, CS II, AP CS,<br/>Gaming Development Fundamentals,<br/>Mobile Development Fundamentals</h6>
                        </div>
                    </div>
                    <a href="#Form" id="top-partner-banner-button">Get Endorsed by Bottega</a>
                </div>
            </div>
        )
    }
    return (
        <div className="top-banner" style={{backgroundImage: `url(${BannerImage})`}}>
            {bannerContent[props.partner]}
            <div className="background-color" />
        </div>
    )
}