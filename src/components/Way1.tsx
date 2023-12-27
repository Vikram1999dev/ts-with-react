import React from 'react';

type User = {
  sessionId: string;
  name: string;
};

// for example we have a guest but we don't have his name
// now Guest will have only sessionId as type
type Guest = Omit<User, 'name'>;
export const Way1 = () => {
  return <button>Click Me</button>;
};
