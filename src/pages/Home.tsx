import React from 'react';
import { Way3 } from '../components/Way3';

export const Home = () => {
  return (
    <>
      <h1>Home</h1>
      {/* now here we are getting error that fontSize is required as we
      are not passing it but there is no error for pillShape as it is not required
      because I added this '?' */}
      <Way3 backgroundColor='blue' />
    </>
  );
};
