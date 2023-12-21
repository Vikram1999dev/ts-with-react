import React from 'react';
import { Way1 } from '../components/Way1';

export const Home = () => {
  const onClick = (a: string): number[] => {
    console.log([0]);
    return [0];
  };
  return (
    <>
      <h1>Home</h1>
      <Way1 onClick={onClick} />
    </>
  );
};
