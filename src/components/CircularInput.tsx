import React, { useState, useRef } from 'react';

const CircularInput = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target) {
          setSelectedImage(e.target.result as string);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleChooseImage = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      <input
        type='file'
        id='fileInput'
        accept='image/*'
        onChange={handleImageChange}
        style={{ display: 'none' }}
        ref={fileInputRef}
      />
      <div onClick={handleChooseImage} style={{ cursor: 'pointer' }}>
        {selectedImage ? (
          <img
            src={selectedImage}
            alt='Selected'
            style={{ width: '200px', height: '200px', borderRadius: '50%' }}
          />
        ) : (
          <div>
            <p>Choose an image</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CircularInput;
