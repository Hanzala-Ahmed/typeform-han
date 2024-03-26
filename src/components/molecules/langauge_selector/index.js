import { useState } from 'react';
import { LANGUAGES } from '../../../utils/constants';
import globe from '../../../assets/icons/globe.svg';
import dropdown from '../../../assets/icons/dropdown.svg';

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[0]);

  return (
    <div className='relative'>
      <button
        id='dropdownDefaultButton'
        data-dropdown-toggle='dropdown'
        className='text-gray-700 font-medium rounded inline-flex items-center gap-2'
        type='button'
        onClick={() => setIsOpen(!isOpen)}>
        <img src={globe} alt='Globe' />
        {selectedLanguage}
        <img src={dropdown} alt='Globe' />
      </button>

      {/* Dropdown menu, show/hide based on dropdown state. */}
      <div
        className={`origin-top-right absolute -top-[170px] h-fit sm:top-8 z-30 left-0 mt-2 w-fit rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-100 ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        style={{ display: isOpen ? 'block' : 'none' }}
        role='menu'
        aria-orientation='vertical'
        aria-labelledby='dropdownDefaultButton'>
        <div className='py-2' role='none'>
          {LANGUAGES.map((language, idx) => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
              href='#'
              key={idx}
              className='text-gray-700 block px-[23px] py-[12px] cursor-pointer text-sm hover:bg-gray-100'
              role='menuitem'
              tabIndex='-1'
              onClick={() => {
                setSelectedLanguage(language);
                setIsOpen(false);
              }}>
              {language}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
