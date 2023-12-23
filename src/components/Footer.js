import { Typography } from '@material-tailwind/react';
import React from 'react';

const Footer = () => {
  return (
    <footer className='mx-auto container flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-100 py-6 text-center md:justify-between'>
      <Typography className='font-normal' color='blue-gray'>
        &copy; 2024 Yogarajah Achchuthan
      </Typography>

      <ul className='flex flex-wrap items-center gap-y-2 gap-x-8'>
        <li>
          <Typography
            as='a'
            className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'
            color='blue-gray'
            href='#'
          >
            About Us
          </Typography>
        </li>

        <li>
          <Typography
            as='a'
            className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'
            color='blue-gray'
            href='#'
          >
            License
          </Typography>
        </li>

        <li>
          <Typography
            as='a'
            className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'
            color='blue-gray'
            href='#'
          >
            Contribute
          </Typography>
        </li>

        <li>
          <Typography
            as='a'
            className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'
            color='blue-gray'
            href='#'
          >
            Contact Us
          </Typography>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
