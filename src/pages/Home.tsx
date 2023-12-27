import React from 'react';
import { Way1 } from '../components/Way1';
import { Way2 } from '../components/Way2';

export const Home = () => {
  return (
    <>
      {/* dealing with typing in state and setState */}
      {/* this is one way of doing this */}
      <Way1 />
      {/* this for if state will be object */}
      <Way2 />
    </>
  );
};
