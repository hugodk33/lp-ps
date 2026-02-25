import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '../../../assets/logo-horizontal-panamericana.png';

/**
 * Header Component - Fixed Navigation
 * Design: Corporative Modern with Trust
 * - Sticky positioning for constant access
 * - Logo + navigation menu
 * - Mobile-responsive hamburger menu
 * - Primary CTA button
 */

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Simulação', href: '#simulacao' },
    { label: 'Institucional', href: '#institucional' },
    { label: 'Categorias', href: '#categorias' },
    { label: 'Parceiros', href: '#parceiros' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Panamericana logo" className="h-14 md:h-10 object-contain" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-neutral-dark hover:text-primary font-medium transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-secondary hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() => window.location.href = '#simulacao'}
            >
              Simular Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-3 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-neutral-dark hover:text-primary font-medium px-4 py-2 rounded-lg hover:bg-muted transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                className="bg-secondary hover:bg-orange-600 text-white font-semibold mx-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-auto"
                onClick={() => {
                  window.location.href = '#simulacao';
                  setIsMenuOpen(false);
                }}
              >
                Simular Agora
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
