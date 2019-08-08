import React, { useEffect } from 'react'

import Parners1 from "../../../../static/assets/images/partnerships/university-partners-top.png"
import Parners2 from "../../../../static/assets/images/partnerships/university-partners-bottom.png"

export default function universityPartners() {
    useEffect(() => {
        const elements = document.getElementsByClassName("university-partners-element")

        window.addEventListener("scroll", () => {
            for (const element of elements) {
                if (window.pageYOffset >= (element.offsetTop - window.innerHeight + 100)) {
                    element.classList.add("triggered")
                }
            }
        })
    })

    return (
        <div className="university-partners">
            <div className="university-partners-content-wrapper">
                <h2 className="university-partners-element">University & Corporate Partners</h2>
                <img src={Parners1} alt="" className="university-partners-element"/>
                <img src={Parners2} alt="" className="university-partners-element"/>
            </div>
        </div>
    )
}