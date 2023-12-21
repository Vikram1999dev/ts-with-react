import { Button } from 'react-bootstrap';

type Color = 'red' | 'blue' | 'green';

type ButtonProps = {
  style: {
    backgroundColor: Color;
    fontSize: number;
    textColor: Color;
  };
};

export const Way2 = ({ style }: ButtonProps) => {
  return <Button style={style}>CLick!!</Button>;
};
