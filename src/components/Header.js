import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CompleteDataContext } from '../Context';

import HeaderLink from '../smallComponents/HeaderLink';
import ShortButton from '../smallComponents/ShortButton';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const completeData = useContext(CompleteDataContext);
  // obtain getRelevantArray function from context
  const { getRelevantArray } = completeData;
  // extract the relevant array from context
  const brandMaterialsDataArray = getRelevantArray(
    completeData,
    'brandMaterials'
  );

  // destructure array
  const [brandMaterials] = brandMaterialsDataArray;

  let logoIconAndText;
  // try/catch block to prevent cannot read property of undefined error (before api is ready)
  try {
    logoIconAndText = brandMaterials.howbodiLogoIconAndText.fields.file.url;
  } catch (error) {}

  return (
    <header className='header'>
      <div className='header-logo'>
        <Link className='header-logo-link' to='/'>
          <img
            className='header-logo-image'
            src={logoIconAndText}
            alt='go home'
          />
        </Link>
      </div>

      <div>
        <button
          className='header-hamburger-button hidden-medium-up'
          onClick={handleToggle}
        >
          <svg
            className='header-hamburger-image'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </div>

      <nav className={isOpen ? 'header-nav' : 'header-nav hidden-medium-down'}>
        <ul className='header-links-list list-reset'>
          <HeaderLink onClick={handleToggle} url='/about' linkText='About' />
          <HeaderLink onClick={handleToggle} url='/tests' linkText='Tests' />
          <HeaderLink
            onClick={handleToggle}
            url='/contact-us'
            linkText='Contact'
          />
          <HeaderLink onClick={handleToggle} url='/login' linkText='Log in' />
          <li className='header-links-list-item'>
            <ShortButton
              onClick={handleToggle}
              url='/signup'
              buttonText='Get Started'
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
