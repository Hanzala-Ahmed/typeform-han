import SignupFormSection from '../../components/organisms/signup_form_section';
import SignupImageSection from '../../components/organisms/signup_image_section';

const Signup = () => {
  return (
    <div className='flex min-h-screen'>
      <div className='bg-primary w-full lg:block hidden flex-1 max-h-screen overflow-hidden'>
        <SignupImageSection />
      </div>
      <div className='lg:-ml-4 p-0 grid flex-1.1 overflow-auto lg:max-h-screen rounded-tl-[16px] rounded-bl-[16px]'>
        <SignupFormSection />
      </div>
    </div>
  );
};

export default Signup;
