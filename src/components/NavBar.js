import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/"> Home | </NavLink>
       <NavLink to="/new"> Create New Subtasks | </NavLink>
       <NavLink to="/dashboard"> Dashboard to Assign Subtasks </NavLink>
    </div>
  );
};

export default NavBar;
