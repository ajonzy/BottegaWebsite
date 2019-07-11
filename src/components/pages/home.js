import React from 'react'

import Header from "../resources/headerMain"

export default function home() {
    return (
        <div className="home">
            <Header />
            <div className="home-content-wrapper">
                <div className="video-display-wrapper">
                    <video width="100%" src="https://bottega.tech/wp-content/uploads/2019/06/Bottega-video-2.mp4?id=4090" preload="auto" loop autoPlay muted></video>          
                    <div className="video-display-text">
                        <h1>Coding Skills<br/>To Get You Hired</h1>
                        <h4>Bottega’s best in class curriculum delivers programs that are backed by The American College of Education (<a href="http://www2.acenet.edu/credit/?fuseaction=browse.getOrganizationDetail&amp;FICE=1009331">ACE</a>). This accreditation recommends college credit be awarded for Bottega courses at many universities.</h4>
                    </div>          
                </div>
            </div>
        </div>
    )
}