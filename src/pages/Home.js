import React from 'react';
import { useTypingText } from '../utils/useTypingText';
import ProfileImage from './../assets/img/achchuthan.jpg';

const Home = () => {
  const { word } = useTypingText(
    ['Instructor', 'Full Stack Developer', 'DevOps Engineer'],
    130,
    20,
  );

  return (
    <div className='h-full container mx-auto px-6 py-3 mt-3'>
      <div className='h-full grid lg:grid-cols-12 grid-cols-1 items-center'>
        <div className='lg:col-span-8'>
          <div className='text-center lg:text-start'>
            <h6 className='text-blue-gray-900 uppercase text-[14px] md:text-[16px] tracking-[2px] font-[300] mb-[20px] md:mb-[30px]'>
              Hi, My name is Yogarajah Achchuthan
            </h6>

            <h1 className='text-gray-900 font-[600] text-[30px] lg:text-[50px] xl:text-[60px] leading-[1] mb-[25px] md:mb-[35px]'>
              I&apos;m <span className='text-amber-400'>{word}</span>
            </h1>

            <p className='text-[16px] md:text-[20px] mb-[8px] md:mb-[16px]'>
              Based in Jaffna, Sri Lanka.
            </p>
          </div>
        </div>

        <div className='lg:col-span-4'>
          <div className='text-center'>
            <img
              alt='logo'
              className='mx-auto rounded-full shadow-xl max-w-[60%]'
              src={ProfileImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
