import React from 'react';
import { Way1 } from '../components/Way1';

export const Home = () => {
  return (
    <>
      {/* in interface you cannot use union just like you used type 
      you can only do that if you describe it as a object*/}
      <Way1 />
    </>
  );
};
