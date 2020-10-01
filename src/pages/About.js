import React, { useContext } from 'react';
import { CompleteDataContext } from '../Context';

import SubscribeNudge from '../components/SubscribeNudge';

import FirstTitle from '../smallComponents/FirstTitle';

const About = () => {
  const completeData = useContext(CompleteDataContext);
  // obtain getRelevantArray function from context
  const { getRelevantArray } = completeData;
  // extract the relevant array from context
  const aboutPageDataArray = getRelevantArray(
    completeData,
    'aboutPageInformation'
  );

  // destructure array
  const [aboutPageData] = aboutPageDataArray;

  let aboutPageDescription;
  let aboutPageHeading;

  try {
    aboutPageDescription = aboutPageData.aboutPageDescription;
    aboutPageHeading = aboutPageData.aboutPageHeading;
  } catch (error) {}

  return (
    <main className='about'>
      <article className='about-wrapper'>
        <FirstTitle className='about-title' title={aboutPageHeading} />
        <p className='about-content'>{aboutPageDescription}</p>
      </article>

      <SubscribeNudge />
    </main>
  );
};

export default About;
