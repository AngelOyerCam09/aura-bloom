import React, { useState } from 'react';
import LayoutHeader from './components/LayoutHeader';
import HomeHeroSection from './components/HomeHeroSection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomeHeroSection setCurrentPage={setCurrentPage} />;
      case 'services':
        return <ServicesSection />;
      case 'gallery':
        return <GallerySection />;
      case 'contact':
        return (
          <section className="py-20 bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-5xl font-extrabold text-gray-900 mb-8">
                ¡Contáctanos!
              </h2>
              <p className="text-xl text-gray-700 mb-12">
                Estamos listos para embellecer tus manos.
              </p>
              <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <form className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Tu Nombre"
                      className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-200 text-lg"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Tu Correo Electrónico"
                      className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-200 text-lg"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Tu Mensaje"
                      rows="5"
                      className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-200 text-lg resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-pink-600 text-white text-xl font-semibold rounded-full shadow-lg hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-300"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </section>
        );
      default:
        return <HomeHeroSection setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="font-sans antialiased text-gray-900">
      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
      <LayoutHeader currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="pt-20">
        {renderPage()}
      </main>
      <footer className="bg-gray-800 text-white py-10 text-center">
        <div className="container mx-auto px-4">
          <p className="text-lg mb-4">© 2023 Aura Bloom. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacidad
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Términos
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;