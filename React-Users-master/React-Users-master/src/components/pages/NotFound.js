import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='not-found'>
      <h1 className='display-1'>Page Not Found</h1>
      <NavLink to='/'> Go Home </NavLink>
    </div>
  );
};

export default NotFound;
