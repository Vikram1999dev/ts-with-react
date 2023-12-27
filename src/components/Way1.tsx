import React from 'react';

// this array is going to be read only
const buttonTextOptions = ['Click', 'Click Me', 'Click Me Again'] as const;

export const Way1 = () => {
  return (
    <button>
      {buttonTextOptions.map((option) => {
        return option;
      })}
    </button>
  );
};
