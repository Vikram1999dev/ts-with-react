import React, { MouseEventHandler } from 'react';

type ButtonProps = {
  type: 'button' | 'submit' | 'reset';
  color: 'red' | 'blue' | 'green';
};

type SuperButtonProps = ButtonProps & {
  size: 'md' | 'lg';
};

export const Way1 = ({ size, type, color }: SuperButtonProps) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log('clicked');
  };
  return <button onClick={handleClick}>Click!!</button>;
};
