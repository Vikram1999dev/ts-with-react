import { Button } from 'react-bootstrap';

type FunctionProps = {
  onClick: (a: string) => number[];
};

export const Way1 = ({ onClick }: FunctionProps) => {
  return <Button onClick={() => onClick('hello')}>Click</Button>;
};
