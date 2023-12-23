import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home';
import Education from '../pages/Education';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='education' element={<Education />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
