import { Typography } from '@material-tailwind/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Link = ({ path, label, ...props }) => (
  <Typography as='li' className='p-1 font-medium' color='blue-gray' variant='small'>
    <NavLink
      className={({ isActive }) =>
        isActive
          ? 'flex items-center hover:text-blue-800 transition-colors text-blue-500'
          : 'flex items-center hover:text-blue-800 transition-colors'
      }
      to={path}
      {...props}
    >
      {label}
    </NavLink>
  </Typography>
);

export default Link;
