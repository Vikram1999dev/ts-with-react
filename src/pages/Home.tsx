import React from 'react';
import { Way1 } from '../components/Way1';

export const Home = () => {
  return (
    <>
      {/* if we want to add additional type to the existing one
      this is the way we do it */}
      <Way1 type='submit' color='red' size='md' />
    </>
  );
};
