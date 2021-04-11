import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/tasks">Create Tasks</NavLink>
       <NavLink to="/subtasks">Create Subtasks</NavLink>
       <NavLink to="/dashboard">Dashboard</NavLink>
    </div>
  );
};

export default NavBar;
