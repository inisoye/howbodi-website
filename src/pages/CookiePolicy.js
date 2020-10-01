import React, { useContext } from 'react';
import { CompleteDataContext } from '../Context';

import Detail from '../components/Detail';

const CookiePolicy = () => {
  const completeData = useContext(CompleteDataContext);
  // obtain getRelevantArray function from context
  const { getRelevantArray } = completeData;
  // extract the relevant array from context
  const cookiePolicyDataArray = getRelevantArray(
    completeData,
    'cookiePolicyContent'
  );

  // destructure array
  const [cookiePolicyData] = cookiePolicyDataArray;

  let cookiePolicyBodyText;
  let cookiePolicyHeading;

  try {
    cookiePolicyBodyText = cookiePolicyData.cookiePolicyBodyText;
    cookiePolicyHeading = cookiePolicyData.cookiePolicyHeading;
  } catch (error) {}

  return (
    <main className='detail-container'>
      <Detail heading={cookiePolicyHeading} bodyText={cookiePolicyBodyText} />
    </main>
  );
};

export default CookiePolicy;
