import React, { useState } from 'react';
import { Way1 } from '../components/Way1';
import data from '../data/data.json';
import rocks from '../data/rocks.json';
import { Rocks } from '../types/RockType';

export const Home = () => {
  const [statusMenu, setStatusMenu] = useState(false);
  const [statusMenuRock, setStatusMenuRock] = useState<Rocks>();
  const statusMenuHandler = (rock: Rocks): void => {
    setStatusMenu((prev) => !prev);
    setStatusMenuRock(rock);
  };
  return (
    <>
      <Way1 data={data} milestones={rocks} />
    </>
  );
};
