import React from 'react';
import CircularInput from './CircularInput';

export const Way1 = () => {
  return (
    <form>
      <>
        <h3>
          <strong>Add New Course</strong>
        </h3>
        <div className='d-flex img-upload-container'>
          {/* <input type='file' className='circle-img-input' accept='image/*' /> */}
          <CircularInput />
          {/* <img src={upload} alt='upload-img' className='upload-image' /> */}
        </div>
        <div className='d-flex flex-lg-row flex-md-row flex-sm-column'>
          <div className='d-flex flex-column col-lg-6 col-md-6 col-sm-12'>
            <label htmlFor='course-title'>Course Title</label>
            <input
              type='text'
              name='course-title'
              placeholder='Enter course/ event name'
            />
          </div>

          <div className='d-flex flex-column col-lg-6 col-md-6 col-sm-12 file-upload-container'>
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
      </>
    </form>
  );
};
