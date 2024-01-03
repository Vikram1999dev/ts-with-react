import React from 'react';
import { Way1 } from '../components/Way1';
import data from '../data/data.json';
import rocks from '../data/rocks.json';

export const Home = () => {
  return (
    <>
      <Way1 data={data} milestones={rocks} />
    </>
  );
};
