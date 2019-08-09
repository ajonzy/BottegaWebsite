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

export default function rubyParttime() {
    return (
        <div className="ruby-parttime">
            <Header />
            <div className="python-react-fulltime-remote-content-wrapper">
                <HeaderBanner 
                    banner={ParttimeBanner}
                    header={<h1>Full Stack Ruby,  <br/>Part-Time Remote</h1>}
                    subHeader={<h4>This track teaches you the Rails development <br/>framework—written in the Ruby language—that is <br/>geared towards simplicity and productivity. <br/>You’ll gain a knowledge of object-oriented programming, <br/>testing frameworks, and database architecture for <br/>web development applications.</h4>}
                />
                <LearnMore />
                <CourseDescription course="parttime" />
                <ApplicationProcess course="parttime" />
                <TuitionCalculator course="mainParttime"/>
                <DontWaitBanner />
                <LanguageSummaries course="ruby" />
                <CourseCurriculum course="ruby" />
                <div className="seperator" style={{height: "80px"}} />
                <CourseFAQ course="parttime" />
                <LegalBanner />
            </div>
            <Footer />
        </div>
    )
}