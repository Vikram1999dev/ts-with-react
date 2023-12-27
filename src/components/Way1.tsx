import React, { ReactNode } from 'react';

// RELATIONSHIP Remember that
// that's why we use generics
type ButtonProps<T> = {
  countValue: T;
  countHistory: T[];
};

export const Way1 = <T extends ReactNode>({
  countValue,
  countHistory,
}: ButtonProps<T>) => {
  return <h1>{countValue}</h1>;
};
