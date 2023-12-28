import React from 'react';
import { Button } from 'react-bootstrap';

export const Way1 = () => {
  const getIndexofArrayItem = <T,>(arr: T[], arrItem: T) => {
    return arr.findIndex((item: T) => item === arrItem);
  };

  const arr: number[] = [55, 97, 65];
  const index = getIndexofArrayItem(arr, 65);

  return (
    <div>
      <Button>Find Index</Button>
      <p>Index of 77 in the array: {index}</p>
    </div>
  );
};
