import { Button } from 'react-bootstrap';

type URL = string;

const url: URL = 'https://google.com';

export const Way2 = () => {
  return <Button>{url}</Button>;
};
