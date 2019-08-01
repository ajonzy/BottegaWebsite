import React from 'react'

export default function applicationProcess(props) {
    const applicationContent = {
        fulltime: (
            <div className="application-process-content-blocks">
                <div className="content-block">
                    <h3>01</h3>
                    <h5>Online<br/>Application</h5>
                    <p>Our simple application allows you to connect and get your questions answered.</p>
                </div>

                <div className="content-block">
                    <h3>02</h3>
                    <h5>Take a<br/>Tour</h5>
                    <p>Whether it’s remote or on campus meet with a member of enrollment team to learn more about our program.</p>
                </div>

                <div className="content-block">
                    <h3>03</h3>
                    <h5>Financial<br/>Aid</h5>
                    <p>Learn about our great financing options so you can start breaking barriers.</p>
                </div>

                <div className="content-block">
                    <h3>04</h3>
                    <h5>Prep<br/>Course</h5>
                    <p>Learn the fundamentals of JavaScript, HTML & CSS to get you started right out the gates.</p>
                </div>
            </div>
        ),
        parttime: (
            <div className="application-process-content-blocks">
                <div className="content-block">
                    <h3>01</h3>
                    <h5>Online<br/>Application</h5>
                    <p>Fill out our quick online application by answering a few questions.</p>
                </div>

                <div className="content-block">
                    <h3>02</h3>
                    <h5>Fit<br/>Interview</h5>
                    <p>This interview will make sure your learning preferences and schedule align with the course.</p>
                </div>

                <div className="content-block">
                    <h3>03</h3>
                    <h5>Tech<br/>Screening</h5>
                    <p>Our tech screening will test your ability to learn and solve problems.</p>
                </div>

                <div className="content-block">
                    <h3>04</h3>
                    <h5>Prep<br/>Course</h5>
                    <p>4-week, part-time prep course to master JavaScript fundamentals and HTML/CSS with a mentor.</p>
                    <div className="seperator" style={{height: "10px"}} />
                    <p>(Requires a $250 deposit)</p>
                </div>
            </div>
        )
    }
    return (
        <div className="application-process">
            <div className="application-process-content-wrapper">
                <h2>Application Process</h2>
                {applicationContent[props.course]}
            </div>
        </div>
    )
}