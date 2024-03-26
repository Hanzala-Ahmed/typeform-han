import { useState } from 'react';
import eye_close_icon from '../../../assets/images/eye_close_icon.svg';
import eye_icon from '../../../assets/images/eye_icon.svg';
import PrimaryInput from '../../atoms/primary_input';

const PasswordInput = ({ placeholder, value, onChange }) => {
  const [type, setType] = useState('password');
  return (
    <div className='relative'>
      <PrimaryInput placeholder={placeholder} value={value} onChange={onChange} type={type} />
      {type == 'password' ? (
        <span
          onClick={() => setType(type === 'password' ? 'text' : 'password')}
          className='cursor-pointer'>
          <img
            src={eye_icon}
            alt=''
            className='absolute right-3 top-[50%] w-[16px] h-[16px] transform -translate-y-1/2 cursor-pointer'
          />
        </span>
      ) : (
        <span
          onClick={() => setType(type === 'password' ? 'text' : 'password')}
          className='cursor-pointer'>
          {' '}
          <img
            src={eye_close_icon}
            alt=''
            className='absolute right-3 top-[50%] w-[16px] h-[16px] transform -translate-y-1/2 cursor-pointer'
          />
        </span>
      )}
    </div>
  );
};

export default PasswordInput;
