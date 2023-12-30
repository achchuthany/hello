import { Typography } from '@material-tailwind/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Link = ({ path, label, ...props }) => (
  <Typography as='li' className='p-1 font-medium' variant='small'>
    <NavLink
      className={({ isActive }) =>
        isActive
          ? 'flex items-center hover:text-blue-300 transition-colors text-yellow-300'
          : 'flex items-center hover:text-blue-300 transition-colors'
      }
      to={path}
      {...props}
    >
      {label}
    </NavLink>
  </Typography>
);

export default Link;
