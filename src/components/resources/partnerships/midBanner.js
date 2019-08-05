import React, { useEffect } from 'react'

export default function midBanner() {
    useEffect(() => {
        const button = document.getElementById("mid-partner-banner-button")

        const buttonLocation = button.offsetTop

        window.addEventListener("scroll", () => {
            if (window.pageYOffset >= (buttonLocation - window.innerHeight)) {
                button.classList.add("triggered")
            }
        })
    })

    return (
        <div className="mid-banner">
            <div className="mid-banner-content-wrapper">
                <div className="mid-banner-content">
                    <h3>The Best Curriculum For Your Students</h3>
                    <a href="#UniversityPartners" id="mid-partner-banner-button">Partner with Bottega</a>
                </div>
            </div>
        </div>
    )
}