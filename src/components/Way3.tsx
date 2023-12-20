import { Button } from 'react-bootstrap';

type BackgroundColorProps = {
  backgroundColor: string;
  fontSize: number;
  pillShape?: boolean;
};

export const Way3 = ({
  backgroundColor,
  fontSize,
  pillShape,
}: BackgroundColorProps) => {
  fontSize.toUpperCase();
  return <Button>{backgroundColor}</Button>;
};
