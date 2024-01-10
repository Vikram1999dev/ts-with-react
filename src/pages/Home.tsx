import React from 'react';
import { Way1 } from '../components/Way1';
import { Way2 } from '../components/Way2';

export const Home = () => {
  return (
    <>
      {/* a type guard is a way to check and narrow down the type of a variable within 
        a certain code block. It helps you make more precise type assertions about 
        a variable, allowing TypeScript to understand and enforce those types. */}
      <Way1 />
      {/* second example */}
      <Way2 />
    </>
  );
};
