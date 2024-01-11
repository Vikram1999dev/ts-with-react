import React from 'react';

interface Way1ComponentProps {
  name: string;
  age: number;
}

export const Way1 = ({ name, age }: Way1ComponentProps) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};
