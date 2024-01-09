import React from 'react';
import { Way1 } from '../components/Way1';

export const Home = () => {
  return (
    <>
      {/* Relevant for components that accept other React components as props. */}
      {/* probably some errors but very important to keep in mind */}
      <Way1 />
    </>
  );
};
