import React, { useContext } from 'react';
import { CompleteDataContext } from '../Context';

import Detail from '../components/Detail';

const TermsAndConditions = () => {
  const completeData = useContext(CompleteDataContext);
  // obtain getRelevantArray function from context
  const { getRelevantArray } = completeData;
  // extract the relevant array from context
  const termsAndConditionsDataArray = getRelevantArray(
    completeData,
    'termsAndConditionsContent'
  );

  // destructure array
  const [termsAndConditionsData] = termsAndConditionsDataArray;

  let termsAndConditionsBodyText;
  let termsAndConditionsHeading;

  try {
    termsAndConditionsBodyText =
      termsAndConditionsData.termsAndConditionsBodyText;
    termsAndConditionsHeading =
      termsAndConditionsData.termsAndConditionsHeading;
  } catch (error) {}

  return (
    <main className='detail-container'>
      <Detail
        heading={termsAndConditionsHeading}
        bodyText={termsAndConditionsBodyText}
      />
    </main>
  );
};

export default TermsAndConditions;
