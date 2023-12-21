import React from 'react';
import { Way1 } from '../components/Way1';
import { Way2 } from '../components/Way2';

export const Home = () => {
  return (
    <>
      <h1>Home</h1>
      {/* one way to  define css */}
      <Way1
        backgroundColor='blue'
        textColor='white'
        fontSize={15}
        padding={[2, 3, 6, 5]}
      />
      {/* another way to define css */}
      <Way2
        style={{
          backgroundColor: 'red',
          fontSize: 15,
          textColor: 'green',
        }}
      />
    </>
  );
};
