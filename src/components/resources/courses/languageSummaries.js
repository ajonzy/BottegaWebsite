import React from 'react'

import PythonLogo from "../../../../static/assets/images/pythonReactCourses/python-logo.png"
import ReactLogo from "../../../../static/assets/images/pythonReactCourses/react-logo.png"
import HTML5Logo from "../../../../static/assets/images/pythonReactCourses/html5-logo.png"
import CSS3Logo from "../../../../static/assets/images/pythonReactCourses/css3-logo.png"


export default function languageSummaries(props) {
    const summariesContent = {
        main: (
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
        ),
        frontend: (
            <div className="language-summaries-content-wrapper">
                <div className="language-summaries-description">
                    <h2>Language Summaries</h2>
                    <p>Are you interested in learning to create awesome digital interfaces and user interactions? This Front-End Development track will teach you the ins and outs of modern coding languages and industry standards to do just that.</p>
                </div>

                <div className="language-summaries-content-blocks-wrapper">
                    <div className="content-block">
                        <div className="summary-image">
                            <img src={HTML5Logo} alt=""/>
                        </div>

                        <div className="summary-text">
                            <h4>HTML</h4>
                            <p>HTML is the foundational building block language of the internet. It is a markup language that allows basic connection and navigation of websites possible through page layout, content rendering and linking.</p>
                        </div>
                    </div>

                    <div className="content-block">
                        <div className="summary-image">
                            <img src={CSS3Logo} alt=""/>
                        </div>

                        <div className="summary-text">
                            <h4>CSS</h4>
                            <p>CSS is another building block language in web development that works in tandem with HTML. It enables developers to further customize the layout and give each page a unique styling—without CSS the internet would be as boring as reading a word document</p>
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
        )
    }
    return (
        <div className="language-summaries">
            {summariesContent[props.course]}
        </div>
    )
}