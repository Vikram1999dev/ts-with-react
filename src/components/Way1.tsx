import { Dispatch } from 'react';
import { Button } from 'react-bootstrap';

type WayProps = {
  count: number;
  setCount: Dispatch<React.SetStateAction<number>>;
};

export const Way1 = ({ count, setCount }: WayProps) => {
  return (
    <div>
      <h1>{count}</h1>
      <Button onClick={() => setCount((prev) => prev + 1)}>Increment</Button>
    </div>
  );
};
