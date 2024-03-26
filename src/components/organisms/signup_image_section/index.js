import signup_img from '../../../assets/images/signup_image.webp';

const SignupImageSection = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <p className='text-[36px] text-white mb-[35px] w-[366px] leading-[44px] text-center'>
        Sign up <br /> and come on in
      </p>
      <div className=''>
        <img src={signup_img} alt='' className='max-w-[366px]' />
      </div>
      <p className='text-[14px] leading-[20px] absolute bottom-[24px] text-white'>© Typeform</p>
    </div>
  );
};

export default SignupImageSection;
