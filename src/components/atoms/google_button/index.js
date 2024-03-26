import google_icon from '../../../assets/images/google_icon.png';

const GoogleButton = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className='w-auto flex md:gap-[8px] min-w-[256px] relative justify-center text-[14px] px-[20px] py-[10px] font-semibold border leading-[1.5] rounded-lg gap-4 bg-transparent cursor-pointer border-primary text-primary'>
      <img src={google_icon} alt='' className='object-contain absolute left-3 top-auto' />
      <span>Sign up with Google</span>
    </div>
  );
};

export default GoogleButton;
