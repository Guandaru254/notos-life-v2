import React from 'react';
import Image from 'next/image';

const galleryImages = [
  {
    id: 1,
    name: 'Freshly Baked Bread',
    imageUrl: 'https://placehold.co/800x600/F5F5F5/4B5563?text=Baked+Bread',
  },
  {
    id: 2,
    name: 'Garden Fresh Produce',
    imageUrl: 'https://placehold.co/800x600/F5F5F5/4B5563?text=Fresh+Produce',
  },
  {
    id: 3,
    name: 'Table Setting',
    imageUrl: 'https://placehold.co/800x600/F5F5F5/4B5563?text=Table+Setting',
  },
  {
    id: 4,
    name: 'Chef at Work',
    imageUrl: 'https://placehold.co/800x600/F5F5F5/4B5563?text=Chef+at+Work',
  },
  {
    id: 5,
    name: 'Artisanal Desserts',
    imageUrl: 'https://placehold.co/800x600/F5F5F5/4B5563?text=Desserts',
  },
  {
    id: 6,
    name: 'Our Farm',
    imageUrl: 'https://placehold.co/800x600/F5F5F5/4B5563?text=Our+Farm',
  },
];

const GalleryPage = () => {
  return (
    <div className="flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
          Culinary Showcase
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
          A glimpse into the passion and craft behind our food.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
          >
            <div className="overflow-hidden rounded-xl">
              <Image
                src={image.imageUrl}
                alt={image.name}
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
            <div className="p-6 text-center">
              <h2 className="text-xl font-semibold text-gray-900">{image.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
