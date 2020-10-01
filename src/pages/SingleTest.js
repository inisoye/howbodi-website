import React, { useContext, useState } from 'react';
import { CompleteDataContext } from '../Context';
import { useForm } from 'react-hook-form';

import SubscribeNudge from '../components/SubscribeNudge';
import TestQuestionsInstructions from '../components/TestQuestionsInstructions';
import YesNoQuestion from '../components/YesNoQuestion';
import TestRegistrationSection from '../components/TestRegistrationSection';

import FirstTitle from '../smallComponents/FirstTitle';

const SingleTest = (props) => {
  // State manipulation
  const [step, setStep] = useState(1);
  const [questionNumber, setQuestionNumber] = useState(1);

  // Form stuff handled here
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ name, tel, agreeTerms, ...rest }) => {
    // name, phone number and each question can be retrieved here (with the rest parameter)
    console.log(name, tel, agreeTerms, rest);
  };

  // CMS data consumption starts here
  const completeData = useContext(CompleteDataContext);
  // obtain getSingleTest and other stuff from context
  const {
    getSingleTest,
    getSingleTestIndex,
    cardColourClassesArray,
  } = completeData;

  // obtain single test from all data
  let relevantSingleTest;
  let relevantSingleTestIndex;
  let testIcon;
  let testName;
  let testLongDescription;
  let testQuestionsSectionFields;
  let testInstructions;
  let testDuration;
  let testQuestionComponents;
  let maxQuestionSteps;

  let maxSteps;

  try {
    relevantSingleTest = getSingleTest(completeData, props.match.params.slug);
    relevantSingleTestIndex = getSingleTestIndex(
      completeData,
      props.match.params.slug
    );
    testIcon = relevantSingleTest.testIcon.fields.file.url;
    testName = relevantSingleTest.testName;
    testLongDescription = relevantSingleTest.testLongDescription;
    testQuestionsSectionFields = relevantSingleTest.testQuestionsSection.fields;
    testInstructions = testQuestionsSectionFields.instructions;
    testDuration = testQuestionsSectionFields.testDuration;

    maxQuestionSteps = testQuestionsSectionFields.testQuestions.length;
    maxSteps = maxQuestionSteps + 2;
    const minQuestionSteps = 1;

    testQuestionComponents = testQuestionsSectionFields.testQuestions.map(
      (eachItem, index) => {
        return (
          <YesNoQuestion
            key={eachItem.sys.id}
            id={eachItem.sys.id}
            number={index + 1}
            question={eachItem.fields.question}
            isYesOrNoQuestion={eachItem.fields.isYesOrNoQuestion}
            register={register}
            className={
              step >= 3 &&
              step <= maxSteps &&
              questionNumber >= minQuestionSteps &&
              questionNumber <= maxQuestionSteps &&
              questionNumber === index + 1
                ? 'show-or-flex'
                : 'hide'
            }
          />
        );
      }
    );
  } catch (error) {}

  const minSteps = 1;

  // Proceeeding to next step
  const nextStep = (event) => {
    event.preventDefault();
    if (step <= maxSteps) {
      setStep(step + 1);
    }
    if (step > 2 && step <= maxSteps) {
      setQuestionNumber(questionNumber + 1);
    }
  };

  // Going to previous step
  const prevStep = (event) => {
    event.preventDefault();
    if (step > minSteps) {
      setStep(step - 1);
    }
    if (step > 3 && step > minSteps) {
      setQuestionNumber(questionNumber - 1);
    }
  };

  return (
    <main className='single-test'>
      <article
        className={`${cardColourClassesArray[relevantSingleTestIndex]} single-test-descr-container`}
      >
        <img className='single-test-image' src={testIcon} alt='' />
        <FirstTitle className='single-test-title' title={testName} />
        <p className='single-test-description'>{testLongDescription}</p>
      </article>

      <form
        className='single-test-form'
        action=''
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='single-test-no-buttons'>
          <TestRegistrationSection
            register={register}
            className={step === 1 ? 'show-or-flex' : 'hide'}
          />
          {}
          <TestQuestionsInstructions
            instructions={testInstructions}
            test={testName}
            duration={testDuration}
            className={step === 2 ? 'show-or-flex' : 'hide'}
          />
          {testQuestionComponents}
          {step > maxSteps ? <h1>Success Component</h1> : null}
        </div>

        <div className='single-test-buttons'>
          {/* {step > 1 ? <h1>Success</h1> : null} */}
          <button
            onClick={prevStep}
            className={
              step > 1 ? 'show single-test-button previous-button' : 'hide'
            }
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='14'
              fill='none'
              viewBox='0 0 32 14'
            >
              <path
                stroke='#6A8BA3'
                strokeLinecap='round'
                strokeWidth='2'
                d='M8.175 1L2 6.614l6.175 5.614M3 7h28'
              ></path>
            </svg>
            <span className='previous-button-text'>Previous</span>
          </button>
          <button
            onClick={nextStep}
            className={step < maxSteps ? 'show single-test-button' : 'hide'}
          >
            {step < 2 ? 'Continue' : 'Next'}
          </button>
          <button
            className={step >= maxSteps ? 'show single-test-button' : 'hide'}
          >
            Submit
          </button>
        </div>
      </form>

      <SubscribeNudge />
    </main>
  );
};

export default SingleTest;
