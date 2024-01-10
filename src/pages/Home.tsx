import React from 'react';
import { Way1 } from '../components/Way1';

export const Home = () => {
  return (
    <>
      {/* Leaning on TypeScript's Type Inference is great... until you realize you 
    need a type that was inferred, and have to go back and explicitly declare 
    types/interfaces so you can export them for reuse. */}
      <Way1 />
    </>
  );
};
