import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <div className='flex flex-col h-screen justify-between mx-auto '>
        <NavBar />
        <main className='h-full mb-auto'>
          <div className='h-full container mx-auto py-1 my-1'>
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
