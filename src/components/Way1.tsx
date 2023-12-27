import React from 'react';

// in this case we need to provide the relationship between parameter and
// return type
//it can be of any type
//so we use generics
// here we need to add comma because we are working in tsx file
// if we define function in old way we don't need to add comma
const convertToArray = <T,>(value: T): T[] => {
  return [value];
};

convertToArray(5);
convertToArray('hello');

export const Way1 = () => {
  return <button>Click Me</button>;
};
