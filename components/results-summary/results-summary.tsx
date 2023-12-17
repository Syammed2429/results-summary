import React from 'react';
import Image from 'next/image';
import ovalImage from '@/public/images/oval.svg';

export const ResultsSummary = () => {
  const summaryData = [
    {
      id: 1,
      name: 'Reaction',
      bgColor: '#fff6f5',
      volume: 80,
    },
  ];
  return (
    <div className='flex flex-col md:grid md:grid-cols-2 w-[46rem] h-[32rem] rounded-[2rem] bg-[#fff] shadow-[0px_30px_60px_0px_rgba(61,108,236,0.15)] '>
      <div className='md:col-span-1 w-[23rem] rounded-[2rem] your-results text-center  space-y-8'>
        <div className='text-[#CAC9FF] text-2xl pt-10'>Your Result</div>
        <div className='flex justify-center items-center'>
          <div className=' flex justify-center items-center flex-col bg-[#462BDC] w-[12.5rem] h-[12.5rem] rounded-full rounded-b-l-[45%]  shadow-inner-2xl '>
            <div className='text-white text-[4.5rem]'>76</div>
            <div className='text-[#CAC9FF]'>of 100</div>
          </div>
        </div>
        <div className='text-[#fFF] text-3xl'>Great</div>
        <div className='text-[#CAC9FF] text-lg'>
          Your performance exceed 65% of the people conducting the test here!
        </div>
      </div>

      <div className='md:col-span-1 w-[23rem] space-y-8'>
        <div className='pt-10 bg-[#fff6f5]'>Summary</div>
      </div>
    </div>
  );
};
