import React from 'react';

const YesNoQuestion = ({
  question,
  isYesOrNoQuestion,
  number,
  id,
  register,
  className,
}) => {
  // added to convert question to camel case for input name property
  const camelize = (str) => {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, '');
  };

  const trimmedQuestion = camelize(question);

  return (
    <section className={`${className} single-test-section`}>
      <div className='single-test-section-left'>
        <small className='single-test-section-small'>Question {number}</small>
        <h3 className='single-test-section-title'>{question}</h3>
      </div>

      <div className='single-test-section-right'>
        <fieldset className='single-test-options-container'>
          <ul className='single-test-options-list list-reset'>
            <li className='single-test-options-list'>
              <input
                className='single-test-radio'
                type='radio'
                id={`option-1-${id}`}
                name={trimmedQuestion}
                value={isYesOrNoQuestion ? 'yes' : 'true'}
                required
                ref={register}
              />
              <label
                className='single-test-radio-label'
                htmlFor={`option-1-${id}`}
              >
                {isYesOrNoQuestion ? 'Yes' : 'True'}
              </label>
            </li>

            <li className='single-test-options-list'>
              <input
                className='single-test-radio'
                type='radio'
                id={`option-2-${id}`}
                name={trimmedQuestion}
                value={isYesOrNoQuestion ? 'no' : 'false'}
                required
                ref={register}
              />
              <label
                className='single-test-radio-label'
                htmlFor={`option-2-${id}`}
              >
                {isYesOrNoQuestion ? 'No' : 'False'}
              </label>
            </li>
          </ul>
        </fieldset>
      </div>
    </section>
  );
};

export default YesNoQuestion;
