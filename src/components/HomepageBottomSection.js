import React, { useContext } from 'react';
import { CompleteDataContext } from '../Context';

import SecondTitle from '../smallComponents/SecondTitle';

const HomepageBottomSection = () => {
  const completeData = useContext(CompleteDataContext);
  // obtain getRelevantArray function from context
  const { getRelevantArray } = completeData;
  // extract the relevant array from context
  const homepageBottomDataArray = getRelevantArray(
    completeData,
    'homepageBottomInformation'
  );

  // destructure array
  const [homepageBottomData] = homepageBottomDataArray;

  // try/catch block to prevent cannot read property of undefined error (before api is ready)
  let homepageBottomDescription;
  let homepageBottomTitle;
  let homepageBottomImageUrl;

  try {
    homepageBottomDescription = homepageBottomData.homepageBottomDescription;
    homepageBottomTitle = homepageBottomData.homepageBottomTitle;
    homepageBottomImageUrl =
      homepageBottomData.homepageBottomImage.fields.file.url;
  } catch (error) {}

  return (
    <section className='homepage-bottom-section'>
      <div className='homepage-bottom-left'>
        <SecondTitle
          className='homepage-bottom-title text-left second-title'
          title={homepageBottomTitle}
        />
        <p className='homepage-bottom-description'>
          {homepageBottomDescription}
        </p>
      </div>
      <div className='homepage-bottom-right'>
        <img
          className='homepage-bottom-image'
          src={homepageBottomImageUrl}
          alt=''
        />
      </div>
    </section>
  );
};

export default HomepageBottomSection;
