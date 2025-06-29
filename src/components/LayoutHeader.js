import React from 'react';
import Logo from "../img/Logo_Aura_Bloom.jpg";

const LayoutHeader = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { name: 'Inicio', page: 'home' },
    { name: 'Servicios', page: 'services' },
    { name: 'Galería', page: 'gallery' },
    { name: 'Contacto', page: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <img
            src={Logo}
            alt="Aura Bloom Logo"
            className="w-14 h-15 rounded-full object-cover shadow-lg mb-2"
          />
        <nav>
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.page}>
                <button
                  onClick={() => setCurrentPage(item.page)}
                  className={`text-lg font-medium transition-colors ${
                    currentPage === item.page
                      ? 'text-pink-600 border-b-2 border-pink-600'
                      : 'text-gray-600 hover:text-pink-600'
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default LayoutHeader;