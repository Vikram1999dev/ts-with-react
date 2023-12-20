import React from 'react';
import { Way1 } from '../components/Way1';
import { Way2 } from '../components/Way2';
import { Way3 } from '../components/Way3';

export const Home = () => {
  return (
    <>
      <h1>Home</h1>
      {/* with props */}
      <Way1 backgroundColor='blue' />
      {/* with destructured props */}
      <Way2 backgroundColor='blue' />
      {/* with destructured props and types defined in another outside the component */}
      <Way3 backgroundColor='blue' />
    </>
  );
};
