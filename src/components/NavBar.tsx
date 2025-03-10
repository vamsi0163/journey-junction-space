
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="page-container">
        <nav className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-xl font-medium tracking-tight cursor-pointer"
          >
            <span className="sr-only">Home</span>
            YourName.
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-black mb-1.5 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-black mb-1.5 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-black transition-all ${isMenuOpen ? '-rotate-45' : ''}`}></div>
          </button>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">About</a>
            <a href="#projects" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Projects</a>
            <a href="#skills" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Skills</a>
            <a href="#contact" className="text-sm button-primary">Contact</a>
          </div>
          
          {/* Mobile menu */}
          <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}>
            <a 
              href="#about" 
              className="text-2xl font-medium" 
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-2xl font-medium" 
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className="text-2xl font-medium" 
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a 
              href="#contact" 
              className="text-2xl font-medium" 
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
