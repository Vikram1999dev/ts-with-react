import { Button } from 'react-bootstrap';

type WayProps = {
  children: JSX.Element;
};

export const Way1 = ({ children }: WayProps) => {
  return <Button>{children}</Button>;
};
