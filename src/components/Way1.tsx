import React, { useEffect } from 'react';

export const Way1 = () => {
  //here data is type of unknown so as to avoid any operations
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((data: unknown) => data?.toString());
  }, []);

  return <h1> </h1>;
};
