import { Button } from 'react-bootstrap';

type Color = 'red' | 'blue' | 'green';

type BackgroundColorProps = {
  backgroundColor: Color;
  fontSize: number;
  pillShape?: boolean;
  padding: [number, number, number, number];
};

export const Way3 = ({
  backgroundColor,
  fontSize,
  pillShape,
}: BackgroundColorProps) => {
  return <Button>{backgroundColor}</Button>;
};
