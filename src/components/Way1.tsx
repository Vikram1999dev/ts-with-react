import React, { ChangeEvent } from 'react';
import Form from 'react-bootstrap/Form';

export const Way1 = () => {
  const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <Form.Select aria-label='Default select example' onChange={changeHandler}>
        <option>Open this select menu</option>
        <option value='1'>One</option>
        <option value='2'>Two</option>
        <option value='3'>Three</option>
      </Form.Select>
    </div>
  );
};
