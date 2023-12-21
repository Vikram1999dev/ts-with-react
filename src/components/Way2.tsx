import { Button } from 'react-bootstrap';

type ButtonProps = {
  borderRadius: Record<string, number>;
};

export const Way2 = ({ borderRadius }: ButtonProps) => {
  return <Button style={borderRadius}>CLick!!</Button>;
};
