import React, { useEffect } from 'react'

export default function dailySchedule() {
    useEffect(() => {
        const header = document.getElementById("daily-schedule-header")
        const subheader = document.getElementById("daily-schedule-subheader")
        const content = document.getElementById("daily-schedule-content")

        const headerLocation = header.offsetTop - window.innerHeight + 100
        const subheaderLocation = subheader.offsetTop - window.innerHeight + 150
        const contentLocation = content.offsetTop - window.innerHeight + 150

        window.addEventListener("scroll", () => {
            if (window.pageYOffset >= headerLocation) {
                header.classList.add("triggered")
            } 
            if (window.pageYOffset >= subheaderLocation) {
                subheader.classList.add("triggered")
            }
            if (window.pageYOffset >= contentLocation) {
                content.classList.add("triggered")
            }
        })
    })

    return (
        <div className="daily-schedule">
            <div className="daily-schedule-content-wrapper">
                <h2 id="daily-schedule-header">Daily Schedule</h2>
                <p id="daily-schedule-subheader">Want to know what a day as a full time on campus student looks like? While every day can be a little different, below you will see what the typical day-to-day schedule looks like for our students.</p>
                <div className="schedule-content-blocks-wrapper" id="daily-schedule-content">
                    <div className="content-block">
                        <div>9:00 AM</div>
                        <div>Arrive</div>
                        <div>Settle in & get help from TA's or others.</div>
                    </div>

                    <div className="content-block">
                        <div>9:30 AM</div>
                        <div>Lecture</div>
                        <div>Start the day with thoughtful coding exercises that get you thinking the right way, as well as prepare you for the types of interview challenges you will get during your job search.</div>
                    </div>

                    <div className="content-block">
                        <div>10:00 AM</div>
                        <div>Coding</div>
                        <div>Put what you learned to use on real projects.</div>
                    </div>

                    <div className="content-block">
                        <div>NOON</div>
                        <div>Lunch</div>
                        <div>Attend lectures to learn new concepts, then code on your assigned Sprint tasks. Depending on the day you will code.</div>
                    </div>

                    <div className="content-block">
                        <div>2:00 PM</div>
                        <div>Coding</div>
                        <div>Get your hands dirty and get coding away.</div>
                    </div>

                    <div className="content-block">
                        <div>5:00 PM</div>
                        <div>Class Ends</div>
                        <div>Class is over but you can stay if you need extra time.</div>
                    </div>

                    <div className="content-block">
                        <div>10:00 PM</div>
                        <div>School is Closed</div>
                        <div>Please go home & spend time with your family.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}