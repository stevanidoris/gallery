import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Modal = ({ image, closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-gray-500 bg-opacity-75 absolute inset-0"></div>
      <div className="bg-white rounded-lg p-8 relative z-10 max-w-[800px]">
        <h2 className="text-xl font-bold mb-4">{image.name}</h2>
        <img
          src={image.image}
          alt={image.name}
          className="w-full h-auto object-cover rounded-lg mb-4"
        />
        <p>{image.description}</p>
        <button
          onClick={closeModal}
          className="absolute top-0 right-0 mt-4 mr-4 text-red-500 hover:text-red-700 cursor-pointer p-2"
        >
          <AiOutlineCloseCircle size={40} />
        </button>
      </div>
    </div>
  );
};

export default Modal;
