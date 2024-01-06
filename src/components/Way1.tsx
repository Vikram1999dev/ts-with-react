import React from 'react';

export const Way1 = () => {
  return (
    <div
      className='d-flex'
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    >
      <div
        className='col-lg-2 col-md-2'
        style={{ backgroundColor: '#ddd' }}
      ></div>
      <div
        className='d-flex flex-column'
        style={{ width: '200px', position: 'fixed', backgroundColor: '#ddd' }}
      >
        <h2>List item 1</h2>
        <h2>List item 2</h2>
        <h2>List item 3</h2>
        <h2>List item 4</h2>
        <h2>List item 5</h2>
        <h2>List item 6</h2>
      </div>
      <div className='col-lg-10 col-md-10' style={{ padding: '20px' }}>
        <div className='d-flex flex-column'>
          <h2>Main Content</h2>
          <p>Main content goes here...</p>
          <h2>Main Content</h2>
          <p>Main content goes here...</p>
          <h2>Main Content</h2>
          <p>Main content goes here...</p>
          <h2>Main Content</h2>
          <p>Main content goes here...</p>
          <h2>Main Content</h2>
          <p>Main content goes here...</p>
          <h2>Main Content</h2>
          <p>Main content goes here...</p>
          <h2>Main Content</h2>
          <p>Main content goes here...</p>
          <h2>Main Content</h2>
          <p>Main content goes here...</p>
          <h2>Main Content</h2>
          <p>Main content goes here...</p>
          <h2>Main Content</h2>
          <p>Main content goes here...</p>
          <h2>Main Content</h2>
          <p>Main content goes here...</p>
          <h2>Main Content</h2>
          <p>Main content goes here...</p>
          <h2>Main Content</h2>
          <p>Main content goes here...</p>
        </div>
      </div>
    </div>
  );
};
