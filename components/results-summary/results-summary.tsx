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
      text: 'text-[#d47f7e]',
    },
    {
      id: 2,
      name: 'Memory',
      bgColor: 'bg-[#fdfbf2]',
      value: 92,
      icon: memoryIcon,
      text: 'text-[#f4b93d]',
    },
    {
      id: 3,
      name: 'Verbal',
      bgColor: 'bg-[#f2fbfa]',
      value: 61,
      icon: chatIcon,
      text: 'text-[#21a685]',
    },

    {
      id: 4,
      name: 'Visual',
      bgColor: 'bg-[#f3f2fe]',
      value: 73,
      icon: visualIcon,
      text: 'text-[#4851b6]',
    },
  ];
  return (
    <div className='flex flex-col justify-center items-center  md:flex-row md:justify-normal md:items-stretch max-sm:min-h-screen   w-[100vw] md:w-[46rem] md:h-[35rem] rounded-[2rem] bg-[#fff] shadow-[0px_30px_60px_0px_rgba(61,108,236,0.15)] '>
      <div className=' w-[23rem] h-[22rem] md:h-full rounded-br-[2rem] rounded-bl-[2rem]  md:rounded-[2rem] your-results flex flex-col justify-center items-center space-y-2 md:space-y-8'>
        <div className='text-[#CAC9FF] text-lg  md:text-2xl md:pt-8'>
          Your Result
        </div>
        <div className='flex justify-center items-center'>
          <div className=' flex justify-center items-center flex-col bg-[#462BDC] h-[8.75rem] w-[8.75rem] md:w-[12.5rem] md:h-[12.5rem] rounded-full shadow-inner shadow-inset inset-shadow '>
            <div className='text-white text-[3.5rem] md:text-[4.5rem] font-extrabold'>
              76
            </div>
            <div className='text-[#CAC9FF]'>of 100</div>
          </div>
        </div>
        <div className='text-[#fFF] text-2xl md:text-3xl'>Great</div>
        <div className='text-[#CAC9FF] text-sm md:text-lg w-[16.25rem] text-center  md:mb-0'>
          Your performance exceed 65% of the people conducting the test here!
        </div>
      </div>

      <div className=' md:w-[23rem] space-y-4 md:space-y-8 flex flex-col justify-center '>
        <div className='pt-10 md:pt-0 md:ml-10 text-[#303B59] text-lg md:text-2xl font-bold '>
          Summary
        </div>
        <div className='flex flex-col justify-center items-center'>
          {summaryData?.map((data) => (
            <div
              key={data?.id}
              className={`${data?.bgColor} flex items-center gap-3 rounded-xl text-base md:text-lg my-2 w-[18rem] py-4 px-5`}
            >
              <Image src={data?.icon} alt={data?.name} />
              <div className={`flex-1  font-medium ${data?.text}`}>
                {data?.name}
              </div>
              <div className='text-[#303B59] font-bold '>
                {data?.value} <span className='opacity-50'>/ 100</span>
              </div>
            </div>
          ))}
          <div className='bg-[#303B59] w-[18rem] mt-8 mb-10 md:mb-0 py-4 rounded-[8rem] text-center text-white text-lg font-bold'>
            Continue
          </div>
        </div>
      </div>
    </div>
  );
};
