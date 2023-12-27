import React, { useEffect } from 'react';

type ButtonColor = 'red' | 'blue' | 'green';

export const Way1 = () => {
  useEffect(() => {
    // to assert that previousButtonColor will be ButtonColor(which is nothing but string)
    //  and not string|null
    //we can assert it like this
    const previousButtonColor = localStorage.getItem(
      'buttonColor',
    ) as ButtonColor;
  }, []);

  return <button>Click Me</button>;
};
