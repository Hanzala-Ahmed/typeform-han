const SecondaryButton = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className='w-auto flex md:gap-[8px] min-w-[256px] relative justify-center text-[14px] px-[20px] py-[10px] font-semibold border bg-primary leading-[1.5] rounded-lg gap-4  cursor-pointer text-white'>
      {children}
    </div>
  );
};

export default SecondaryButton;
