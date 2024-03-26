import React from 'react';

const ConsentForm = () => {
  return (
    <div className='flex items-start'>
      <input
        id='terms-and-conditions'
        type='checkbox'
        className='w-[30px] h-[30px] text-white bg-primary border-none rounded-[5px] accent-primary focus:accent-primary'
        // className='h-4 w-4 text-black border-gray-300 rounded focus:ring-black'
      />
      <label htmlFor='terms-and-conditions' className='ml-2 block text-sm text-gray-900'>
        I agree to Typeform's{' '}
        <a
          target='_blank'
          href='https://www.typeform.com/terms-service/'
          className='underline'
          rel='noreferrer'>
          Terms of Service
        </a>
        ,
        <a
          target='_blank'
          href='https://www.typeform.com/privacy-policy/'
          className='underline'
          rel='noreferrer'>
          Privacy Policy
        </a>
        , and
        <a
          target='_blank'
          href='https://www.typeform.com/privacy-policy/'
          className='underline'
          rel='noreferrer'>
          Data Processing Agreement
        </a>
        .
      </label>
    </div>
  );
};

export default ConsentForm;
