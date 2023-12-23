import React, { useEffect, useState } from 'react';
import { Navbar, Collapse, Typography, IconButton } from '@material-tailwind/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const NavList = () => {
  return (
    <ul className='my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      <Typography as='li' variant='small' color='blue-gray' className='p-1 font-medium'>
        <a href='#' className='flex items-center hover:text-blue-500 transition-colors'>
          Home
        </a>
      </Typography>
      <Typography as='li' variant='small' color='blue-gray' className='p-1 font-medium'>
        <a href='#' className='flex items-center hover:text-blue-500 transition-colors'>
          Education
        </a>
      </Typography>
      <Typography as='li' variant='small' color='blue-gray' className='p-1 font-medium'>
        <a href='#' className='flex items-center hover:text-blue-500 transition-colors'>
          Teachings
        </a>
      </Typography>
      <Typography as='li' variant='small' color='blue-gray' className='p-1 font-medium'>
        <a href='#' className='flex items-center hover:text-blue-500 transition-colors'>
          Activities
        </a>
      </Typography>
      <Typography as='li' variant='small' color='blue-gray' className='p-1 font-medium'>
        <a href='#' className='flex items-center hover:text-blue-500 transition-colors'>
          Roles
        </a>
      </Typography>
      <Typography as='li' variant='small' color='blue-gray' className='p-1 font-medium'>
        <a href='#' className='flex items-center hover:text-blue-500 transition-colors'>
          Projects
        </a>
      </Typography>
    </ul>
  );
};

const App = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className='bg-gray-100'>
      <div className='flex flex-col h-screen justify-between mx-auto '>
        <Navbar varient='gradient' className='mx-auto px-6 py-3 mt-3'>
          <div className='flex items-center justify-between text-blue-gray-900'>
            <Typography as='a' href='#' variant='h6' className='mr-4 cursor-pointer py-1.5'>
              Yogarajah Achchuthan
            </Typography>
            <div className='hidden lg:block'>
              <NavList />
            </div>
            <IconButton
              variant='text'
              className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
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
        <main className='h-full'>
          <section className='h-full'>
            <div className='h-full container mx-auto px-6 py-3 mt-3'>
              <div className='h-full grid lg:grid-cols-12 grid-cols-1 items-center'>
                <div className='lg:col-span-6'>
                  <div className='text-center lg:text-start mb-5 lg:mb-0 mt-20'>
                    <h6 className='text-black uppercase text-[14px] md:text-[16px] tracking-[2px] font-[600] mb-[20px] md:mb-[30px]'>
                      Hi, My name is Achchuthan
                    </h6>
                    <h1 className='text-black font-[600] text-[40px] lg:text-[60px] xl:text-[70px] leading-[1] mb-[25px] md:mb-[35px]'>
                      I&apos;m <span id='type-it'>Developer</span>
                    </h1>
                    <p className='text-[16px] md:text-[20px] mb-[8px] md:mb-[16px]'>
                      Based in Jaffna, Sri Lanka.
                    </p>
                  </div>
                </div>
                <div className='lg:col-span-6'>
                  <div className='text-center'>
                    <img
                      className='mx-auto rounded-full'
                      src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEilxFPAkUztaYLvmg-JMWefsiIwa1c9JbU21Da0jENsVOAp6xefUU6AhEsIwAACePYIyMCgvHsiKV8hTjAVx05dW1MiIg2LUqWI9V4p7c6-0-IDWbJblSTx9MMlMngC6LeN-fWnfLEHIqAxu3fN_D5QVoa0noEqNTkoyw5xqxANxqrjUQAOnU8HwSyyIg/s1600/achchuthan.png'
                      alt='logo'
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className=' mx-auto container bg-slate-900 flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between mb-4'>
          <Typography color='blue-gray' className='font-normal'>
            &copy; 2023 Material Tailwind
          </Typography>
          <ul className='flex flex-wrap items-center gap-y-2 gap-x-8'>
            <li>
              <Typography
                as='a'
                href='#'
                color='blue-gray'
                className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'
              >
                About Us
              </Typography>
            </li>
            <li>
              <Typography
                as='a'
                href='#'
                color='blue-gray'
                className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'
              >
                License
              </Typography>
            </li>
            <li>
              <Typography
                as='a'
                href='#'
                color='blue-gray'
                className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'
              >
                Contribute
              </Typography>
            </li>
            <li>
              <Typography
                as='a'
                href='#'
                color='blue-gray'
                className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'
              >
                Contact Us
              </Typography>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default App;
