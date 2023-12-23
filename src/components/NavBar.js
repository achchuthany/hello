import { Collapse, IconButton, Navbar, Typography } from '@material-tailwind/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NavList = () => {
  return (
    <ul className='my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      <Typography as='li' className='p-1 font-medium' color='blue-gray' variant='small'>
        <Link className='flex items-center hover:text-blue-800 transition-colors' to='/'>
          Home
        </Link>
      </Typography>

      <Typography as='li' className='p-1 font-medium' color='blue-gray' variant='small'>
        <Link className='flex items-center hover:text-blue-800 transition-colors' to='/education'>
          Education
        </Link>
      </Typography>

      <Typography as='li' className='p-1 font-medium' color='blue-gray' variant='small'>
        <a className='flex items-center hover:text-blue-800 transition-colors' href='#'>
          Teachings
        </a>
      </Typography>

      <Typography as='li' className='p-1 font-medium' color='blue-gray' variant='small'>
        <a className='flex items-center hover:text-blue-800 transition-colors' href='#'>
          Activities
        </a>
      </Typography>

      <Typography as='li' className='p-1 font-medium' color='blue-gray' variant='small'>
        <a className='flex items-center hover:text-blue-800 transition-colors' href='#'>
          Roles
        </a>
      </Typography>

      <Typography as='li' className='p-1 font-medium' color='blue-gray' variant='small'>
        <a className='flex items-center hover:text-blue-800 transition-colors' href='#'>
          Projects
        </a>
      </Typography>
    </ul>
  );
};

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return (
    <Navbar className='mx-auto px-6 py-3 mt-3 bg-gray-100 border-gray-1000' varient='gradient'>
      <div className='flex items-center justify-between text-blue-gray-900'>
        <Typography as='a' className='mr-4 cursor-pointer py-1.5' href='#' variant='h6'>
          Yogarajah Achchuthan
        </Typography>

        <div className='hidden lg:block'>
          <NavList />
        </div>

        <IconButton
          className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
          onClick={() => setOpenNav(!openNav)}
          ripple={false}
          variant='text'
        >
          {openNav ? (
            <XMarkIcon className='h-6 w-6' strokeWidth={2} />
          ) : (
            <Bars3Icon className='h-6 w-6' strokeWidth={2} />
          )}
        </IconButton>
      </div>

      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
