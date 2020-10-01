import React, { useContext } from 'react';
import { CompleteDataContext } from '../Context';

import TestCard from './TestCard';

const FeaturedTestCards = () => {
  const completeData = useContext(CompleteDataContext);
  // obtain getRelevantArray function from context
  const { getRelevantArray, cardColourClassesArray } = completeData;
  // extract the relevant array from context
  const testsDataArray = getRelevantArray(completeData, 'tests');

  let testsComponents;

  // try/catch block to prevent cannot read property of undefined error (before api is ready)
  try {
    testsComponents = testsDataArray.map((eachItem, index) => {
      return (
        <li
          className='featured-tests-list-item tests-list-item'
          key={eachItem.id}
        >
          <TestCard
            className={`${cardColourClassesArray[index]}`}
            testData={eachItem}
          />
        </li>
      );
    });

    // ensure components are to be featured on homepage
    testsComponents = testsComponents.filter(
      (eachItem) => eachItem.props.children.props.testData.homepageFeatured
    );
    // make sure array has six items and does not break design
    testsComponents = testsComponents.slice(0, 6);
  } catch (error) {}

  return (
    <ul className='featured-tests-list tests-list list-reset'>
      {testsComponents}
    </ul>
  );
};

export default FeaturedTestCards;
