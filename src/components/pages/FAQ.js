import React, { useState } from 'react'
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons"

import Header from "../resources/headerMain"
import Footer from "../resources/footerMain"
import LegalBanner from "../resources/legalBanner"

export default function faqPage() {
    const [selected, setSelected] = useState(0)

    const handleSelection = (selector) => {
        setSelected(selector)
    }

    return (
        <div className="faq-page">
            <Header />
            <div className="faq-page-content-wrapper">
                <div className="faq-page-header">
                    <h4>Browse Some Common Questions</h4>
                    <p>Here are a few of our most commonly asked questions. If you still have questions please don’t hesitate to contact us</p>
                </div>

                <div className="faq-content-blocks-wrapper">
                    <div className="content-block">
                        <div className={`faq-header ${selected === 1 ? "header-toggle" : null}`} onClick={() => handleSelection(1)}>
                            <h6>How Long Is The Full Bootcamp Course?</h6>
                            <FontAwesomeIcon icon={selected === 1 ? faMinusCircle : faPlusCircle} />
                        </div>

                        <div className={`faq-content ${selected === 1 ? "content-toggle" : null}`}>
                            <p>Each full-time bootcamp cohort takes 12 weeks to get through 600 hours of education and project based learning. This section completes your basic education in software engineering and qualifies you to earn your “Web Developer Certificate”.</p>
                        </div>
                    </div>

                    <div className="content-block">
                        <div className={`faq-header ${selected === 2 ? "header-toggle" : null}`} onClick={() => handleSelection(2)}>
                            <h6>Costs And Details For The Full Time Program?</h6>
                            <FontAwesomeIcon icon={selected === 2 ? faMinusCircle : faPlusCircle} />
                        </div>

                        <div className={`faq-content ${selected === 2 ? "content-toggle" : null}`}>
                            <p>Bottega offers the best Return on Investment* (ROI) in tech education. The program includes:</p>
                            <div className="seperator" />
                            <ul>
                                <li>Current pricing and more details on the main page for this education track found <Link to="/python-react-full-time">here</Link>.</li>
                                <li>A supportive & immersive learning environment.</li>
                                <li>Curriculum that has been academically reviewed and comes with credit recommendations & transcript by <a href="http://www.acenet.edu/news-room/Pages/College-Credit-Recommendation-Service-CREDIT.aspx">ACE</a>.</li>
                                <li>Strong foundation in Computer Science equivalent to 15 credits toward a CS degree (Five 3-credit classes).</li>
                                <li>Articulation agreement with participating universities.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="content-block">
                        <div className={`faq-header ${selected === 3 ? "header-toggle" : null}`} onClick={() => handleSelection(3)}>
                            <h6>Costs And Details For The Part Time Program?</h6>
                            <FontAwesomeIcon icon={selected === 3 ? faMinusCircle : faPlusCircle} />
                        </div>

                        <div className={`faq-content ${selected === 3 ? "content-toggle" : null}`}>
                            <p>We understand that many of the students who need our program the most are also the ones that can’t afford to quit their jobs and go to school full-time. The same courses that are offered full-time are also offered part-time.</p>
                            <div className="seperator" />
                            <ul>
                                <li>Current pricing and more details on the main page for this education track found <Link to="/python-react-part-time">here</Link>.</li>
                                <li>A supportive & immersive learning environment.</li>
                                <li>Curriculum that has been academically reviewed and comes with credit recommendations & transcript by <a href="http://www.acenet.edu/news-room/Pages/College-Credit-Recommendation-Service-CREDIT.aspx">ACE</a>.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="content-block">
                        <div className={`faq-header ${selected === 4 ? "header-toggle" : null}`} onClick={() => handleSelection(4)}>
                            <h6>Is Ther Financing Available?</h6>
                            <FontAwesomeIcon icon={selected === 4 ? faMinusCircle : faPlusCircle} />
                        </div>

                        <div className={`faq-content ${selected === 4 ? "content-toggle" : null}`}>
                            <p>Yes, we offer financing with a variety of payment terms options. Talk to one of our representatives for information and to see if you qualify.</p>
                        </div>
                    </div>

                    <div className="content-block">
                        <div className={`faq-header ${selected === 5 ? "header-toggle" : null}`} onClick={() => handleSelection(5)}>
                            <h6>Will I Need To Physically Go To The Campus To Go Through The Bootcamp?</h6>
                            <FontAwesomeIcon icon={selected === 5 ? faMinusCircle : faPlusCircle} />
                        </div>

                        <div className={`faq-content ${selected === 5 ? "content-toggle" : null}`}>
                            <p>No. While there are advantages to being physically at the school while going though the course you have the option to attend the bootcamp via video streaming.</p>
                            <div className="seperator" />
                            <p>There are three remote options:</p>
                            <div className="seperator" />
                            <ul>
                                <li>Live 9-5. You can attend a normal bootcamp class in real-time and participate with other students learning the same material. This is the strongest support system for immersive learning.</li>
                                <li>Self-Paced w/ Tutor. Access to all the same curriculum we use in our day school. Live on-demand support whenever you need it from your personal Bottega tutor online.</li>
                                <li>Self-Paced Independent Study. Access to all the same curriculum we use in our day school but learning on your own.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="content-block">
                        <div className={`faq-header ${selected === 6 ? "header-toggle" : null}`} onClick={() => handleSelection(6)}>
                            <h6>Is The Bootcamp Full Time?</h6>
                            <FontAwesomeIcon icon={selected === 6 ? faMinusCircle : faPlusCircle} />
                        </div>

                        <div className={`faq-content ${selected === 6 ? "content-toggle" : null}`}>
                            <p>Yes. It is a 12 week intensive course that will give you a comprehensive foundation for full-stack development.</p>
                            <div className="seperator" />
                            <p>Part-time options are also available.</p>
                        </div>
                    </div>

                    <div className="content-block">
                        <div className={`faq-header ${selected === 7 ? "header-toggle" : null}`} onClick={() => handleSelection(7)}>
                            <h6>How Do I Keep Learning After The Bootcamp?</h6>
                            <FontAwesomeIcon icon={selected === 7 ? faMinusCircle : faPlusCircle} />
                        </div>

                        <div className={`faq-content ${selected === 7 ? "content-toggle" : null}`}>
                            <p>After the bootcamp there is still a lot more for a developer to keep learning to achieve mastery in the art of developing software. Bottega has built a full CS degree equivalent of content which is accessible to all our students to push them all the way to senior levels of skill.</p>
                            <div className="seperator" />
                            <p>After mastering all content, and completing the minimum number of project hours, you can apply & test to receive a “Senior Software Engineer Certificate”.</p>
                        </div>
                    </div>

                    <div className="content-block">
                        <div className={`faq-header ${selected === 8 ? "header-toggle" : null}`} onClick={() => handleSelection(8)}>
                            <h6>What Does Accreditation* Mean?</h6>
                            <FontAwesomeIcon icon={selected === 8 ? faMinusCircle : faPlusCircle} />
                        </div>

                        <div className={`faq-content ${selected === 8 ? "content-toggle" : null}`}>
                            <p>Bottega is an Accredited* post-secondary private school. This means it is periodically audited by third parties who look at school procedures, curriculum & student outcomes to ensure the a high level of organizational and academic discipline is in place.</p>
                            <div className="seperator" />
                            <p>Our accreditation* is through N.W.A.C., which is a private accrediting body <strong>not recognized by the U.S. Department of Education</strong>, which also oversees more than 30,000 public High Schools, Post-Secondary schools and many other colleges in the North-West region of the U.S. (Basically all the non-degree schools). Their sister division the N.W.A.C.C. oversees the degree granting schools with a similar oversight program.</p>
                            <div className="seperator" />
                            <p>As of May 2017 Bottega is the only independently accredited* software “bootcamp” in the U.S.  We have chosen to voluntarily apply the same rigorous education standards that most public non-profit schools have to comply with to ensure a level playing field and the best possible assurance of outcomes for our students.</p>
                        </div>
                    </div>

                    <div className="content-block">
                        <div className={`faq-header ${selected === 9 ? "header-toggle" : null}`} onClick={() => handleSelection(9)}>
                            <h6>Why Did Bottega Choose AdvancED?</h6>
                            <FontAwesomeIcon icon={selected === 9 ? faMinusCircle : faPlusCircle} />
                        </div>

                        <div className={`faq-content ${selected === 9 ? "content-toggle" : null}`}>
                            <p>More information about AdvancED can be found on their website: http://www.advanc-ed.org/. Bottega specifically aligns itself with AdvancED because it feels that U.S. Department of Education oversight leads to inferior programs and the kind of out-dated curriculum found on most college & university campuses in the U.S. By working with AdvancED, Bottega feels it is better able to stay on the cutting edge of curriculum aligned with the needs of corporations and ever changing job requirements.</p>
                        </div>
                    </div>

                    <div className="content-block">
                        <div className={`faq-header ${selected === 10 ? "header-toggle" : null}`} onClick={() => handleSelection(10)}>
                            <h6>Have Other Respected Schools Chosen AdvancED?</h6>
                            <FontAwesomeIcon icon={selected === 10 ? faMinusCircle : faPlusCircle} />
                        </div>

                        <div className={`faq-content ${selected === 10 ? "content-toggle" : null}`}>
                            <p>BYU Independent Study has also chosen AdvancED as its oversight body since 1966. You can see their current registration here: http://www.advanc-ed.org/oasis2/u/par/accreditation/summary?institutionId=5035</p>
                        </div>
                    </div>
                </div>

                <div className="faq-footer">
                    <div className="footer-content-wrapper">
                        <h5>Still have questions?</h5>
                        <h5>Talk to one of our advisors</h5>
                        <Link to="/contact">Contact Us</Link>
                    </div>
                </div>
                <LegalBanner />
            </div>
            <Footer />
        </div>
    )
}