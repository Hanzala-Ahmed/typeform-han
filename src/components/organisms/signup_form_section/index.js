import PrimaryButton from '../../atoms/primary_button';
import typeform_icon from '../../../assets/images/typeform_icon.svg';
import typeform_logo from '../../../assets/images/typeform_logo.svg';
import GoogleButton from '../../atoms/google_button';
import MicrosoftButton from '../../atoms/microsoft_button';
import SecondaryButton from '../../atoms/secondary_button';
import LanguageSelector from '../../molecules/langauge_selector';
import { useState } from 'react';
import PrimaryInput from '../../atoms/primary_input';
import PasswordInput from '../../molecules/password_input';
import ConsentForm from '../../molecules/consent_form';
import SignupOptions from '../signup_options';

const SignupFormSection = () => {
  const [isEmailSection, setIsEmailSection] = useState(false);
  return (
    <div className='w-full grid grid-cols-[[first]_0px_[second]_auto] grid-rows-[[first]_52px_[second]_auto_[third]_52px] relative bg-white'>
      <>
        <div className='w-fit relative flex justify-end items-center row-[first] p-[16px_0px_0px_24px] area-third-first'>
          <LanguageSelector />
        </div>
        <div className='flex justify-end items-center col-[second] p-[8px_24px] gap-[8px]'>
          <p className=''>Already have an account?</p>
          <PrimaryButton>Log in</PrimaryButton>
        </div>{' '}
        <div className='max-w-xs md:max-w-xl flex justify-self-center items-center justify-center flex-col area-second gap-[24px]'>
          <div className='flex gap-[10px] overflow-hidden'>
            <img src={typeform_icon} alt='' />
            <img src={typeform_logo} alt='' />
          </div>
          <p className='leading-[36px] text-[24px] text-center font-thin'>
            Get better data with conversational forms, surveys, quizzes & more.
          </p>
          {!isEmailSection ? (
            <>
              <div className='flex flex-col gap-[15px] w-auto max-w-[256px]'>
                <GoogleButton />
                <MicrosoftButton />
              </div>
              <p className='uppercase'>or</p>
              <SecondaryButton onClick={() => setIsEmailSection(true)}>
                Sign up with email
              </SecondaryButton>
            </>
          ) : (
            <>
              <div className='flex flex-col gap-[15px] w-full max-w-[256px]'>
                <PrimaryInput placeholder={'Email'} />
                <PasswordInput placeholder={'Password'} />
                <ConsentForm />
                <SignupOptions />
                <SecondaryButton onClick={() => setIsEmailSection(true)}>
                  Create my free account
                </SecondaryButton>
              </div>
            </>
          )}
        </div>
      </>
    </div>
  );
};

export default SignupFormSection;
