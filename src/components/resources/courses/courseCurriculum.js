import React from 'react'

import PythonImg from "../../../../static/assets/images/pythonReactCourses/python.png"
import FrontEndImage from "../../../../static/assets/images/pythonReactCourses/front-end.png"
import DatabaseImage from "../../../../static/assets/images/pythonReactCourses/database.png"
import UMLImage from "../../../../static/assets/images/pythonReactCourses/uml.png"
import WebApps from "../../../../static/assets/images/pythonReactCourses/webApps.png"
import OOP from "../../../../static/assets/images/pythonReactCourses/object-oriented-programming.png"
import AdvOOP from "../../../../static/assets/images/pythonReactCourses/adv-oop.png"
import TDDBDD from "../../../../static/assets/images/pythonReactCourses/tdd-bdd.png"

export default function courseCurriculum(props) {
    const curriculumContent = {
        main: (
            <div className="course-curriculumn-content-blocks-wrapper">
                <div className="content-block">
                    <img src={PythonImg} alt=""/>
                    <div className="content-text">
                        <h4>CS 277: Intro to Programming in Python</h4>
                        <p>Introduces the fundamental concepts of computer programming. Presents the ideas, tools, structure, syntax, and design techniques for developing well-formed programs. Studies problem solving, program structure, data types, decision logic, loops, functions, input and output, and arrays. Introduces the basic ideas of classes and objects. Students will program a number of assignments that demonstrate their understanding of these concepts.</p>
                        <p>May be delivered online. Recommended for 3.0 Credits. Prerequisite: <a href="https://rails.devcamp.com/prework">Free DevCamp PreWork</a></p>
                    </div>
                </div>

                <div className="content-block">
                    <img src={PythonImg} alt=""/>
                    <div className="content-text">
                        <h4>CS 384: Python Software Development</h4>
                        <p>Covers advanced features of the Python programming language. Includes scripting, dynamic typing, data types (sequences, sets, mappings, files, etc.), loops, iterators, generators, functions, coroutines, classes and objects, modules, packages and scope, runtime services, data wrangling, concurrent programming, etc.</p>
                        <p>May be delivered online. Recommended for 3.0 Credits. Prerequisite: CS 277</p>
                    </div>
                </div>

                <div className="content-block">
                    <img src={FrontEndImage} alt=""/>
                    <div className="content-text">
                        <h4>CS 301: Front-End Foundations</h4>
                        <p>Covers design and development of browser-based programs with an emphasis on single-page applications. Teaches generation and modification of HTML via JavaScript, debugging techniques, communicating with web servers, and use of XML and JSON.</p>
                        <p>May be delivered online. Recommended for 3.0 Credits. Prerequisite: <a href="https://rails.devcamp.com/prework">Free DevCamp PreWork</a></p>
                    </div>
                </div>

                <div className="content-block">
                    <img src={DatabaseImage} alt=""/>
                    <div className="content-text">
                        <h4>CS 382: Database Foundations</h4>
                        <p>Introduces theory, concepts, architecture, and use of database management systems (DBMS). Presents the relational and object-oriented database models used in both local and client/server databases. Discusses the Structured Query Language (SQL), database design, normalization theory, and relational calculus relating to database management systems.</p>
                        <p>May be delivered online. Recommended for 3.0 Credits. Prerequisite: CS 277</p>
                    </div>
                </div>

                <div className="content-block">
                    <img src={UMLImage} alt=""/>
                    <div className="content-text">
                        <h4>CS 497: Advanced Web Development – React</h4>
                        <p>Teaches how to design, implement, test, and debug complex web applications using both client and server side technologies. Includes web security, data markup languages, server side scripting technologies, web application interactions with databases, and web service architectures. Students will develop full business applications having sophisticated user interactions at a variety of security levels.</p>
                        <p>May be delivered online. Recommended for 3.0 Credits. Prerequisite: CS 301</p>
                    </div>
                </div>
            </div>
        ),
        frontend: (
            <div className="course-curriculumn-content-blocks-wrapper">
                <div className="content-block">
                    <img src={FrontEndImage} alt=""/>
                    <div className="content-text">
                        <h4>CS 301: Front End Foundations (JavaScript)</h4>
                        <p>Covers design and development of browser-based programs; teaching generation of HTML via JavaScript, debugging, web server communication, and use of XML and JSON.</p>
                        <p>May be delivered online. Recommended for 3.0 Credits. Prerequisite: <a href="https://rails.devcamp.com/prework">Free DevCamp PreWork</a></p>
                    </div>
                </div>

                <div className="content-block">
                    <img src={UMLImage} alt=""/>
                    <div className="content-text">
                        <h4>CS 491: System Analysis, Design & UML Development</h4>
                        <p>Covers essential concepts for system analysis, such as: UML diagram models, OOP class structure & diagrams, handling problem domains, and problem solving techniques.</p>
                        <p>May be delivered online. Recommended for 3.0 Credits.</p>
                    </div>
                </div>

                <div className="content-block">
                    <img src={WebApps} alt=""/>
                    <div className="content-text">
                        <h4>CS 497: Advanced Web Development</h4>
                        <p>Development of complex web applications, Including: web security, data markup languages, server side scripting, web database interactions, web service architectures, etc.</p>
                        <p>May be delivered online. Recommended for 3.0 Credits.</p>
                    </div>
                </div>
            </div>
        ),
        ruby: (
            <div className="course-curriculumn-content-blocks-wrapper">
                <div className="content-block">
                    <img src={OOP} alt=""/>
                    <div className="content-text">
                        <h4>CS 277: Intro to Programming (Ruby)</h4>
                        <p>Introduces fundamental concepts of object oriented programing; such as: classes, instantiation, inheritance, polymorphism, control flow constructs, algorithms, etc.</p>
                        <p>May be delivered online. Recommended for 3.0 Credits. Prerequisite: <a href="https://rails.devcamp.com/prework">Free DevCamp PreWork</a></p>
                    </div>
                </div>

                <div className="content-block">
                    <img src={WebApps} alt=""/>
                    <div className="content-text">
                        <h4>CS 410: Web App Development (Rails)</h4>
                        <p>Teaches proper web development methods using ruby on rails; such as: RESTful based routes, data flow, SQL database configuration & queries, and asset management.</p>
                        <p>May be delivered online. Recommended for 3.0 Credits. Prerequisite: CS 277</p>
                    </div>
                </div>

                <div className="content-block">
                    <img src={AdvOOP} alt=""/>
                    <div className="content-text">
                        <h4>CS 384: Advanced OOP (Ruby)</h4>
                        <p>Covers advanced Ruby concepts and techniques; including: file classes, CRUD, regular expressions, values, metaprogramming, API communicators, and machine learning algorithms.</p>
                        <p>May be delivered online. Recommended for 3.0 Credits.</p>
                    </div>
                </div>

                <div className="content-block">
                    <img src={TDDBDD} alt=""/>
                    <div className="content-text">
                        <h4>CS 370: TDD/BDD</h4>
                        <p>Build full web apps while following TTD/BDD workflow, working with testing frameworks, building test suites; and implementing mocks, stubs, and websocket components.</p>
                        <p>May be delivered online. Recommended for 3.0 Credits.</p>
                    </div>
                </div>

                <div className="content-block">
                    <img src={WebApps} alt=""/>
                    <div className="content-text">
                        <h4>CS 497: Advanced Web Development (Rails)</h4>
                        <p>Build a microservice based app proving understanding of: microservice architecture design, API communicators, token authentication, and multi-tenancy components.</p>
                        <p>May be delivered online. Recommended for 3.0 Credits.</p>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="course-curriculum">
            <div className="course-curriculum-content-wrapper">
                <h2>Course Curriculum</h2>
                {curriculumContent[props.course]}
            </div>
        </div>
    )
}