import React from 'react';
import { Way2 } from '../components/Way2';

export const Home = () => {
  return (
    <>
      <h1>Home</h1>
      {/* to also specify the key types the 
      we use Record to do that */}
      <Way2
        borderRadius={{
          topLeft: 5,
          topRight: 5,
          bottomRight: 5,
          bottomLeft: 5,
        }}
      />
    </>
  );
};
