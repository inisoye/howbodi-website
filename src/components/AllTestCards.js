import React, { useContext } from 'react';
import { CompleteDataContext } from '../Context';

import TestCard from './TestCard';

const AllTestCards = () => {
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
        <li className='tests-list-item' key={eachItem.id}>
          <TestCard
            className={`${cardColourClassesArray[index]}`}
            testData={eachItem}
          />
        </li>
      );
    });
  } catch (error) {}

  return <ul className='tests-list list-reset'>{testsComponents}</ul>;
};

export default AllTestCards;
