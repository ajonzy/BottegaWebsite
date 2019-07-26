import React from 'react'

import Campus from "../../../../static/assets/images/pythonReactCourses/campus.png"
import Clock from "../../../../static/assets/images/pythonReactCourses/clock.png"
import Remote from "../../../../static/assets/images/pythonReactCourses/remote.png"
import Scroll from "../../../../static/assets/images/pythonReactCourses/scroll.png"
import Time from "../../../../static/assets/images/pythonReactCourses/time.png"

export default function courseDescription(props) {
    const images = {
        fulltime: [Campus, Clock, Scroll],
        remote: [Clock, Remote, Scroll],
        parttime: [Time, Remote, Clock]
    }

    const headers = {
        fulltime: ["Full-Time, On-Campus", "Immersive", "12 Weeks"],
        remote: ["Full Time", "Attend Remotely", "12 Weeks"],
        parttime: ["Part Time", "Learn Remotely", "4-9 Months"]
    }

    const content = {
        fulltime: ["Program held on our Lehi Campus in beautiful Utah", "Scheduled 9am to 5pm class time but outside classwork assigned", "~50 hours of pre-work and 12 weeks of intensive classroom instruction"],
        remote: ["Scheduled 9am to 5pm class time but outside classwork assigned", "Attend class anywhere in the world. Stream in via video conference.", "~50 hours of pre-work and 12 weeks of intensive classroom instruction"],
        parttime: ["Learn at your own pace. Expected completion is 4-9 months based on weekly time commitment", "Access your curriculum anywhere you want. Our online software will guide you through your learning.", "~50 hours of pre-work and 600 hours of self-paced curriculum"]
    }
    return (
        <div className="course-description">
            <div className="course-description-content">
                <div className="content-block">
                    <img src={images[props.course][0]} alt=""/>
                    <h3>{headers[props.course][0]}</h3>
                    <h4>{content[props.course][0]}</h4>
                </div>

                <div className="content-block">
                    <img src={images[props.course][1]} alt=""/>
                    <h3>{headers[props.course][1]}</h3>
                    <h4>{content[props.course][1]}</h4>
                </div>

                <div className="content-block">
                    <img src={images[props.course][2]} alt=""/>
                    <h3>{headers[props.course][2]}</h3>
                    <h4>{content[props.course][2]}</h4>
                </div>
            </div>
        </div>
    )
}