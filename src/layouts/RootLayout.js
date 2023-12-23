import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <div className='flex flex-col h-screen justify-between mx-auto '>
        <NavBar />
        <main className='h-full'>
          <div className='h-full container mx-auto px-6 py-3 mt-3'>
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
