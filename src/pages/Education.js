import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Timeline,
  TimelineBody,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  Typography,
} from '@material-tailwind/react';

const Education = () => {
  return (
    <Card className='mt-6'>
      <CardHeader color='blue' className='text-2xl p-2'>
        Education
      </CardHeader>
      <CardBody>
        <Typography variant='h5' color='blue' className='mb-2'>
          University Education
        </Typography>
        <Timeline className='mt-5'>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className='h-3'>
              <TimelineIcon />
              <Typography variant='h6' color='blue-gray' className='leading-none'>
                M.Sc.in Computer Science
              </Typography>
            </TimelineHeader>
            <TimelineBody className='pb-8 bg-orange-500'>
              <div className='flex flex-row w-full bg-deep-orange-50'>
                <div className='basis-1/4'>01</div>
                <div className='basis-1/4'>02</div>
                <div className='basis-1/2'>03</div>
              </div>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className='h-3'>
              <TimelineIcon />
              <Typography variant='h6' color='blue-gray' className='leading-none'>
                Timeline Title Here.
              </Typography>
            </TimelineHeader>
            <TimelineBody className='pb-8'>
              <Typography variant='small' color='gary' className='font-normal text-gray-600'>
                The key to more success is to have a lot of pillows. Put it this way, it took me
                twenty five years to get these plants, twenty five years of blood sweat and tears,
                and I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to
                something. Fan luv.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeader className='h-3'>
              <TimelineIcon />
              <Typography variant='h6' color='blue-gray' className='leading-none'>
                Timeline Title Here.
              </Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography variant='small' color='gary' className='font-normal text-gray-600'>
                The key to more success is to have a lot of pillows. Put it this way, it took me
                twenty five years to get these plants, twenty five years of blood sweat and tears,
                and I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to
                something. Fan luv.
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </CardBody>
    </Card>
  );
};

export default Education;
