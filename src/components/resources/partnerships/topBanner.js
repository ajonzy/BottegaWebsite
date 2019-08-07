import React, { useEffect } from 'react'

import BannerImage from "../../../../static/assets/images/partnerships/top-banner.jpg"

export default function topBanner(props) {
    useEffect(() => {
        const button = document.getElementById("top-partner-banner-button")

        const buttonLocation = button.offsetTop

        window.addEventListener("scroll", () => {
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
        )
    }
    return (
        <div className="top-banner" style={{backgroundImage: `url(${BannerImage})`}}>
            {bannerContent[props.partner]}
        </div>
    )
}