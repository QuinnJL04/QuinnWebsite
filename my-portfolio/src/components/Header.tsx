// src/components/Header.tsx
'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-warm-brown">
            Quinn
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-dark-slate hover:text-warm-brown transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-dark-slate hover:text-warm-brown transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-dark-slate hover:text-warm-brown transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-dark-slate hover:text-warm-brown transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button 
              onClick={() => scrollToSection('about')}
              className="block text-dark-slate hover:text-warm-brown"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="block text-dark-slate hover:text-warm-brown"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="block text-dark-slate hover:text-warm-brown"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block text-dark-slate hover:text-warm-brown"
            >
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}