import React from 'react';
import SubtaskContainer from '../containers/SubtaskContainer';
import UserContainer from '../containers/UserContainer';

const Dashboard = (props) =>
  <div class="main">
    <SubtaskContainer />
    <UserContainer />
  </div>;

export default Dashboard;
