import React from 'react';
import { Link } from 'react-router-dom';

const ShortButton = ({ buttonText, url }) => {
  return (
    <Link className='short-button header-link' to={url}>
      {buttonText}
    </Link>
  );
};

export default ShortButton;
