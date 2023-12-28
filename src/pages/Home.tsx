import React from 'react';
import { Way1 } from '../components/Way1';

export const Home = () => {
  return (
    <>
      {/* here we are importing types defined
      in other file */}
      {/* basically used to centralize types */}
      <Way1 countValue={5} countHistory={[1, 2, 3]} />
    </>
  );
};
