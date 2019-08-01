import React from 'react'

import Header from "../resources/headerMain"
import Footer from "../resources/footerMain"
import HeaderBanner from "../resources/headerBanner"
import LegalBanner from "../resources/legalBanner"
import SyllabusDownload from "../resources/courses/syllabusDownload"
import CourseDescription from "../resources/courses/courseDescription"
import ApplicationProcess from "../resources/courses/applicationProcess"
import TuitionCalculator from "../resources/courses/tuitionCalculator"
import EmployableSkillset from "../resources/courses/employableSkillset"
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
                    superHeader={<h5>Full Stack Development (Part-Time)</h5>}
                    header={<h1>Remote Python 3 and<br/>React Course</h1>}
                    subHeader={<h4>Remote online learning anytime anywhere. <br/>Get trained on three of the most in-demand coding <br/>technologies in computer science; Python, React & JavaScript.</h4>}
                />
                <SyllabusDownload syllabus={Syllabus} />
                <CourseDescription course="parttime" />
                <ApplicationProcess course="parttime" />
                <TuitionCalculator course="mainParttime"/>
                <EmployableSkillset />
                <LearningExperience />
                <DontWaitBanner />
                <LanguageSummaries course="main" />
                <CourseCurriculum course="main" />
                <div className="seperator" style={{height: "80px"}} />
                <CourseFAQ course="parttime" />
                <LegalBanner />
            </div>
            <Footer />
        </div>
    )
}