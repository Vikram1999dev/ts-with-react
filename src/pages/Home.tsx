import React from 'react';
import { Way1 } from '../components/Way1';

export const Home = () => {
  return (
    <>
      {/* usage of assertion type */}
      {/* the as keyword is primarily used for type assertions, which is
       a way to tell the compiler to treat an expression as a different 
       type than its inferred type.  */}
      {/* it's important to understand that type assertions do not 
       actually change the type of the variable at runtime. */}
      {/* type assertion doesn't change the underlying type of the variable. */}
      <Way1 />
    </>
  );
};
