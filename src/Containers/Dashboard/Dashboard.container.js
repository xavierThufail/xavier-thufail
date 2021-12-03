import React from 'react';

import DashboardComponent from './Dashboard.component';
import config from './Dashboard.config';

const Dashboard = (props) => {
  return <DashboardComponent {...props} />;
};

Dashboard.displayName = config.container.displayName;

export default Dashboard;
