import React from 'react';
import { ParentData } from '../types/SeatType';
import { ParentRockObject } from '../types/RockType';

type MainProps = {
  data: ParentData[];
  milestones: ParentRockObject[];
};

export const Way1 = ({ data, milestones }: MainProps) => {
  return (
    <div>
      <h1>{data[0].childSeats[0].id}</h1>
      <h1>{milestones[0].rocks[7].title}</h1>
    </div>
  );
};
