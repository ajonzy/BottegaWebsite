import React from 'react'

import Header from "../resources/headerMain"
import Footer from "../resources/footerMain"
import HeaderVideo from "../resources/headerVideo"

import FulltimeVideo from "../../../static/assets/images/pythonReactCourses/fulltimeVideo.mp4"

export default function pythonReactFulltime() {
    return (
        <div className="python-react-fulltime">
            <Header />
            <div className="python-react-fulltime-content-wrapper">
                <HeaderVideo 
                    video={FulltimeVideo}
                    superHeader={<h5>Full Stack Development (Full-Time)</h5>}
                    header={<h1>In Demand Skills Python 3<br/>and React.js</h1>}
                    subHeader={<h4>Beginner or not, you’ll gain skillsets aimed to get you hired by learning<br/>two of the most in-demand and employable programming languages in<br/>the industry.</h4>}
                />
            </div>
            <Footer />
        </div>
    )
}