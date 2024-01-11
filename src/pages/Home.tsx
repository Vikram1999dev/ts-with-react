import React, { ComponentProps } from 'react';
import { Way1 } from '../components/Way1';

type Way1Props = ComponentProps<typeof Way1>;

export const Home = () => {
  const way1Props: Way1Props = {
    name: 'John',
    age: 25,
  };
  return (
    <>
      {/* to grab prop type of component */}
      {/* there can be hundred props we cannot take one by one */}
      {/* and also if we define in way1 component we should avoid creating definition 
      for that type */}
      <Way1 {...way1Props} />
    </>
  );
};
