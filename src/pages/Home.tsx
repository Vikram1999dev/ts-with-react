import React from 'react';
import { Way3 } from '../components/Way3';

export const Home = () => {
  return (
    <>
      <h1>Home</h1>
      {/* instead of accepting any string we are accepting the particular 
      type of string */}
      <Way3 backgroundColor='blue' fontSize={15} />
    </>
  );
};
