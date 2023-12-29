import React from 'react';

export const Way1 = () => {
  return (
    <div className='form-container'>
      <form action='/submit' method='post'>
        <fieldset className='fieldset-container'>
          <legend>Contact Information</legend>
          <div className='d-flex'>
            <div className='d-flex flex-column w-100'>
              <label htmlFor='name'>Name:</label>
              <input
                className='input-field me-3'
                type='text'
                id='name'
                name='name'
                required
              />
            </div>
            <div className='d-flex flex-column w-100'>
              <label htmlFor='email'>Email:</label>
              <input
                className='input-field'
                type='email'
                id='email'
                name='email'
                required
              />
            </div>
          </div>
          <div className='d-flex flex-column'>
            <label htmlFor='phone'>Phone:</label>
            <input className='input-field' type='tel' id='phone' name='phone' />
          </div>
        </fieldset>

        <fieldset className='fieldset-container'>
          <legend>Account Information</legend>
          <div className='d-flex flex-column'>
            <label htmlFor='username'>Username:</label>
            <input
              className='input-field'
              type='text'
              id='username'
              name='username'
              required
            />
          </div>

          <div className='d-flex'>
            <div className='d-flex flex-column w-100'>
              <label htmlFor='password'>Password:</label>
              <input
                className='input-field me-3'
                type='password'
                id='password'
                name='password'
                required
              />
            </div>
            <div className='d-flex flex-column w-100'>
              <label htmlFor='confirmPassword'>Confirm Password:</label>
              <input
                className='input-field'
                type='password'
                id='confirmPassword'
                name='confirmPassword'
                required
              />
            </div>
          </div>
        </fieldset>

        <fieldset className='fieldset-container'>
          <legend>Additional Information</legend>

          <div className='d-flex flex-column'>
            <label htmlFor='birthdate'>Birthdate:</label>
            <input
              className='input-field'
              type='date'
              id='birthdate'
              name='birthdate'
            />
          </div>

          <div className='d-flex flex-column'>
            <label htmlFor='gender'>Gender:</label>
            <select id='gender' name='gender'>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
              <option value='other'>Other</option>
            </select>
          </div>
        </fieldset>

        <fieldset className='fieldset-container'>
          <legend>Interests</legend>
          <div className='d-flex flex-column'>
            <label htmlFor='interests'>Select your interests:</label>
            <select id='interests' name='interests'>
              <option value='music'>Music</option>
              <option value='sports'>Sports</option>
              <option value='movies'>Movies</option>
              <option value='books'>Books</option>
            </select>
          </div>
        </fieldset>

        <fieldset className='fieldset-container'>
          <legend>Message</legend>
          <div className='d-flex flex-column'>
            <label htmlFor='message'>Message:</label>
            <textarea id='message' name='message' rows={4} cols={50} />
          </div>
        </fieldset>

        <button className='mt-3' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};
