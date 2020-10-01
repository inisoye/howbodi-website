import React from 'react';
import { useForm } from 'react-hook-form';

import SubscribeNudge from '../components/SubscribeNudge';

import FirstTitle from '../smallComponents/FirstTitle';
import HiddenInputLabel from '../smallComponents/HiddenInputLabel';
import OutlinedInput from '../smallComponents/OutlinedInput';

const Contact = () => {
  // Form stuff handled here
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ givenName, email, contactMessage }) => {
    // obtain form inputs here
  };

  return (
    <main>
      <div className='signup-login-contact-section'>
        <form action='#' onSubmit={handleSubmit(onSubmit)}>
          <FirstTitle className='contact-heading' title='Say hello!' />

          <p>
            <HiddenInputLabel
              htmlFor='contact-given-name'
              labelText='First Name'
            />
            <OutlinedInput
              className='signup-login-contact-input'
              type='text'
              name='givenName'
              id='contact-given-name'
              placeholder='First Name'
              autoComplete='given-name'
              required={true}
              autoFocus={true}
              register={register}
            />
          </p>

          <p>
            <HiddenInputLabel htmlFor='contact-email' labelText='Email' />
            <OutlinedInput
              className='signup-login-contact-input'
              type='email'
              name='email'
              id='contact-email'
              placeholder='Email Address'
              autoComplete='email'
              required={true}
              autoFocus={false}
              register={register}
            />
          </p>

          <p>
            <HiddenInputLabel
              htmlFor='contact-message'
              labelText='Your Message'
            />
            <textarea
              className='contact-textarea'
              name='contactMessage'
              id='contact-message'
              placeholder='Message Here'
              required={true}
              ref={register}
            />
          </p>

          <button className='signup-login-contact-button'>Send Message</button>
        </form>
      </div>
      <SubscribeNudge />
    </main>
  );
};

export default Contact;
