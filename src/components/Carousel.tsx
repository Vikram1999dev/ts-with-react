import React, { useState } from 'react';
import { IoIosFastforward } from 'react-icons/io';
import { IoIosRewind } from 'react-icons/io';
import { images } from '../helpers/CarouselData';

export const Carousel = () => {
  const [currImg, setCurrImg] = useState(0);

  return (
    <div className='carousel'>
      <div
        className='carouselInner'
        style={{
          backgroundImage: `url(${require(`../${images[currImg].img}`)})`,
        }}
      >
        <div
          className='left'
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}
        >
          <IoIosRewind style={{ fontSize: 30 }} />
        </div>
        <div className='center'>
          <h1>{images[currImg].title}</h1>
          <p>{images[currImg].subtitle}</p>
        </div>
        <div
          className='right'
          onClick={() => {
            currImg < images.length - 1 && setCurrImg(currImg + 1);
          }}
        >
          <IoIosFastforward style={{ fontSize: 30 }} />
        </div>
      </div>
    </div>
  );
};
