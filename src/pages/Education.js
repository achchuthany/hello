import React from 'react';
import {
  Card,
  CardBody,
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
    <Card className='my-2' variant='gradient' color='white'>
      <CardBody>
        <Typography variant='h4' color='blue-gray' className='mb-2'>
          Education
        </Typography>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
          <div>
            <Typography variant='h6' className='mb-2 text-blue-600 '>
              University Education
            </Typography>
            <Timeline className='mt-5 ml-5'>
              <TimelineItem>
                <TimelineConnector />
                <TimelineHeader className='h-3'>
                  <TimelineIcon />
                  <Typography variant='h6' color='blue-gray' className='leading-none'>
                    M.Sc.in Computer Science
                  </Typography>
                </TimelineHeader>
                <TimelineBody className='pb-8'>
                  <Typography variant='small' color='gary' className='font-normal text-gray-600'>
                    University of Peradeniya, Sri Lanka
                  </Typography>
                  <Typography variant='small' color='gary' className='font-normal text-gray-600'>
                    GPA: 3.35/4.0
                  </Typography>
                  <Typography variant='small' color='gary' className='font-normal text-gray-600'>
                    19/05/2017– 28/12/2018
                  </Typography>
                </TimelineBody>
              </TimelineItem>
              <TimelineItem>
                <TimelineHeader className='h-3'>
                  <TimelineIcon />
                  <Typography variant='h6' color='blue-gray' className='leading-none'>
                    B.Sc.[Hons] Special Degree in Computer Science
                  </Typography>
                </TimelineHeader>
                <TimelineBody className='pb-8'>
                  <Typography variant='small' color='gary' className='font-normal text-gray-600'>
                    University of Jaffna, Sri Lanka
                  </Typography>
                  <Typography variant='small' color='gary' className='font-normal text-gray-600'>
                    GPA: 3.17/4.0
                  </Typography>
                  <Typography variant='small' color='gary' className='font-normal text-gray-600'>
                    27/09/2010 – 25/04/2015
                  </Typography>
                </TimelineBody>
              </TimelineItem>
            </Timeline>
          </div>
          <div>
            <Typography variant='h6' className='mb-2 text-blue-600 '>
              Secondary Education
            </Typography>
            <Timeline className='mt-5 ml-5'>
              <TimelineItem>
                <TimelineConnector />
                <TimelineHeader className='h-3'>
                  <TimelineIcon />
                  <Typography variant='h6' color='blue-gray' className='leading-none'>
                    Completed G.C.E A/L
                  </Typography>
                </TimelineHeader>
                <TimelineBody className='pb-8'>
                  <Typography variant='small' color='gary' className='font-normal text-gray-600'>
                    Nelliady Central College, Nelliady, Sri Lanka
                  </Typography>
                  <Typography variant='small' color='gary' className='font-normal text-gray-600'>
                    Grade: B, 2C’s
                  </Typography>
                  <Typography variant='small' color='gary' className='font-normal text-gray-600'>
                    2007–2009
                  </Typography>
                </TimelineBody>
              </TimelineItem>
              <TimelineItem>
                <TimelineHeader className='h-3'>
                  <TimelineIcon />
                  <Typography variant='h6' color='blue-gray' className='leading-none'>
                    Completed G.C.E O/L
                  </Typography>
                </TimelineHeader>
                <TimelineBody className='pb-8'>
                  <Typography variant='small' color='gary' className='font-normal text-gray-600'>
                    Nelliady Central College, Nelliady, Sri Lanka
                  </Typography>
                  <Typography variant='small' color='gary' className='font-normal text-gray-600'>
                    Grade: 5A’s, B,4C’s
                  </Typography>
                  <Typography variant='small' color='gary' className='font-normal text-gray-600'>
                    2000–2006
                  </Typography>
                </TimelineBody>
              </TimelineItem>
            </Timeline>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default Education;
