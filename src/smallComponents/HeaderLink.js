import React from 'react';
import { Link } from 'react-router-dom';

const HeaderLink = ({ linkText, url, onClick }) => {
  return (
    <li className='header-links-list-item'>
      <Link onClick={onClick} className='header-link' to={url}>
        {linkText}
      </Link>
    </li>
  );
};

export default HeaderLink;
