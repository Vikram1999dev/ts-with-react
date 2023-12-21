import React from 'react';
import { Way1 } from '../components/Way1';

export const Home = () => {
  const d = <div></div>;
  return (
    <>
      <h1>Home</h1>
      {/* if we only want to have jsx element as children */}
      <Way1>{d}</Way1>
    </>
  );
};
