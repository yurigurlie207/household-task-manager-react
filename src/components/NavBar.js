import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/"> Home </NavLink>
       <NavLink to="/subtasks"> Create Subtasks</NavLink>
       <NavLink to="/dashboard"> Assign Subtasks </NavLink>
    </div>
  );
};

export default NavBar;
