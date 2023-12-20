import { Button } from 'react-bootstrap';

type BackgroundColorProps = {
  backgroundColor: 'red' | 'blue' | 'green';
  fontSize: number;
  pillShape?: boolean;
};

export const Way3 = ({
  backgroundColor,
  fontSize,
  pillShape,
}: BackgroundColorProps) => {
  return <Button>{backgroundColor}</Button>;
};
