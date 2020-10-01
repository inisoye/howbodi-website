import React from 'react';

const HiddenInputLabel = ({htmlFor, labelText}) => {
  return (
    <label className='screen-reader-text' htmlFor={htmlFor}>
      {labelText}
    </label>
  );
};

export default HiddenInputLabel;
