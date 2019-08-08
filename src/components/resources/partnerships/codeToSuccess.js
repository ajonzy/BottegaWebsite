import React, { useEffect } from 'react'

import CodeToSuccessImage from "../../../../static/assets/images/partnerships/code-to-success.jpg"

export default function codeToSuccess() {
    useEffect(() => {
        const elements = document.getElementsByClassName("animated")

        window.addEventListener("scroll", () => {
            for (const element of elements) {
                if (window.pageYOffset >= (element.offsetTop - window.innerHeight + 50)) {
                    element.classList.add("triggered")
                }
            }
        })
    }) 

    return (
        <div className="code-to-success">
            <div className="code-to-success-content-wrapper">
                <h2 className="animated">Summer 2018 Coding Bootcamp</h2>
                <h3 className="animated">Via Code To Success</h3>
                <img src={CodeToSuccessImage} className="animated" alt=""/>
            </div>
        </div>
    )
}