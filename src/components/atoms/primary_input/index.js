const PrimaryInput = ({ placeholder, value, onChange, type = 'text' }) => {
  return (
    <input
      className='border h-[40px] w-full outline-none focus:ring-2 ring-blue-500 rounded-[3px] p-[6px_8px] leading-[16px]'
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default PrimaryInput;
