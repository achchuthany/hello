import React from 'react';
import { Button, Card, CardFooter, CardHeader } from '@material-tailwind/react';
import NotFount from './../assets/img/404.jpg';
import { NavLink } from 'react-router-dom';

const NotMatch = () => {
  return (
    <Card className='w-96 mx-auto shadow-none'>
      <CardHeader color='blue-gray' className='mt-5 h-100 shadow-none'>
        <img src={NotFount} alt='card-image' />
      </CardHeader>
      <CardFooter className='pt-0 text-center'>
        <NavLink to={'/'}>
          <Button>Back to Home</Button>
        </NavLink>
      </CardFooter>
    </Card>
  );
};
export default NotMatch;
