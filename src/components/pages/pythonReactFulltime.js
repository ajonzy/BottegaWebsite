import React from 'react'

import Header from "../resources/headerMain"
import Footer from "../resources/footerMain"
import HeaderVideo from "../resources/headerVideo"
import LegalBanner from "../resources/legalBanner"
import SyllabusDownload from "../resources/courses/syllabusDownload"
import CourseDescription from "../resources/courses/courseDescription"
import DatesAndOptions from "../resources/courses/datesAndOptions"
import ApplicationProcess from "../resources/courses/applicationProcess"
import TuitionCalculator from "../resources/courses/tuitionCalculator"
import EmployableSkillset from "../resources/courses/employableSkillset"
import LearningExperience from "../resources/courses/learningExperience"
import DontWaitBanner from "../resources/courses/dontWaitBanner"
import LanguageSummaries from "../resources/courses/languageSummaries"
import CourseCurriculum from "../resources/courses/courseCurriculum"
import DailySchedule from "../resources/courses/dailySchedule"
import CourseFAQ from "../resources/courses/courseFAQ"

import FulltimeVideo from "../../../static/assets/images/pythonReactCourses/fulltimeVideo.mp4"
import Syllabus from "../../../static/assets/downloads/FulltimeSyllabus.pdf"

export default function pythonReactFulltime() {
    return (
        <div className="python-react-fulltime">
            <Header />
            <div className="python-react-fulltime-content-wrapper">
                <HeaderVideo 
                    video={FulltimeVideo}
                    superHeader={<h5>Full Stack Development (Full-Time)</h5>}
                    header={<h1>In Demand Skills Python 3<br/>and React.js</h1>}
                    subHeader={<h4>Beginner or not, you’ll gain skillsets aimed to get you hired by learning<br/>two of the most in-demand and employable programming languages in<br/>the industry.</h4>}
                />
                <SyllabusDownload syllabus={Syllabus} />
                <CourseDescription course="fulltime" />
                <DatesAndOptions />
                <ApplicationProcess course="fulltime" />
                <TuitionCalculator course="main" />
                <EmployableSkillset />
                <LearningExperience />
                <DontWaitBanner />
                <LanguageSummaries course="main" />
                <CourseCurriculum course="main" />
                <DailySchedule />
                <CourseFAQ course="fulltime" />
                <LegalBanner />
            </div>
            <Footer />
        </div>
    )
}