import React from 'react';
import Logo from "../img/Logo_Aura_Bloom.jpg";

const ServicesSection = () => {
  const services = [
    {
      name: 'Manicura Clásica',
      description: 'Cuidado completo de tus uñas y cutículas, con esmaltado tradicional.',
      price: '$250',
      icon: (
        <img
            src={Logo}
            alt="Aura Bloom Logo"
            className="w-40 h-45 rounded-full object-cover shadow-lg mb-4"
          />
      ),
    },
    {
      name: 'Uñas Acrílicas',
      description: 'Extensiones duraderas y personalizadas con diseño a tu elección.',
      price: '$500',
      icon: (
        <img
            src={Logo}
            alt="Aura Bloom Logo"
            className="w-40 h-45 rounded-full object-cover shadow-lg mb-4"
          />
      ),
    },
    {
      name: 'Gelish / Shellac',
      description: 'Esmaltado semipermanente de larga duración y brillo intenso.',
      price: '$350',
      icon: (
      <img
            src={Logo}
            alt="Aura Bloom Logo"
            className="w-40 h-45 rounded-full object-cover shadow-lg mb-4"
          />
      ),
    },
    {
      name: 'Diseño de Uñas',
      description: 'Arte personalizado en tus uñas, desde lo sutil hasta lo más elaborado.',
      price: 'Desde $100',
      icon: (
        <img
            src={Logo}
            alt="Aura Bloom Logo"
            className="w-40 h-45 rounded-full object-cover shadow-lg mb-4"
          />
      ),
    },
    {
      name: 'Manicura Clásica',
      description: 'Cuidado completo de tus uñas y cutículas, con esmaltado tradicional.',
      price: '$250',
      icon: (
        <img
            src={Logo}
            alt="Aura Bloom Logo"
            className="w-40 h-45 rounded-full object-cover shadow-lg mb-4"
          />
      ),
    },
    {
      name: 'Uñas Acrílicas',
      description: 'Extensiones duraderas y personalizadas con diseño a tu elección.',
      price: '$500',
      icon: (
        <img
            src={Logo}
            alt="Aura Bloom Logo"
            className="w-40 h-45 rounded-full object-cover shadow-lg mb-4"
          />
      ),
    },
    {
      name: 'Gelish / Shellac',
      description: 'Esmaltado semipermanente de larga duración y brillo intenso.',
      price: '$350',
      icon: (
        <img
            src={Logo}
            alt="Aura Bloom Logo"
            className="w-40 h-45 rounded-full object-cover shadow-lg mb-4"
          />
      ),
    },
    {
      name: 'Diseño de Uñas',
      description: 'Arte personalizado en tus uñas, desde lo sutil hasta lo más elaborado.',
      price: 'Desde $100',
      icon: (
        <img
            src={Logo}
            alt="Aura Bloom Logo"
            className="w-40 h-45 rounded-full object-cover shadow-lg mb-4"
          />
      ),
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-16">
          Nuestros <span className="text-pink-600">Servicios</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-100"
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-pink-600 text-3xl font-extrabold">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;