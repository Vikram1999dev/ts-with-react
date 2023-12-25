import React, { ComponentProps, ComponentPropsWithoutRef } from 'react';

// intstead of button we can also use anchor tag and image tag etc
// type ButtonProps = ComponentProps<'button'>;

// if ref is not forwared from parent component use this
type ButtonProps = ComponentPropsWithoutRef<'button'>;

export const Way1 = ({ type, autoFocus }: ButtonProps) => {
  return <div>Hello</div>;
};
