import React from 'react';

const convertCurrency = (amount: number, currency: string): string => {
  return '';
};

//this will not throw any error
convertCurrency(100, 'USD');

//this will throw the error
// that is
//Argument of type 'number' is not assignable to parameter of type 'string'
// convertCurrency(100,200)

export const Home = () => {
  return <h1>Home</h1>;
};
