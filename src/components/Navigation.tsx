import { useState } from 'react';
import icon from '../assets/icon.svg';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 w-full">
      <div className="flex justify-between items-center py-5 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <img src={icon} alt="Pinturas Lima" className="h-10 w-10" />
          <span className="font-bold text-xl text-gray-900">
            Pinturas Lima
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex gap-8 ml-auto">
          <a href="#home" className="text-gray-700 hover:text-gray-900 transition-colors">
            Início
          </a>
          <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">
            Sobre
          </a>
          <a href="#services" className="text-gray-700 hover:text-gray-900 transition-colors">
            Serviços
          </a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">
            Contato
          </a>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden ml-auto flex flex-col gap-1.5"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-900 transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-900 transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-900 transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="sm:hidden bg-gray-50 border-t border-gray-200">
          <div className="px-4 py-3 space-y-2">
            <a
              href="#home"
              className="block text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Início
            </a>
            <a
              href="#about"
              className="block text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Sobre
            </a>
            <a
              href="#services"
              className="block text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Serviços
            </a>
            <a
              href="#contact"
              className="block text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contato
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
