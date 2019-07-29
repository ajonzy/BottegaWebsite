import React, { useState } from 'react'

import EmployableSkillsetImage from "../../../../static/assets/images/pythonReactCourses/employable-skillset.png"

export default function employableSkillset() {
    const [pythonJobs, setPythonJobs] = useState(50759)
    const [reactJobs, setReactJobs] = useState(47541)
    const [javascriptJobs, setJavascriptJobs] = useState(36990)

    return (
        <div className="employable-skillset">
            <div className="employable-skillset-wrapper-content">
                <div className="skillset-text">
                    <h2>Get An Employable Skillset</h2>
                    <p>Check out the most recent available jobs in the U.S. this curriculum is designed to prepare you for. <a href="https://stackoverflow.blog/2017/09/14/python-growing-quickly/">Python is the fastest growing programming language.</a></p>
                    <span>Updated 2/15/18</span>
                    <div className="jobs-content-blocks-wrapper">
                        <div className="content-block">
                            <h3>{pythonJobs.toLocaleString()}</h3>
                            <h4>Python Jobs</h4>
                            <h6><a href="https://www.indeed.com/q-python-jobs.html">See Job Report<span>></span></a></h6>
                        </div>

                        <div className="content-block">
                            <h3>{reactJobs.toLocaleString()}</h3>
                            <h4>React Jobs</h4>
                            <h6><a href="https://www.indeed.com/q-react-jobs.html">See Job Report<span>></span></a></h6>
                        </div>

                        <div className="content-block">
                            <h3>{javascriptJobs.toLocaleString()}</h3>
                            <h4>JavaScript Jobs</h4>
                            <h6><a href="https://www.indeed.com/q-javascript-jobs.html">See Job Report<span>></span></a></h6>
                        </div>
                    </div>
                </div>

                <div className="skillset-image">
                    <img src={EmployableSkillsetImage} alt=""/>
                </div>
            </div>
        </div>
    )
}