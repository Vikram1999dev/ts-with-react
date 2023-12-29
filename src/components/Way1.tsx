import React from 'react';

export const Way1 = () => {
  return (
    <div>
      <form>
        <h3>
          <strong>Add New Course</strong>
        </h3>
        <div className='d-flex'>
          <div className='d-flex flex-column w-100'>
            <label htmlFor='course-title'>Course Title</label>
            <input
              type='text'
              name='course-title'
              placeholder='Enter course/ event name'
            />
          </div>

          <div className='d-flex flex-column w-100'>
            <label htmlFor='cover-img-upload'>Upload Cover Image</label>
            <input type='file' name='cover-img-upload' id='file-input' />
          </div>
        </div>

        <div className='d-flex flex-column'>
          <label htmlFor='course-desc'>Course Description</label>
          <input
            type='text'
            name='course-desc'
            placeholder='Enter course/ event description'
          />
        </div>

        <div className='d-flex flex-column'>
          <label htmlFor='will-learn'>What you will learn in course</label>
          <textarea
            name="'will-learn"
            cols={30}
            rows={10}
            placeholder='Description'
          ></textarea>
        </div>
      </form>
    </div>
  );
};
