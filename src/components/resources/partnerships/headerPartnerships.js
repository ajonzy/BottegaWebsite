import React from 'react'

import UniversityHeaderImage from "../../../../static/assets/images/partnerships/university-partnership-header.jpg"
import InstructorHeaderImage from "../../../../static/assets/images/partnerships/instructor-header-image.png"

export default function headerPartnerships(props) {
    const headerContent = {
        university: (
            <div className="header-partnerships-content-wrapper">
                <div className="header-text">
                    <h1>Success!</h1>
                    <h2>For You And Your Students</h2>
                    <p>According to a <a href="http://burning-glass.com/research/coding-skills/">Burning Glass Technologies report</a>, nearly half (49%) of all jobs that pay more than $58,000 require some kind of coding skills and pay $22,000 more, on average, than other jobs that don’t.</p>
                    <p>With such promising statistics, it’s no wonder students are looking to independent programs to quickly develop their programming skills. But don’t despair! A Bottega partnership ensures your traditional university can support aspiring software engineers with a robust, fully accredited curriculum<sup>1</sup> in a flexible, comprehensive format.</p>
                </div>

                <div className="header-image">
                    <img src={UniversityHeaderImage} style={{width: "327px", height: "434px"}} alt=""/>
                </div>
            </div>
        ),
        instructor: (
            <div className="header-partnerships-content-wrapper">
                <div className="header-text">
                    <h2 style={{marginTop: "30px"}}>Utah Instructor Endorsements</h2>
                    <p style={{color: "#888", width: "502px"}}>Bottega has made it convenient for teachers to get endorsed in partnership with the Utah State Board of Education. Our endorsement program is available online, on your time and with Bottega mentor support. Receive current instruction and industry specific training to boost your students experience and education.</p>
                </div>

                <div className="header-image">
                    <img src={InstructorHeaderImage} style={{marginLeft: "95px"}} alt=""/>
                </div>
            </div>
        )
    }
    return (
        <div className="header-partnerships">
            {headerContent[props.partner]}
        </div>
    )
}