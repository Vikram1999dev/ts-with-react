import React from 'react';
import { Way3 } from '../components/Way3';

export const Home = () => {
  return (
    <>
      <h1>Home</h1>
      {/* if we want to specify the 
      the array which will contain specific elements in it  
      THIS IS THE MESSAGE
      Source has 10 element(s) but target allows only 4.
      */}
      <Way3
        backgroundColor='blue'
        fontSize={15}
        padding={[2, 3, 6, 5, 5, 6, 9, 6, 9, 6]}
      />
    </>
  );
};
