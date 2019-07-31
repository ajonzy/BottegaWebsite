import React, { useState, useEffect, useRef } from 'react'

import EmployableSkillsetImage from "../../../../static/assets/images/pythonReactCourses/employable-skillset.png"

export default function employableSkillset() {
    const [pythonJobs, setPythonJobs] = useState(10000)
    const [reactJobs, setReactJobs] = useState(10000)
    const [javascriptJobs, setJavascriptJobs] = useState(10000)

    const jobsUpdater = useRef(false)

    useEffect(() => {
        const jobsBlocks = document.getElementById("jobs-blocks")
        const jobsBlocksLocation = jobsBlocks.offsetTop - window.innerHeight

        const updateJobs = setInterval(() => {
            if (jobsUpdater.current === true) {
                let pythonJobTracker = pythonJobs
                if (pythonJobTracker < 50000) { pythonJobTracker += 10000; }
                if (pythonJobTracker%50000 < 700) { pythonJobTracker += 100; }
                if (pythonJobTracker%50700 < 50) { pythonJobTracker += 10; }
                if (pythonJobTracker%50750 < 9) { pythonJobTracker += 1; }
                setPythonJobs(pythonJobTracker)

                let reactJobTracker = reactJobs
                if (reactJobTracker < 40000) { reactJobTracker += 10000 }
                if (reactJobTracker%40000 < 7000) { reactJobTracker += 1000 }
                if (reactJobTracker%47000 < 500) { reactJobTracker += 100 }
                if (reactJobTracker%47500 < 40) { reactJobTracker += 10 }
                if (reactJobTracker%47540 < 1) { reactJobTracker += 1 }
                setReactJobs(reactJobTracker)

                let javascriptJobTracker = javascriptJobs
                if (javascriptJobTracker < 30000) { javascriptJobTracker += 10000 }
                if (javascriptJobTracker%30000 < 6000) { javascriptJobTracker += 1000 }
                if (javascriptJobTracker%36000 < 900) { javascriptJobTracker += 100 }
                if (javascriptJobTracker%36900 < 90) { javascriptJobTracker += 10 }
                setJavascriptJobs(javascriptJobTracker)
            }
        }, 30);

        window.addEventListener("scroll", () => {
            if (window.pageYOffset >= jobsBlocksLocation) {
                jobsUpdater.current = true
            }
        })

        return(() => {
            clearInterval(updateJobs)
        })
    })

    return (
        <div className="employable-skillset">
            <div className="employable-skillset-wrapper-content">
                <div className="skillset-text">
                    <h2>Get An Employable Skillset</h2>
                    <p>Check out the most recent available jobs in the U.S. this curriculum is designed to prepare you for. <a href="https://stackoverflow.blog/2017/09/14/python-growing-quickly/">Python is the fastest growing programming language.</a></p>
                    <span>Updated 2/15/18</span>
                    <div className="jobs-content-blocks-wrapper" id="jobs-blocks">
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