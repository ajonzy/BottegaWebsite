import React, { useEffect, useRef } from 'react';
import {useRoutes} from 'hookrouter';

import Home from "./pages/home"
import ScheduleCall from "./pages/scheduleCall"
import PythonReactFulltime from "./pages/pythonReactFulltime"
import PythonReactFulltimeRemote from "./pages/pythonReactFulltimeRemote"
import PythonReactParttime from "./pages/pythonReactParttime"
import FrontEndParttime from "./pages/frontEndParttime"
import RubyParttime from "./pages/rubyParttime"
import Accreditation from "./pages/accreditation"
import Universities from "./pages/universities"
import InstructorEndorsements from "./pages/instructorEndorsements"
import Veterans from "./pages/veterans"
import FAQ from "./pages/FAQ"

export default function app() {
  const routes = {
    "/": () => <Home />,
    "/schedule-call": () => <ScheduleCall />,
    "/python-react-full-time": () => <PythonReactFulltime />,
    "/python-react-full-time-remote": () => <PythonReactFulltimeRemote />,
    "/python-react-part-time": () => <PythonReactParttime />,
    "/front-end-part-time": () => <FrontEndParttime />,
    "/ruby-part-time": () => <RubyParttime />,
    "/accreditation": () => <Accreditation />,
    "/universities": () => <Universities />,
    "/instructor-endorsements": () => <InstructorEndorsements />,
    "/veterans": () => <Veterans />,
    "/faq": () => <FAQ />
  };
  
  const routeResult = useRoutes(routes)
  const appLoaded = useRef(false)

  useEffect(() => {
    if (appLoaded.current === false) {
      appLoaded.current = true
    } 
    else {
      window.scrollTo(0, 0, "auto")
    }
  })

  return (
    <div className='app'>
      {routeResult}
    </div>
  );
}
