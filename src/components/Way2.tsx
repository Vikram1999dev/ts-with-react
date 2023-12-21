import { CSSProperties } from 'react';
import { Button } from 'react-bootstrap';

type ButtonProps = {
  style: CSSProperties;
};

export const Way2 = ({ style }: ButtonProps) => {
  return <Button style={style}>CLick!!</Button>;
};
