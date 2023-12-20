import React from 'react';
import { Button } from 'react-bootstrap';

export const Way1 = (props: { backgroundColor: string }) => {
  const { backgroundColor } = props;
  return <Button>{backgroundColor}</Button>;
};
