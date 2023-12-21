import React, { useState } from 'react';
import { Way1 } from '../components/Way1';

export const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Home</h1>
      {/* if we only send state and setstate */}
      <Way1 count={count} setCount={setCount} />
    </>
  );
};
