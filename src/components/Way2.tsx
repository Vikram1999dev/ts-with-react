import { useState } from 'react';

type User = {
  name: string;
  age: number;
};
export const Way2 = () => {
  const [user, setUser] = useState<User | null>(null);
  // to avoid any crash as user can be null 
  // we use optional chaining
  const name = user?.name;
  return <button>Click!!</button>;
};
