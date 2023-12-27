import React from 'react';
import { Way1 } from '../components/Way1';

export const Home = () => {
  return (
    <>
      {/* If we want to give type to the function dealing with
      event handler we use this */}
      <Way1 type='submit' color='red' size='md' />
    </>
  );
};
