import React from 'react';
import { ParentData } from '../types/SeatType';
import { ParentRockObject, Rocks } from '../types/RockType';
import { Button } from 'react-bootstrap';

type MainProps = {
  data: ParentData[];
  milestones: ParentRockObject[];
  statusMenuHandler: (rock: Rocks) => void;
};

export const Way1 = ({ data, milestones, statusMenuHandler }: MainProps) => {
  return (
    <div>
      <h1>{data[0].childSeats[0].id}</h1>
      <h1>{milestones[0].rocks[7].title}</h1>
      <Button
        onClick={() => statusMenuHandler(milestones[0].rocks[7])}
      ></Button>
    </div>
  );
};
