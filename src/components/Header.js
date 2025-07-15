import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Mail, Clock, Instagram, ChevronLeft, ChevronRight } from 'lucide-react';

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                    src={require('../images/truly-yogurt-logo.jpeg')}
                    alt="Truly Yogurt Logo"
                    className="w-full h-full object-cover"
                />
            </div>
            <span className="text-2xl font-bold text-amber-400">Truly Yogurt</span>
        </div>

        {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-amber-400 transition-colors">Home</button>
            <button onClick={() => scrollToSection('updates')} className="text-gray-700 hover:text-amber-400 transition-colors">News</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-amber-400 transition-colors">About</button>
            <button onClick={() => scrollToSection('menu')} className="text-gray-700 hover:text-amber-400 transition-colors">Menu</button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-amber-400 transition-colors">Gallery</button>
            <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-amber-400 transition-colors">Reviews</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-amber-400 transition-colors">Contact</button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-orange-400 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('hero')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors">About</button>
              <button onClick={() => scrollToSection('menu')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors">Menu</button>
              <button onClick={() => scrollToSection('gallery')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors">Gallery</button>
              <button onClick={() => scrollToSection('reviews')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors">Reviews</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors">Contact</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;