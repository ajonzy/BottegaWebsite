import React from 'react'

import Header from "../resources/headerMain"
import Footer from "../resources/footerMain"
import HeaderBanner from "../resources/headerBanner"
import LegalBanner from "../resources/legalBanner"
import LearnMore from "../resources/courses/learnMore"
import CourseDescription from "../resources/courses/courseDescription"
import ApplicationProcess from "../resources/courses/applicationProcess"
import TuitionCalculator from "../resources/courses/tuitionCalculator"
import LearningExperience from "../resources/courses/learningExperience"
import DontWaitBanner from "../resources/courses/dontWaitBanner"
import LanguageSummaries from "../resources/courses/languageSummaries"
import CourseCurriculum from "../resources/courses/courseCurriculum"
import CourseFAQ from "../resources/courses/courseFAQ"

import ParttimeBanner from "../../../static/assets/images/pythonReactCourses/parttime-header-image.jpg"
import Syllabus from "../../../static/assets/downloads/ParttimeSyllabus.pdf"

export default function pythonReactFulltimeRemote() {
    return (
        <div className="python-react-fulltime-remote">
            <Header />
            <div className="python-react-fulltime-remote-content-wrapper">
                <HeaderBanner 
                    banner={ParttimeBanner}
                    superHeader={<h5>Front-End Development (Part-Time)</h5>}
                    header={<h1>Front-End Development <br/>Part-Time Remote</h1>}
                    subHeader={<h4>This track empowers students to design and develop dynamic <br/>user interfaces utilizing modern, and in demand, coding technologies. <br/>Students learn essential design and development strategies, <br/>including common industry conventions, to create intuitive <br/>web applications and experiences.</h4>}
                />
                <LearnMore />
                <CourseDescription course="parttime" />
                <ApplicationProcess course="parttime" />
                <TuitionCalculator course="mainParttime"/>
                <LearningExperience />
                <DontWaitBanner />
                <LanguageSummaries course="frontend" />
                <CourseCurriculum course="frontend" />
                <div className="seperator" style={{height: "80px"}} />
                <CourseFAQ course="parttime" />
                <LegalBanner />
            </div>
            <Footer />
        </div>
    )
}