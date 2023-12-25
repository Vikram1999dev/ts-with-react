import React from 'react';
import { Way1 } from '../components/Way1';
import data from '../data/data.json';
import { Way2 } from '../components/Way2';

export const Home = () => {
  return (
    <>
      {/* in interface you can only define a object */}
      {/* for example if we want to describe the type of url in interface
      you need to define it like this
      in the format of object */}
      <Way1 />
      {/* but in the case of type */}
      <Way2 />
    </>
  );
};
