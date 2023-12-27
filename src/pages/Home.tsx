import React from 'react';
import { Way1 } from '../components/Way1';

export const Home = () => {
  return (
    <>
      {/* VERY IMPORTANT */}
      {/* usage of generics in components say props */}
      <Way1 countValue={5} countHistory={[1, 2, 3]} />
      <Way1 countValue={'A'} countHistory={['A', 'B', 'C']} />
    </>
  );
};
