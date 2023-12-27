import React, { ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'>;

// here rest is an array
export const Way1 = ({ type, autoFocus, ...rest }: ButtonProps) => {
  return (
    <button type={type} autoFocus={autoFocus} {...rest}>
      Click
    </button>
  );
};
