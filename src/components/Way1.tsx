import React from 'react';

export const Way1 = () => {
  function foo(bar: string) {
    return { baz: 1 };
  }
  type FooReturn = ReturnType<typeof foo>;
  return <div></div>;
};
