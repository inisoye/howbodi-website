import React from 'react';
import { Link } from 'react-router-dom';

const ShortButton = ({ buttonText, url, onClick }) => {
  return (
    <Link onClick={onClick} className='short-button header-link' to={url}>
      {buttonText}
    </Link>
  );
};

export default ShortButton;
