import React from 'react';
import { Way1 } from '../components/Way1';

export const Home = () => {
  return (
    <>
      {/* if we have hundred of this attribute what you are going to do */}
      {/* what you need to do is natively wrapping */}
      {/* you basically want to allow all those attribute to passed as a prop */}
      {/* and we dont want to specify all of them individually one by one */}
      <Way1 type='submit' autoFocus={true} />
    </>
  );
};
