import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import FirstTitle from '../smallComponents/FirstTitle';
import HiddenInputLabel from '../smallComponents/HiddenInputLabel';
import OutlinedInput from '../smallComponents/OutlinedInput';
import SocialCluster from '../smallComponents/SocialCluster';

const LogIn = () => {
  // Form stuff handled here
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ email, password }) => {
    console.log(email, password);
  };

  return (
    <main className='signup-login-contact-section'>
      <form action='#' onSubmit={handleSubmit(onSubmit)}>
        <FirstTitle className='signup-login-heading' title='Welcome Back' />

        <p>
          <HiddenInputLabel htmlFor='login-email' labelText='Email' />
          <OutlinedInput
            className='signup-login-contact-input'
            type='email'
            name='email'
            id='login-email'
            placeholder='Username or email'
            autoComplete='email'
            required={true}
            autoFocus={true}
            register={register}
          />
        </p>

        <p>
          <HiddenInputLabel htmlFor='password' labelText='Password' />
          <OutlinedInput
            className='signup-login-contact-input'
            type='password'
            name='password'
            id='password'
            placeholder='Password'
            autoComplete='new-password'
            required={true}
            autoFocus={false}
            register={register}
          />
        </p>

        <Link className='forgot-password' to='/'>
          Forgot Password?
        </Link>

        <button className='signup-login-contact-button'>Log in</button>
      </form>

      <SocialCluster />
    </main>
  );
};

export default LogIn;
