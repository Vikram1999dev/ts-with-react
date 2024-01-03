import React, { MouseEvent, useState } from 'react';
import { ParentData } from '../types/SeatType';
import { ParentRockObject } from '../types/RockType';
import { Button } from 'react-bootstrap';

type MainProps = {
  data: ParentData[];
  milestones: ParentRockObject[];
};

export const Way1 = ({ data, milestones }: MainProps) => {
  const [count, setCount] = useState(0);
  const countHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCount((prev: number) => prev + 1);
  };
  return (
    <div>
      <h1>{data[0].childSeats[0].id}</h1>
      <h1>{milestones[0].rocks[7].title}</h1>
      <Button onClick={countHandler}>Count:- {count}</Button>
    </div>
  );
};
