import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons"

export default function courseFAQ(props) {
    const [selected, setSelected] = useState(1)

    const handleSelection = (selector) => {
        setSelected(selector)
    }

    const faqContent = {
        fulltime: (
            <div className="course-faq-content-blocks-wrapper">
                <div className="content-block">
                    <div className={`faq-header ${selected === 1 ? "header-toggle" : null}`} onClick={() => handleSelection(1)}>
                        <h6>How Long Is The Full Bootcamp Course?</h6>
                        <FontAwesomeIcon icon={selected === 1 ? faMinusCircle : faPlusCircle} />
                    </div>

                    <div className={`faq-content ${selected === 1 ? "content-toggle" : null}`}>
                        <p>Each full-time bootcamp cohort takes 12 weeks to get through 600 hours of education and project based learning. This section completes your basic education in software engineering and qualifies you to earn your “Web Developer Certificate”. You can do the same course part-time online in about 6-9 months.</p>
                    </div>
                </div>

                <div className="content-block">
                    <div className={`faq-header ${selected === 2 ? "header-toggle" : null}`} onClick={() => handleSelection(2)}>
                        <h6>Costs And Details For Full Time Program?</h6>
                        <FontAwesomeIcon icon={selected === 2 ? faMinusCircle : faPlusCircle} />
                    </div>

                    <div className={`faq-content ${selected === 2 ? "content-toggle" : null}`}>
                        <p>At $12,000 Bottega offers the best Return on Investment* (ROI) in tech education. The program includes:</p>
                        <div className="seperator" />
                        <ul>
                            <li>A supportive & immersive learning environment.</li>
                            <li>Accredited¹ curriculum.</li>
                            <li>Strong foundation in Computer Science equivalent to 15 credits toward a CS degree (Five 3-credit classes).</li>
                            <li>Articulation agreement with participating universities.</li>
                        </ul>
                    </div>
                </div>

                <div className="content-block">
                    <div className={`faq-header ${selected === 3 ? "header-toggle" : null}`} onClick={() => handleSelection(3)}>
                        <h6>How Do I Keep Learning After The Program?</h6>
                        <FontAwesomeIcon icon={selected === 3 ? faMinusCircle : faPlusCircle} />
                    </div>

                    <div className={`faq-content ${selected === 3 ? "content-toggle" : null}`}>
                        <p>After the bootcamp there is still a lot more for a developer to keep learning to achieve mastery in the art of developing software. Bottega has built a full CS degree2 of content which is accessible to all our students to push them all the way to senior levels of skill.</p>
                        <div className="seperator" />
                        <p>After mastering all content, and completing the minimum number of project hours, you will receive your “Senior Software Engineer Certificate”, and are also eligible to earn a real Bachelor of Science Degree2 from participating sister universities after meeting their General Education and other requirements.</p>
                    </div>
                </div>
            </div>
        ),
        parttime: (
            <div className="course-faq-content-blocks-wrapper">
                <div className="content-block">
                    <div className={`faq-header ${selected === 1 ? "header-toggle" : null}`} onClick={() => handleSelection(1)}>
                        <h6>What Is The Cost Of The Part Time Section?</h6>
                        <FontAwesomeIcon icon={selected === 1 ? faMinusCircle : faPlusCircle} />
                    </div>

                    <div className={`faq-content ${selected === 1 ? "content-toggle" : null}`}>
                        <p>We understand that many of the students who need our program the most are also the ones that can’t afford to quit their jobs and go to school full-time. The same courses that are offered full-time are also offered part-time.</p>
                        <div className="seperator" />
                        <p>Current price for the available part-time tracks is: $7,500 U.S.</p>
                        <div className="seperator" />
                        <p>Part-time w/ Tutor: It will take you a estimated 6-9 months to complete the course and earn your “Web Developer Certificate”</p>
                    </div>
                </div>

                <div className="content-block">
                    <div className={`faq-header ${selected === 2 ? "header-toggle" : null}`} onClick={() => handleSelection(2)}>
                        <h6>Do You Have To Physically Attend The Bootcamp?</h6>
                        <FontAwesomeIcon icon={selected === 2 ? faMinusCircle : faPlusCircle} />
                    </div>

                    <div className={`faq-content ${selected === 2 ? "content-toggle" : null}`}>
                        <p>No. While there are advantages to being physically at the school while going though the course you have the option to attend the bootcamp via video streaming.</p>
                        <div className="seperator" />
                        <p>There are two remote options:</p>
                        <div className="seperator" />
                        <ul>
                            <li>Live 9-5. You can attend a normal bootcamp class in real-time and participate with other students learning the same material. This is the strongest support system for immersive learning.</li>
                            <li>Self-Paced w/ Tutor. Access to all the same curriculum we use in our day school. Live on-demand support whenever you need it from your personal Bottega tutor online.</li>
                        </ul>
                    </div>
                </div>

                <div className="content-block">
                    <div className={`faq-header ${selected === 3 ? "header-toggle" : null}`} onClick={() => handleSelection(3)}>
                        <h6>How Do I Keep Learning After The Bootcamp?</h6>
                        <FontAwesomeIcon icon={selected === 3 ? faMinusCircle : faPlusCircle} />
                    </div>

                    <div className={`faq-content ${selected === 3 ? "content-toggle" : null}`}>
                        <p>After the bootcamp there is still a lot more for a developer to keep learning to achieve mastery in the art of developing software. Bottega has built a full CS degree2 of content which is accessible to all our students to push them all the way to senior levels of skill.</p>
                        <div className="seperator" />
                        <p>After mastering all content, and completing the minimum number of project hours, you will receive your “Senior Software Engineer Certificate”, and are also eligible to earn a real Bachelor of Science Degree2 from participating sister universities after meeting their General Education and other requirements.</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="course-faq">
            <div className="course-faq-content-wrapper">
                <h2>FAQ</h2>
                {faqContent[props.course]}
            </div>
        </div>
    )
}