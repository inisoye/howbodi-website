import React from 'react';
import { useForm } from 'react-hook-form';

import FirstTitle from '../smallComponents/FirstTitle';
import HiddenInputLabel from '../smallComponents/HiddenInputLabel';
import OutlinedInput from '../smallComponents/OutlinedInput';
import SocialCluster from '../smallComponents/SocialCluster';

const SignUp = () => {
  // Form stuff handled here
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ givenName, familyName, email }) => {
    // obtain form inputs here
    console.log(givenName, familyName, email);
  };

  return (
    <main className='signup-login-contact-section'>
      <form action='#' onSubmit={handleSubmit(onSubmit)}>
        <FirstTitle
          className='signup-login-heading'
          title='Create your Account'
        />

        <p>
          <HiddenInputLabel
            htmlFor='signup-given-name'
            labelText='First Name'
          />
          <OutlinedInput
            className='signup-login-contact-input'
            type='text'
            name='givenName'
            id='signup-given-name'
            placeholder='First Name'
            autoComplete='given-name'
            required={true}
            autoFocus={true}
            register={register}
          />
        </p>

        <p>
          <HiddenInputLabel htmlFor='family-name' labelText='Last Name' />
          <OutlinedInput
            className='signup-login-contact-input'
            type='text'
            name='familyName'
            id='family-name'
            placeholder='Last Name'
            autoComplete='family-name'
            required={true}
            autoFocus={false}
            register={register}
          />
        </p>

        <p>
          <HiddenInputLabel htmlFor='signup-email' labelText='Email' />
          <OutlinedInput
            className='signup-login-contact-input'
            type='email'
            name='email'
            id='signup-email'
            placeholder='Email Address'
            autoComplete='email'
            required={true}
            autoFocus={false}
            register={register}
          />
        </p>

        <button className='signup-login-contact-button'>Sign Up</button>

        <SocialCluster />
      </form>
    </main>
  );
};

export default SignUp;
