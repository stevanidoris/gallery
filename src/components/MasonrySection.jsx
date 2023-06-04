import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { data } from '../data/data';
import Modal from './Modal';

const MasonrySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="max-w-[1640px] w-full m-auto py-5 px-2">
        <h1 className="text-orange-600 font-bold text-4xl text-center mt-5 mb-5">
            Images Library
        </h1>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry className="p-2 gap-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="border shadow-lg rounded-md overflow-hidden hover:scale-105 duration-300 cursor-pointer"
              onClick={() => openModal(item)}
            >
              <img
                src={item.image}
                style={{ width: '100%', display: 'block' }}
                alt={item.name}
              />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
      {selectedImage && (
        <Modal image={selectedImage} closeModal={closeModal} />
      )}
    </div>
  );
};

export default MasonrySection;
