import React, { useState, useEffect } from 'react';
import { data } from '../data/data.js';
import { AiOutlineSearch } from 'react-icons/ai';
import Modal from './Modal';

const Gallery = () => {
  const [images, setImages] = useState(data);
  const [search, setSearch] = useState('');
  const [originalData, setOriginalData] = useState(data);
  const [selectedImage, setSelectedImage] = useState(null);

  const filterCategory = (category) => {
    setImages(originalData.filter((item) => item.category === category));
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    setImages(
      originalData.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, originalData]);

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12 mb-5 min-h-[700px] relative">
      <div className="flex justify-center">
        <div className="bg-gray-200 rounded-full flex items-center px-2 w-[400px] sm:w-[700px] lg:w-[1000px]">
          <input
            className="bg-transparent p-2 w-full focus:outline-none"
            type="text"
            placeholder="Search Images Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <AiOutlineSearch className=''/>
        </div>
      </div>

      <h1 className="text-orange-600 font-bold text-4xl text-center mt-5">
        Category Photos
      </h1>

      <div className="flex flex-col lg:flex-row justify-center mt-5 mx-auto items-center">
        <div className="flex flex-col lg:flex-row max-w-[500px] w-full">
          <button
            onClick={() => setImages(originalData)}
            className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1"
          >
            All
          </button>
          <button
            onClick={() => filterCategory('nature')}
            className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1"
          >
            Nature
          </button>
          <button
            onClick={() => filterCategory('animal')}
            className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1"
          >
            Animal
          </button>
          <button
            onClick={() => filterCategory('people')}
            className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1"
          >
            People
          </button>
          <button
            onClick={() => filterCategory('galaxy')}
            className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1"
          >
            Galaxy
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {images.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
            onClick={() => openModal(item)}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-2 rounded-full">
                  {item.category}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <Modal image={selectedImage} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Gallery;
