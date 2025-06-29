import React from "react";
import Logo from "../img/Logo_Aura_Bloom.jpg";

const HomeHeroSection = ({ setCurrentPage }) => {
  return (
    <section className="relative h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      <div className="relative z-10 text-center p-6 bg-white bg-opacity-90 rounded-3xl shadow-2xl max-w-3xl mx-auto transform transition-all duration-500 hover:scale-105">
        <div className="flex flex-col items-center justify-center mb-6">
          <img
            src={Logo}
            alt="Aura Bloom Logo"
            className="w-40 h-45 rounded-full object-cover shadow-lg mb-4"
          />
          <h2 className="text-2xl font-extrabold text-gray-900 leading-tight">
            <span className="text-gray-400"> ¡Florece a tu manera con <p></p> nosotros!</span>
          </h2>
        </div>
        <button
          onClick={() => setCurrentPage("services")}
          className="px-8 py-4 bg-pink-400 text-white text-xl font-semibold rounded-full shadow-lg hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-300"
        >
          Explora Nuestros Servicios
        </button>
      </div>
    </section>
  );
};

export default HomeHeroSection;
