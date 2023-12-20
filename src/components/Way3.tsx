import React from 'react';
import { Button } from 'react-bootstrap';

type BackgroundColorProps = {
  backgroundColor: string;
};

export const Way3 = ({ backgroundColor }: BackgroundColorProps) => {
  return <Button>{backgroundColor}</Button>;
};
