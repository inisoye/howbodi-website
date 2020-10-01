import React from 'react';

import FirstTitle from '../smallComponents/FirstTitle';
import AllTestCards from '../components/AllTestCards';
import SubscribeNudge from '../components/SubscribeNudge';

const Tests = () => {
  return (
    <main className='tests-page-container'>
      <div className='tests-page-top'>
        <FirstTitle
          className='tests-page-title text-center second-title'
          title='Health Assessment for you from anywhere'
        />
        <AllTestCards />
      </div>
      <SubscribeNudge />
    </main>
  );
};

export default Tests;
