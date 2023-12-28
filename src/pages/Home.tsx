import React from 'react';
import { Way1 } from '../components/Way1';

export const Home = () => {
  return (
    <>
      {/* here we are using unknown type
    because for example we don't know what we will
    get as data what will be its type and also to 
    avoid 'any' type */}
      <Way1 />
    </>
  );
};
