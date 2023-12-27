import React from 'react';

type ButtonProps = {
  type: 'button' | 'submit' | 'reset';
  color: 'red' | 'blue' | 'green';
};

type SuperButtonProps = ButtonProps & {
  size: 'md' | 'lg';
};

// here rest is an array
export const Way1 = ({ size, type, color }: SuperButtonProps) => {
  return <button>Click</button>;
};
