import React, { useContext } from 'react';
import { CompleteDataContext } from '../Context';
import { Link } from 'react-router-dom';

import FirstTitle from '../smallComponents/FirstTitle';

const Hero = () => {
  const completeData = useContext(CompleteDataContext);
  // obtain getRelevantArray function from context
  const { getRelevantArray } = completeData;
  // extract the relevant array from context
  const homepageHeroDataArray = getRelevantArray(
    completeData,
    'homepageHeroInformation'
  );

  // destructure array
  const [homepageHeroData] = homepageHeroDataArray;

  let heroMainHeading;
  let heroShortParagraph;
  let heroButtonText;
  let heroImage;

  // try/catch block to prevent cannot read property of undefined error (before api is ready)
  try {
    heroMainHeading = homepageHeroData.heroMainTitle;
    heroShortParagraph = homepageHeroData.heroShortParagraph;
    heroButtonText = homepageHeroData.homepageHeroButtonText;
    heroImage = homepageHeroData.heroMainImage.fields.file.url;
  } catch (error) {}

  return (
    <section className='hero'>
      <div className='hero-left'>
        <FirstTitle className='hero-title' title={heroMainHeading}></FirstTitle>
        <p className='hero-short-paragraph'>{heroShortParagraph}</p>
        <Link className='hero-button' to='/signup'>
          {heroButtonText}
        </Link>
      </div>
      <div className='hero-right'>
        <img className='hero-image' src={heroImage} alt='' />
      </div>
    </section>
  );
};

export default Hero;
