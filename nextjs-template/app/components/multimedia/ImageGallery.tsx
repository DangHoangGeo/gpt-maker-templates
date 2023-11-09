'use client'
import React, { useState } from 'react';

interface ImageGalleryProps {
  images: string[]; // Array of image URLs
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const previousImage = () => {
    setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const nextImage = () => {
    setSelectedIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={images[selectedIndex]}
        alt={`Gallery image ${selectedIndex + 1}`}
        className="w-full h-auto max-w-screen-md"
      />
      <div className="flex mt-4">
        <button
          onClick={previousImage}
          className="p-2 bg-gray-200 rounded-l hover:bg-gray-300"
        >
          Previous
        </button>
        <button
          onClick={nextImage}
          className="p-2 bg-gray-200 rounded-r hover:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
