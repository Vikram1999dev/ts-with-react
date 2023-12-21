import React from 'react';
import { Way2 } from '../components/Way2';

export const Home = () => {
  return (
    <>
      <h1>Home</h1>
      {/* if you want css properties that can go upto
      say 100 properties than can be quite cumbersome
      so react give type so that we can specify to the type
      and add as many as we want */}
      <Way2
        style={{
          backgroundColor: 'red',
          fontSize: 15,
          color: 'white',
        }}
      />
    </>
  );
};
