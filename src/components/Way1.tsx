import React, { ReactNode } from 'react';

// you can add type here
//to make it extra clear that this a type
import { type ButtonProps } from '../lib/types';

// RELATIONSHIP Remember that
// that's why we use generics

export const Way1 = <T extends ReactNode>({
  countValue,
  countHistory,
}: ButtonProps<T>) => {
  return <h1>{countValue}</h1>;
};
