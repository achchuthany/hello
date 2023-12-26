import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import NotFount from './../assets/img/404.jpg';
import { NavLink } from 'react-router-dom';

const NotMatch = () => {
  return (
    <Card className='mt-6 w-96 mx-auto shadow-none'>
      <CardHeader color='blue-gray' className='relative h-100'>
        <img src={NotFount} alt='card-image' />
      </CardHeader>
      <CardBody>
        <Typography className='text-center'>We could not find the page</Typography>
      </CardBody>
      <CardFooter className='pt-0 text-center'>
        <NavLink to={'/'}>
          <Button>Back to Home</Button>
        </NavLink>
      </CardFooter>
    </Card>
  );
};
export default NotMatch;
