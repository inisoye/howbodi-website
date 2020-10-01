import React from 'react';
import { Link } from 'react-router-dom';

const HeaderLink = ({ linkText, url }) => {
  return (
    <li className='header-links-list-item'>
      <Link className='header-link' to={url}>
        {linkText}
      </Link>
    </li>
  );
};

export default HeaderLink;
