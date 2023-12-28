import React from 'react';
import { Way1 } from '../components/Way1';

export const Home = () => {
  return (
    <>
      {/* we are getting types information defined in Way1 file
    from this location node_modules/@types/...
     */}
      <Way1 />
    </>
  );
};
