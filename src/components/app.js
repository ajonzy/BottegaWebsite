import React from 'react';
import {useRoutes} from 'hookrouter';

import Home from "./pages/home"
import ScheduleCall from "./pages/scheduleCall"
import PythonReactFulltime from "./pages/pythonReactFulltime"
import PythonReactFulltimeRemote from "./pages/pythonReactFulltimeRemote"
import PythonReactParttime from "./pages/pythonReactParttime"
import FrontEndParttime from "./pages/frontEndParttime"
import Accreditation from "./pages/accreditation"
import Universities from "./pages/universities"

export default function app() {
  const routes = {
    "/": () => <Home />,
    "/schedule-call": () => <ScheduleCall />,
    "/python-react-full-time": () => <PythonReactFulltime />,
    "/python-react-full-time-remote": () => <PythonReactFulltimeRemote />,
    "/python-react-part-time": () => <PythonReactParttime />,
    "/front-end-part-time": () => <FrontEndParttime />,
    "/accreditation": () => <Accreditation />,
    "/universities": () => <Universities />
  };
  
  const routeResult = useRoutes(routes)

  return (
    <div className='app'>
      {routeResult}
    </div>
  );
}
