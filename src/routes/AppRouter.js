import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home';
import Education from '../pages/Education';
import NotMatch from '../pages/NotMatch';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='education' element={<Education />} />
        <Route path='*' element={<NotMatch />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
