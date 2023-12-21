import { ReactNode } from 'react';
import { Button } from 'react-bootstrap';

type WayProps = {
  children: ReactNode;
};

export const Way1 = ({ children }: WayProps) => {
  return <Button>{children}</Button>;
};
