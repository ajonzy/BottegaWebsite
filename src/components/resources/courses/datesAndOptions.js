import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Dates from "../../../../static/assets/courseDates.json"

export default function datesAndOptions() {
    const [course, updateCourse] = useState("")
    const [nextCourse, updateNextCourse] = useState("")

    useEffect(() => {
        const today = new Date
        let index = 0
        for (let i=0;i<Dates.dates.length;i++) {
            if (today < new Date(Dates.dates[i])) {
                updateCourse(Dates.dates[index])
                updateNextCourse(Dates.dates[index + 1])
            }
            else {
                index += 1
            }
        }
    })

    return (
        <div className="dates-and-options">
            <div className="dates-and-options-content-wrapper">
                <h2>Class Dates & Options</h2>

                <div className="content-block">
                    <div className="date-content">
                        <h3>{course}</h3>
                        <span className="span-one">Almost Full</span>
                        <a href="https://apply.bottega.tech/">
                            <button>Apply Now</button>
                        </a>
                    </div>

                    <div className="options-content">
                        <p><span>Format:</span> Full-Time In Person or Online</p>
                        <p><span>Cost:</span> $12,000</p>
                        <p><span>Length of Course:</span> 600 hours, 12 weeks</p>
                        <p><span>Credits:</span> Up to 15 at participating universities</p>
                    </div>
                </div>

                <div className="content-block">
                    <div className="date-content">
                        <h3>{nextCourse}</h3>
                        <span className="span-two">Open</span>
                        <a href="https://apply.bottega.tech/">
                            <button>Apply Now</button>
                        </a>
                    </div>

                    <div className="options-content">
                        <p><span>Format:</span> Full-Time In Person or Online</p>
                        <p><span>Cost:</span> $12,000</p>
                        <p><span>Length of Course:</span> 600 hours, 12 weeks</p>
                        <p><span>Credits:</span> Up to 15 at participating universities</p>
                    </div>
                </div>

                <div className="content-block">
                    <div className="date-content">
                        <h3>Part Time Online</h3>
                        <span className="span-two">Always Open</span>
                        <Link className="parttime-learn-more" to="/python-react-part-time/">Learn More</Link>
                        <a href="https://apply.bottega.tech/">
                            <button>Apply Now</button>
                        </a>
                    </div>

                    <div className="options-content">
                        <p><span>Format:</span> Part Time Online</p>
                        <p><span>Cost:</span> $7,500</p>
                        <p><span>Length of Course:</span> 600 hours, about 30-36 weeks</p>
                        <p><span>Credits:</span> Up to 15 at participating universities</p>
                    </div>
                </div>
            </div>
        </div>
    )
}