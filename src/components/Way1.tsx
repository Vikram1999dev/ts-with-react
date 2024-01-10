import React from 'react';

export const Way1 = () => {
  // Variable with a union type
  const handleTypeGuard = (myVar: number | string) => {
    // Type guard using typeof to check if it's a number
    if (typeof myVar === 'number') {
      // Inside this block, TypeScript knows that myVar is a number
      console.log(myVar.toFixed(2)); // No error, as myVar is treated as a number here
    } else {
      // Inside this block, TypeScript knows that myVar is a string
      console.log(myVar.length); // No error, as myVar is treated as a string here
    }
  };

  return (
    <div>
      <button onClick={() => handleTypeGuard(5)}>Number</button>
      <button onClick={() => handleTypeGuard('hello')}>String</button>
    </div>
  );
};
