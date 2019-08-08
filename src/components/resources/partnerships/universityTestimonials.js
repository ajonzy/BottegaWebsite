import React, { useState, useEffect, useRef } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"

export default function universityTestimonials() {
    const [selection, setSelection] = useState(1)
    const selectorInterval = useRef()

    useEffect(() => {
        if (selectorInterval.current !== -1) {
            selectorInterval.current = setInterval(() => {
                setSelection(selection !== 3 ? selection + 1 : 1)
            }, 7000);
        }

        return(() => {
            clearInterval(selectorInterval.current)
        })
    })

    const selector = (direction) => {
        clearInterval(selectorInterval.current)

        if (direction === "left") { setSelection(selection !== 1 ? selection - 1 : 3) }
        if (direction === "right") { setSelection(selection !== 3 ? selection + 1 : 1) }

        selectorInterval.current = -1
    }

    return (
        <div className="university-testimonials">
            <div className="university-testimonials-content-wrapper">
                <div className="testimonials-blocks-viewport-wrapper">
                    <FontAwesomeIcon icon={faChevronLeft} className="university-testimonials-arrow" onClick={() => selector("left")} />
                    <div className="testimonials-blocks-viewport">
                        <div className="testimonials-blocks-wrapper" style={{transform: `translateX(${-595 * (selection - 1)}px)`}}>
                            <div className="content-block" style={selection === 1 ? null : {opacity: "0", height: "0px"}}>
                                <p>“UVU’s affiliation with Bottega benefits our students tremendously. This relationship allows us to offer a high-quality, industry-demanded curriculum that leads to job placement at some of the best companies in our state and region. We are excited about our online and future curriculum pathways with Bottega, and we are eager to continue serving this community with this unprecedented offering. Our Web Development Academy is financially viable for students and the university. The placement rate is phenomenal. Our students get high-paying jobs from local employers, and area corporations get highly-skilled developers and professionals.” </p>
                                <span id="university-testimonial-author">Mike Walker</span>
                                <span id="university-testimonial-location">Assistant Director, Utah Valley University</span>
                            </div>

                            <div className="content-block" style={selection === 2 ? null : {opacity: "0", height: "0px"}}>
                                <p>“Dawson Community College is excited for our partnership with Bottega. From the beginning, Bottega has been accomodating, professional, and flexible as we develop this unique opportunity. One of the most important aspects of this partnership, is their connection and working relationships with IT companies on the "Silicone Slopes" of Utah. The vision of offering a Boot Camp at Dawson Community College is not the end all... but continued discussion and action toward embedded certificate tracts, Associate Degrees, online, and potential Bachelors are all in the forseeable future. This is an important step in the right direction for Dawson because it provides quality and affordable education that leads to high paying jobs. Thank you, Bottega!” </p>
                                <span id="university-testimonial-author">Scott Reed Mickelsen, PhD</span>
                                <span id="university-testimonial-location">President, Dawson Community College</span>
                            </div>

                            <div className="content-block" style={selection === 3 ? null : {opacity: "0", height: "0px"}}>
                                <p>“Bottega has proven to be an incredibly advantageous partner. Providing us with a revolutionary approach to technology curriculum, Bottega pairs vigilant monitoring of industry trends with agile inclusion of the cutting-edge technological advances. We have come to trust Bottega to supply us with learning resources that ensure our students have access to the most up-to-date curriculum available. Rigorous in its design, we have found Bottega’s curriculum to be worthy of its credit recognition by the American Council on Education (ACE). Ethical in its business practices and impeccable in its product delivery, we look forward to partnering with Bottega for many years to come.” </p>
                                <span id="university-testimonial-author">New Charter</span>
                                <span id="university-testimonial-location"></span>
                            </div>
                        </div>
                    </div>
                    <FontAwesomeIcon icon={faChevronRight} className="university-testimonials-arrow" onClick={() => selector("right")} />
                </div>

                <span id="university-testimonial-selection">{selection}/3</span>
            </div>
        </div>
    )
}