import { useState } from 'react';
import icon from '../assets/icon.svg';
import { Link } from 'react-router-dom';
import WhatsPng from '../assets/whatsapp.png';
export default function NavigationSection() {
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
        <div className="hidden sm:flex gap-8 ml-auto items-center">
          <Link to="/" className="text-gray-700 hover:text-gray-900 transition-colors">
            Início
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-gray-900 transition-colors">
            Sobre
          </Link>
          <Link to="/services" className="text-gray-700 hover:text-gray-900 transition-colors">
            Serviços
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-gray-900 transition-colors">
            Contato
          </Link>
          <div className="flex justify-center gap-6">
            <a
              href="http://wa.me/5541996494391"
              target="_blank"
              rel="noopener noreferrer"
              className='flex items-center gap-2'>
              <img src={WhatsPng} alt="(41) 99649-4391" className="h-6 w-6" />
              <p className="text-gray-700 underline text-sm ml-1">(41) 99649-4391</p>
            </a>
          </div>
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
            <Link
              to="/"
              className="block text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Início
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Sobre
            </Link>
            <Link
              to="/services"
              className="block text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Serviços
            </Link>
            <Link
              to="/contact"
              className="block text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contato
            </Link>
             <div className="flex px-3 py-2 gap-6">
            <a
              href="http://wa.me/5541996494391"
              target="_blank"
              rel="noopener noreferrer"
              className='flex items-center gap-2'>
              <img src={WhatsPng} alt="(41) 99649-4391" className="h-6 w-6" />
              <p className="text-gray-700 underline text-sm ml-1">(41) 99649-4391</p>
            </a>
          </div>
          </div>
        </div>
      )}
    </nav>
  );
}
