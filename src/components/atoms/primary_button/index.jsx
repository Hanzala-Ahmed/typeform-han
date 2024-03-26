const PrimaryButton = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className='w-auto flex md:gap-[8px] text-[12px] px-[10px] py-[3px] font-semibold border leading-[1.5] rounded-md gap-4 bg-transparent cursor-pointer border-primary text-primary'>
      {children}
    </div>
  );
};

export default PrimaryButton;
