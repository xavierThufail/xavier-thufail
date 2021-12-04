import React from 'react';

import { Loading } from '../../HOC';
import DashboardComponent from './Dashboard.component';
import useDashboard from './Dashboard.hook';
import config from './Dashboard.config';

const Dashboard = (props) => {
  const hooks = useDashboard(props)

  return <DashboardComponent {...hooks} />;
};

Dashboard.displayName = config.container.displayName;

export default Loading(Dashboard);
