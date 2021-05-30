import React from 'react';
import SubtaskContainer from './SubtaskContainer';
import UserContainer from './UserContainer';

const Dashboard = (props) =>
  <div class="main">
    <SubtaskContainer />
    <UserContainer />
  </div>;

export default Dashboard;
