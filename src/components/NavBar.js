import { Collapse, IconButton, Navbar, Typography } from '@material-tailwind/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';
import Link from './Link';

const NavList = () => {
  return (
    <ul className='my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      <Link label={'Home'} path={'/'} />
      <Link label={'Education'} path={'/education'} />
      <Link label={'Teachings'} path={'/teachings'} />
      <Link label={'Activities'} path={'/activities'} />
      <Link label={'Roles'} path={'/roles'} />
      <Link label={'Projects'} path={'/projects'} />
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
    <Navbar className='mx-auto px-6 py-3 mt-3 bg-gray-200' varient='gradient'>
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
