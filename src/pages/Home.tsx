import React from 'react';
import { Way3 } from '../components/Way3';

export const Home = () => {
  return (
    <>
      <h1>Home</h1>
      {/* in this we are getting error 
      "Property 'toUpperCase' does not exist on type 'number' "
      because we applied toUpperCase method on
       fontSize which a number 
       BUT
       we won't find this error we are doing in js */}
      <Way3 backgroundColor='blue' fontSize={15} />
    </>
  );
};
