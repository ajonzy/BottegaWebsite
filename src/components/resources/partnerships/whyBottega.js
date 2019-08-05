import React, {useEffect} from 'react'

export default function whyBottega(props) {
    useEffect(() => {
        const headers = document.getElementsByClassName("content-header")

        window.addEventListener("scroll", () => {
            for (const header of headers) {
                if (window.pageYOffset >= (header.offsetTop - window.innerHeight + 100)) {
                    header.classList.add("triggered")
                }
            }
        })
    })

    const whyBottegaContent = {
        university: (
            <div className="why-bottega-content-wrapper">
                <div className="what-content">
                    <h2 className="content-header">What Is Bottega?</h2>
                    <p>Bottega is the most advanced, and individualized education platform to assist Computer Science. With machine learning, adaptive instruction models, plus testing—we empower the first standard model for certification of developer skills.</p>
                </div>

                <div className="why-content">
                    <h2 className="content-header">Why Bottega Is Right For Your University</h2>

                    <div className="why-content-blocks-wrapper">
                        <div className="content-block">
                            <h4 className="content-header">Certification and College Credit</h4>
                            <ul>
                                <li>Provides credit and transcript upon graduation</li>
                                <li>Regionally accredited<sup>1</sup> by the Northwest Accreditation Commission</li>
                                <li>Create stackable credentials and pathways for your students</li>
                            </ul>
                        </div>

                        <div className="content-block">
                            <h4 className="content-header">Bootcamp, AS, and BA Degree Offerings</h4>
                            <ul>
                                <li>Market to students with In-Person and Remote Learning options</li>
                                <li>Dynamic learning platform that innovates teacher/student interaction</li>
                                <li>Relax and let us help with your accreditation documentation</li>
                            </ul>
                        </div>

                        <div className="content-block">
                            <h4 className="content-header">Award Winning Curriculum</h4>
                            <ul>
                                <li>Only curriculum within bootcamp industry recognized by ACE<sup>1</sup></li>
                                <li>Packt published and Princeton approved</li>
                                <li>+31,000 learners have utilized our curriculum</li>
                            </ul>
                        </div>

                        <div className="content-block">
                            <h4 className="content-header">Customize your University Offering</h4>
                            <ul>
                                <li>Choose specialized courses like machine learning, cyber security, and AWS</li>
                                <li>Marketing engine that automates your enrollment process</li>
                                <li>Placement and career services that drive networking to the next level</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="why-bottega">
            {whyBottegaContent[props.partner]}
        </div>
    )
}