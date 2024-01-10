import React, { useState } from 'react';

export const Way1 = () => {
  const [state, setState] = useState({
    foo: 1,
    bar: 2,
  });

  const someMethod = (obj: typeof state) => {
    // grabbing the type of state even though it was inferred
    setState(obj); // this works
  };

  return <button>Click Me</button>;
};
