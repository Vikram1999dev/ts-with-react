import React from 'react';

export const Way1 = () => {
  function foo() {
    return {
      a: 1,
      b: 2,
      subInstArr: [
        {
          c: 3,
          d: 4,
        },
      ],
    };
  }

  type InstType = ReturnType<typeof foo>;
  type SubInstArr = InstType['subInstArr'];
  type SubInstType = SubInstArr[0];

  let baz: SubInstType = {
    c: 5,
    d: 6, // type checks ok!
  };

  type SubInstType2 = ReturnType<typeof foo>['subInstArr'][0];
  return <div></div>;
};
