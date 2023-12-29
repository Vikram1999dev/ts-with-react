import React from 'react';
import { Button } from 'react-bootstrap';

export const Way1 = () => {
  const getIndexofArrayItem = <T, K>(arr1: T, arr2: K): [T, K] => {
    return [arr1, arr2];
  };

  const arr: number[] = [55, 97, 65];
  const str: string[] = ['hello', 'bye'];
  const index = getIndexofArrayItem(arr, str);

  return (
    <div>
      <Button>Find Index</Button>
      <p>Index of 77 in the array: {index}</p>
    </div>
  );
};
