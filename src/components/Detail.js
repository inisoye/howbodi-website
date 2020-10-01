import React from 'react';

import FirstTitle from '../smallComponents/FirstTitle';

// a reusable heading and paragraph component for terms+conditions and other simple policy pages
const Detail = ({ heading, bodyText }) => {
  return (
    <article className='detail-wrapper'>
      <FirstTitle className='second-title detail-heading' title={heading} />
      <p className='detail-body'>{bodyText}</p>
    </article>
  );
};

export default Detail;
