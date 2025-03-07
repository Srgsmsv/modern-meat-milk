
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-10",
        isScrolled ? "py-3 bg-white/90 backdrop-blur-md shadow-md" : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-red to-brand-gold">
            FoodTech
          </span>
          <span className="hidden md:inline-block text-sm font-medium">Additives</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {["Home", "About", "Products", "Benefits", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="relative text-gray-800 font-medium hover:text-brand-red transition-colors duration-300 py-2"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <div className="relative w-6 h-5">
            <span className={cn(
              "absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out",
              isMobileMenuOpen ? "rotate-45 translate-y-2.5" : "translate-y-0"
            )}></span>
            <span className={cn(
              "absolute h-0.5 w-6 bg-current transform transition-opacity duration-300 ease-in-out translate-y-2",
              isMobileMenuOpen ? "opacity-0" : "opacity-100"
            )}></span>
            <span className={cn(
              "absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out",
              isMobileMenuOpen ? "-rotate-45 translate-y-2.5" : "translate-y-4"
            )}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100"
        >
          <div className="flex flex-col py-4">
            {["Home", "About", "Products", "Benefits", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="px-6 py-3 text-gray-800 hover:bg-gray-50 hover:text-brand-red transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
