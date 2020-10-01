import React from 'react';
import { useForm } from 'react-hook-form';

import HiddenInputLabel from '../smallComponents/HiddenInputLabel';

const SubscribeNudge = () => {
  // Form stuff handled here
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ email }) => {
    // obtain form inputs here
  };

  return (
    <section className='subscribe-nudge'>
      <div className='subscribe-nudge-left'>
        <h3 className='subscribe-nudge-heading'>Get Updates & More</h3>
        <small className='subscribe-nudge-small'>
          Thoughtful thoughts to your inbox
        </small>
      </div>

      <div className='subscribe-nudge-right'>
        <form action='' onSubmit={handleSubmit(onSubmit)}>
          <HiddenInputLabel
            htmlFor='subscribe-email'
            labelText='Enter your email to get updates and more'
          />
          <input
            className='subscribe-nudge-input'
            type='email'
            name='email'
            id='subscribe-email'
            placeholder='Email Address'
            autoComplete='email'
            required={true}
            autoCapitalize='off'
            ref={register}
          />
          <button className='subscribe-nudge-button'>Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeNudge;
