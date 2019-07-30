import React from 'react'

import LearningExperienceImage from "../../../../static/assets/images/pythonReactCourses/learning-experience.png"

export default function learningExperience() {
    return (
        <div className="learning-experience">
            <div className="learning-experience-content-wrapper">
                <div className="learning-experience-text">
                    <h2>Cutting-Edge Learning Experience</h2>
                    <p>Bottega provides a top-of-the-line learning management system to deliver content and interaction for every student's success. Students have daily scheduled class time for a structured support system and learning environment with other students, instructors and access to mentors for when you get stuck.</p>
                </div>

                <div className="learning-experience-image">
                    <img src={LearningExperienceImage} alt=""/>
                </div>
            </div>
        </div>
    )
}