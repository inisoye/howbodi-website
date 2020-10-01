import React from 'react';
import { Link } from 'react-router-dom';

const TestCard = ({ testData, className }) => {
  // destructure prop
  const { testIcon, testName, testShortDescription, slug } = testData;

  // console.log(className);

  return (
    <Link className='test-card-link' to={`/tests/${slug}`}>
      <article className={`${className} test-card-container`}>
        <img
          className='test-card-image'
          src={testIcon.fields.file.url}
          alt=''
        />
        <h3 className='test-card-heading'>{testName}</h3>
        <div className='test-card-bottom'>
          <p className='test-card-description'>{testShortDescription}</p>
          <svg
            className='test-card-arrow'
            xmlns='http://www.w3.org/2000/svg'
            width='45'
            height='46'
            fill='none'
            viewBox='0 0 45 46'
          >
            <path
              fill='#fff'
              stroke='#fff'
              strokeWidth='2'
              d='M1 23C1 11.126 10.626 1.5 22.5 1.5S44 11.126 44 23s-9.626 21.5-21.5 21.5S1 34.874 1 23z'
            ></path>
            <path
              stroke='#6C9CD2'
              strokeWidth='1.5'
              d='M24.75 10.5L37 23 24.75 35.5M9 23h28'
            ></path>
          </svg>
        </div>
      </article>
    </Link>
  );
};

export default TestCard;
