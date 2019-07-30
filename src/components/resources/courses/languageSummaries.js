import React from 'react'

import PythonLogo from "../../../../static/assets/images/pythonReactCourses/python-logo.png"
import ReactLogo from "../../../../static/assets/images/pythonReactCourses/react-logo.png"


export default function languageSummaries() {
    return (
        <div className="language-summaries">
            <div className="language-summaries-content-wrapper">
                <div className="language-summaries-description">
                    <h2>Language Summaries</h2>
                    <p>New to coding? Veteran Coder? Doesn’t matter. Either way this course will teach you two of the most in-demand programming languages to meet all your employer’s software development needs.</p>
                </div>

                <div className="language-summaries-content-blocks-wrapper">
                    <div className="content-block">
                        <div className="summary-image">
                            <img src={PythonLogo} alt=""/>
                        </div>

                        <div className="summary-text">
                            <h4>Python 3</h4>
                            <p>Python is a versatile and powerful object-oriented programming language. It’s easy to learn whether you’re a novice or veteran. It’s simplicity and versatility empowers programmers to create a wide variety of web development, software development and scientific applications.</p>
                        </div>
                    </div>

                    <div className="content-block">
                        <div className="summary-image">
                            <img src={ReactLogo} alt=""/>
                        </div>

                        <div className="summary-text">
                            <h4>React JS</h4>
                            <p>React is a powerful javascript library that allows developers to create both large and small web-applications.  It handles data dynamically and aims to provide speed, simplicity, and scalability to user interfaces in applications. React JS is a trending language that is in high demand with business owners.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}