import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Mail, Clock, Instagram, ChevronLeft, ChevronRight } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

return (
    <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Brand */}
                <div>
                    <div className="flex items-center space-x-3 mb-4">
                        
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-lg flex items-center justify-center overflow-hidden">
                            <img
                                    src={require('../images/truly-yogurt-logo.jpeg')}
                                    alt="Truly Yogurt Logo"
                                    className="w-full h-full object-cover"
                            />
                    </div>
                        <span className="text-xl font-bold text-amber-400">Truly Yogurt</span>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                        It's Truly Delicious!
                        <br></br>
                        Located in the heart of New Brunswick and 5 minute walk from The Yard!
                    </p>
                </div>
                
                {/* Navigation */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><button onClick={() => scrollToSection('hero')} className="text-gray-400 hover:text-amber-400 transition-colors">Home</button></li>
                        <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-amber-400 transition-colors">About</button></li>
                        <li><button onClick={() => scrollToSection('menu')} className="text-gray-400 hover:text-amber-400 transition-colors">Menu</button></li>
                        <li><button onClick={() => scrollToSection('gallery')} className="text-gray-400 hover:text-amber-400 transition-colors">Gallery</button></li>
                        <li><button onClick={() => scrollToSection('reviews')} className="text-gray-400 hover:text-amber-400 transition-colors">Reviews</button></li>
                        <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-amber-400 transition-colors">Contact</button></li>
                    </ul>
                </div>
                
                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="https://www.instagram.com/trulyyogurtnb?igsh=MTR4amtqNWp4cGhmcQ==" target="_blank" className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full hover:opacity-80 transition-opacity">
                            <Instagram size={24} />
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                <p className="text-gray-400">
                    © 2025 Truly Yogurt. All rights reserved.
                    <br></br>
                    <a href="https://www.linkedin.com/in/adil-w-khan" target="_blank" className="underline font-bold">Created by Adil Khan</a>
                </p>
            </div>
        </div>
    </footer>
);
};

export default Footer;