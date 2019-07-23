import React from 'react';
import {useRoutes} from 'hookrouter';

import Home from "./pages/home"
import ScheduleCall from "./pages/scheduleCall"

export default function app() {
  const routes = {
    "/": () => <Home />,
    "/schedule-call": () => <ScheduleCall />
  };
  
  const routeResult = useRoutes(routes)

  return (
    <div className='app'>
      {routeResult}
    </div>
  );
}
