import React from 'react';
import { Way1 } from '../components/Way1';

export const Home = () => {
  return (
    <>
      {/* when function is passed as props for generics */}
      {/* IntrinsicAttributes is an interface that defines the 
      set of attributes that can be passed to a React element. */}
      <Way1 />
    </>
  );
};
