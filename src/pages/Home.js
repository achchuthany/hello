import React from 'react';
import { useTypingText } from '../utils/useTypingText';

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
          <div className='text-center lg:text-start mb-5 lg:mb-0 mt-20'>
            <h6 className='text-black uppercase text-[14px] md:text-[16px] tracking-[2px] font-[100] mb-[20px] md:mb-[30px]'>
              Hi, My name is Yogarajah Achchuthan
            </h6>

            <h1 className='text-amber-500 font-[600] text-[30px] lg:text-[50px] xl:text-[60px] leading-[1] mb-[25px] md:mb-[35px]'>
              I&apos;m <span className='text-blue-700'>{word}</span>
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
              className='mx-auto rounded-full shadow-xl'
              src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEilxFPAkUztaYLvmg-JMWefsiIwa1c9JbU21Da0jENsVOAp6xefUU6AhEsIwAACePYIyMCgvHsiKV8hTjAVx05dW1MiIg2LUqWI9V4p7c6-0-IDWbJblSTx9MMlMngC6LeN-fWnfLEHIqAxu3fN_D5QVoa0noEqNTkoyw5xqxANxqrjUQAOnU8HwSyyIg/s1600/achchuthan.png'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
