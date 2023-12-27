import React from 'react';
import { Way1 } from '../components/Way1';

export const Home = () => {
  return (
    <>
      {/* there can be hundered of attribute send from parent to child
      so the child component can use the spread operator to take rest attribute */}
      <Way1
        type='submit'
        autoFocus={true}
        defaultValue='test'
        className='test-class'
      />
    </>
  );
};
