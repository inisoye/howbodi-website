import React from 'react';

const TestQuestionsInstructions = ({
  instructions,
  test,
  duration,
  className,
}) => {
  // create dynamic date
  const todayObject = new Date();
  //an object containing desired properties of the date(s)
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  //function that adds days to date
  const addDays = (date, days) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };
  const fiveDaysObject = addDays(todayObject, 5);

  const todaysDate = todayObject.toLocaleString('en-GB', options);
  const fiveDaysDate = fiveDaysObject.toLocaleString('en-GB', options);

  return (
    <section className={`${className} single-test-section`}>
      <div className='single-test-section-left'>
        <small className='single-test-section-small'>Instructions</small>
        <h3 className='single-test-section-title'>
          Enter Your details to Begin
        </h3>
      </div>

      <div className='single-test-section-right'>
        <div className='single-test-instructions-wrapper'>
          <p className='single-test-instructions'>{instructions}</p>
        </div>

        <div className='single-test-details-wrapper'>
          <p className='single-test-detail'>Test: {test}</p>
          <p className='single-test-detail'>Duration: {duration} mins</p>
          <p className='single-test-detail'>
            This test can be taken between {todaysDate} and {fiveDaysDate}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestQuestionsInstructions;
