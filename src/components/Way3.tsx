import { Button } from 'react-bootstrap';

type BackgroundColorProps = {
  backgroundColor: string;
  fontSize: number;
  pillShape?: boolean;
};

export const Way3 = ({ backgroundColor }: BackgroundColorProps) => {
  return <Button>{backgroundColor}</Button>;
};
