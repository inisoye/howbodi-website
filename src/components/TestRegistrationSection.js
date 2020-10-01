import React from 'react';

import HiddenInputLabel from '../smallComponents/HiddenInputLabel';

const TestRegistrationSection = ({ register, className }) => {
  return (
    <section
      className={`${className} single-test-registration single-test-section`}
    >
      <div className='single-test-section-left'>
        <small className='single-test-section-small'>Get Started</small>
        <h3 className='single-test-section-title'>
          Enter Your details to Begin
        </h3>
      </div>

      <div className='single-test-section-right'>
        <p className='single-test-input-container'>
          <HiddenInputLabel htmlFor='name' labelText='Enter your name' />
          <input
            className='single-test-input'
            type='text'
            name='name'
            id='name'
            placeholder='Name'
            autoComplete='name'
            required={true}
            autoCapitalize='off'
            ref={register}
          />
        </p>

        <p>
          <HiddenInputLabel htmlFor='tel' labelText='Enter your phone number' />
          <input
            className='single-test-input'
            type='tel'
            name='tel'
            id='tel'
            placeholder='Phone Number'
            autoComplete='tel'
            required={true}
            autoCapitalize='off'
            ref={register}
          />
        </p>

        <p className='single-test-agree-container'>
          <input
            className='single-test-checkbox'
            type='checkbox'
            name='agreeTerms'
            id='agree-terms'
            required={true}
            ref={register}
          />
          <label className='single-test-checkbox-label' htmlFor='agree-terms'>
            By clicking “Continue” you agree to the terms and Conditions
          </label>
        </p>
      </div>
      {/* <button onClick={preventDefault}>Continue</button> */}
    </section>
  );
};

export default TestRegistrationSection;
