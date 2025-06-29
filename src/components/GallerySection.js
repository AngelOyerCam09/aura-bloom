import React from 'react';

const GallerySection = () => {
  const images = [
    'https://lirp.cdn-website.com/07aaf2d8/dms3rep/multi/opt/un%CC%83as-acrilicas3-640w.jpg',
    'https://lirp.cdn-website.com/07aaf2d8/dms3rep/multi/opt/un%CC%83as-acrilicas3-640w.jpg',
    'https://lirp.cdn-website.com/07aaf2d8/dms3rep/multi/opt/un%CC%83as-acrilicas3-640w.jpg',
    'https://lirp.cdn-website.com/07aaf2d8/dms3rep/multi/opt/un%CC%83as-acrilicas3-640w.jpg',
    'https://lirp.cdn-website.com/07aaf2d8/dms3rep/multi/opt/un%CC%83as-acrilicas3-640w.jpg',
    'https://lirp.cdn-website.com/07aaf2d8/dms3rep/multi/opt/un%CC%83as-acrilicas3-640w.jpg',
    'https://lirp.cdn-website.com/07aaf2d8/dms3rep/multi/opt/un%CC%83as-acrilicas3-640w.jpg',
    'https://lirp.cdn-website.com/07aaf2d8/dms3rep/multi/opt/un%CC%83as-acrilicas3-640w.jpg',
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center text-gray-500 mb-16">
           <span className="text-pink-600">Galería</span> de Diseños
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-xl group transform transition-all duration-300 hover:scale-105"
            >
              <img
                src={src}
                alt={`Diseño de uñas ${index + 1}`}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  Diseño Exclusivo {index + 1}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;