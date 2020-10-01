import React, { useContext } from 'react';
import { CompleteDataContext } from '../Context';

import Detail from '../components/Detail';

const PrivacyPolicy = () => {
  const completeData = useContext(CompleteDataContext);
  // obtain getRelevantArray function from context
  const { getRelevantArray } = completeData;
  // extract the relevant array from context
  const privacyPolicyDataArray = getRelevantArray(
    completeData,
    'privacyPolicyContent'
  );

  // destructure array
  const [privacyPolicyData] = privacyPolicyDataArray;

  let privacyPolicyBodyText;
  let privacyPolicyHeading;

  try {
    privacyPolicyBodyText = privacyPolicyData.privacyPolicyBodyText;
    privacyPolicyHeading = privacyPolicyData.privacyPolicyHeading;
  } catch (error) {}

  return (
    <main className='detail-container'>
      <Detail heading={privacyPolicyHeading} bodyText={privacyPolicyBodyText} />
    </main>
  );
};

export default PrivacyPolicy;
