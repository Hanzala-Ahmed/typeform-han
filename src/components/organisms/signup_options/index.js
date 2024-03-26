import React, { useState } from 'react';

const SignupOptions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div>
      <div
        className='flex justify-between items-center px-4 py-2 cursor-pointer select-none'
        onClick={toggleOpen}>
        <p className='text-[14px]'>See options</p>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className={`h-[12px] w-[12px] transform transition duration-400 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          style={{
            transition: 'transform 0.3s',
            transform: `rotateX(${isOpen ? '180deg' : '0deg'})`,
          }}>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='4' d='M5 15l7-7 7 7' />
        </svg>
      </div>
      <div
        className={`transition-max-height duration-500 leading-[20px] ease-in-out text-[14px] overflow-hidden px-4 flex flex-col gap-3 ${
          isOpen ? 'max-h-[400px] h-fit' : 'max-h-0'
        }`}>
        <Option className=''>Get useful tips, inspiration, and offers via e-communication.</Option>
        <Option className=''>
          Tailor Typeform to my needs based on my activity.
          <a
            href='https://www.typeform.com/privacy-policy/'
            target='_blank'
            className='hover:underline text-grey'
            rel='noreferrer'>
            See Privacy Policy
          </a>
        </Option>
        <Option className=''>
          Enrich my data with select third parties for more relevant content.
          <a
            target='_blank'
            href='https://www.typeform.com/privacy-policy/'
            className='hover:underline text-grey'
            rel='noreferrer'>
            See Privacy Policy
          </a>
        </Option>
        <p className='text-grey'>You can update your preferences in your Profile at any time</p>
      </div>
    </div>
  );
};

const Option = ({ children }) => {
  return (
    <div className='flex flex-col gap-2'>
      <p className='leading-[20px] text-[14px]'>{children}</p>

      <div className='flex gap-4'>
        <input
          type='radio'
          id='yes'
          name='option'
          value='yes'
          className='accent-primary w-[20px] h-[20px]'
        />
        <label htmlFor='yes'>Yes</label>

        <input
          type='radio'
          id='no'
          name='option'
          value='no'
          className='accent-primary w-[20px] h-[20px]'
        />
        <label htmlFor='no'>No</label>
      </div>
    </div>
  );
};

export default SignupOptions;
