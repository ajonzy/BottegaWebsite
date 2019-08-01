import React from 'react'

export default function tuitionCalculator(props) {
    const tuitionContent = {
        main: (
            <div className="tuition-calculator-content-wrapper">
                <h2>Tuition Calculator</h2>
                <p>Finance for 36 or 60 months with payments as low as $136/month. Approximately 75% to 85% deferred until after you have your new job!</p>
                <a href="https://bottega.skills.fund/">See Payment Options</a>
            </div>
        ),
        mainParttime: (
            <div className="tuition-calculator-content-wrapper">
                <h2>Tuition Calculator</h2>
                <p>Finance for 36 months with payments of just $58.44/month while in school (9 months), and then $248/month after graduation.</p>
                <div className="seperator" />
                <p>Finance for 60 months with payments of just $71.44/month while in school (9 months), and then $169.55/month after graduation.</p>
                <div className="seperator" />
                <p>Same fixed interest rate for everybody, no penalty for mediocre credit!</p>
                <a href="https://bottega.skills.fund/">See Payment Options</a>
            </div>
        )
    }
    return (
        <div className="tuition-calculator">
            {tuitionContent[props.course]}
        </div>
    )
}