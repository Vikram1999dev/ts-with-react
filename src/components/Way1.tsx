import { useRef } from 'react';

export const Way1 = () => {
  // here we don't need to type null explicitly
  const ref = useRef<HTMLButtonElement>(null);
  return <button ref={ref}>Click!!</button>;
};
