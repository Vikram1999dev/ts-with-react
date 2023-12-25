import React from 'react';

interface URL {
  url: string;
}
//
// this will not work
//
const url: URL = 'https://google.com';

export const Way1 = () => {
  return <div>{url}</div>;
};
