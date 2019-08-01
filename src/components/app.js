import React from 'react';
import {useRoutes} from 'hookrouter';

import Home from "./pages/home"
import ScheduleCall from "./pages/scheduleCall"
import PythonReactFulltime from "./pages/pythonReactFulltime"
import PythonReactFulltimeRemote from "./pages/pythonReactFulltimeRemote"

export default function app() {
  const routes = {
    "/": () => <Home />,
    "/schedule-call": () => <ScheduleCall />,
    "/python-react-full-time": () => <PythonReactFulltime />,
    "/python-react-full-time-remote": () => <PythonReactFulltimeRemote />
  };
  
  const routeResult = useRoutes(routes)

  return (
    <div className='app'>
      {routeResult}
    </div>
  );
}
