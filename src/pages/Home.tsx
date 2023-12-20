import React from 'react';
import { Way3 } from '../components/Way3';

export const Home = () => {
  return (
    <>
      <h1>Home</h1>
      {/* if we want to combine different types
      then we can define type separately and the add 
      that in say main type definition */}
      <Way3 backgroundColor='blue' fontSize={15} />
    </>
  );
};
