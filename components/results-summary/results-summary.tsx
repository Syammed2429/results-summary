import React from 'react';
import Image from 'next/image';
import ovalImage from '@/public/images/oval.svg';
import reactionIcon from '@/public/images/reactionIcon.svg';
import memoryIcon from '@/public/images/iconoir_brain.svg';
import chatIcon from '@/public/images/iconoir_chat-remove.svg';
import visualIcon from '@/public/images/iconoir_eye-empty.svg';

export const ResultsSummary = () => {
  const summaryData = [
    {
      id: 1,
      name: 'Reaction',
      bgColor: 'bg-[#fff6f5]',
      value: 80,
      icon: reactionIcon,
    },
    {
      id: 2,
      name: 'Memory',
      bgColor: 'bg-[#fdfbf2]',
      value: 92,
      icon: memoryIcon,
    },
    {
      id: 3,
      name: 'Verbal',
      bgColor: 'bg-[#f2fbfa]',
      value: 61,
      icon: chatIcon,
    },

    {
      id: 4,
      name: 'Visual',
      bgColor: 'bg-[#f3f2fe]',
      value: 73,
      icon: visualIcon,
    },
  ];
  return (
    <div className='flex flex-row  w-[46rem] h-[32rem] rounded-[2rem] bg-[#fff] shadow-[0px_30px_60px_0px_rgba(61,108,236,0.15)] '>
      <div className=' w-[23rem] rounded-[2rem] your-results text-center  space-y-8'>
        <div className='text-[#CAC9FF] text-2xl pt-10'>Your Result</div>
        <div className='flex justify-center items-center'>
          <div className=' flex justify-center items-center flex-col bg-[#462BDC] w-[12.5rem] h-[12.5rem] rounded-full shadow-inner shadow-inset inset-shadow '>
            <div className='text-white text-[4.5rem]'>76</div>
            <div className='text-[#CAC9FF]'>of 100</div>
          </div>
        </div>
        <div className='text-[#fFF] text-3xl'>Great</div>
        <div className='text-[#CAC9FF] text-lg'>
          Your performance exceed 65% of the people conducting the test here!
        </div>
      </div>

      <div className=' w-[23rem] space-y-4 flex flex-col justify-center '>
        <div className='pt-5 text-[#303B59] text-2xl font-bold ml-8'>
          Summary
        </div>
        <div className='flex flex-col  items-center'>
          {summaryData?.map((data) => (
            <div
              key={data?.id}
              className={`${data?.bgColor} flex items-center gap-3 rounded-xl text-lg my-5 w-[18rem] py-4 px-5`}
            >
              <Image src={data?.icon} alt={data?.name} />
              <div className='flex-1  font-medium'>{data?.name}</div>
              <div className='text-[#303B59] font-bold '>
                {data?.value} <span className='opacity-50'>/ 100</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
