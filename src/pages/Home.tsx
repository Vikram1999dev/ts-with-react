import React from 'react';
import { Way1 } from '../components/Way1';

export const Home = () => {
  return (
    <>
      {/* usage of as-const */}
      {/* The as const keyword in TypeScript is a type assertion that tells the compiler to treat a value as a constant. 
      This means that the value cannot be reassigned or modified in any way. */}
      <Way1 />
    </>
  );
};
