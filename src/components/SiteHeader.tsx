import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const SiteHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Prevent body scroll when menu is open and fix page shift
  useEffect(() => {
    if (isMenuOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, [isMenuOpen]);

  // Function to handle navigation and scroll to top
  const handleNavigation = () => {
    setIsMenuOpen(false);
    // Small delay to allow menu to close before scrolling
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      {/* Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
        style={{ backgroundColor: "#577E85" }}
      >
        <div className="flex items-center justify-between px-6 py-4">
          {/* Left side - Logo and site name */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-orange-400 rounded-full relative">
                <div className="absolute inset-1 bg-orange-600 rounded-full"></div>
                <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full"></div>
                <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full"></div>
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-white font-bold text-xl">AboutUS</span>
          </div>

          {/* Right side - Menu toggle */}
          <button 
            onClick={toggleMenu} 
            className="text-white hover:bg-white/20 p-2 rounded transition-colors"
          >
            {isMenuOpen ? (
              <ChevronLeft className="h-6 w-6 transition-transform duration-300" />
            ) : (
              <ChevronRight className="h-6 w-6 transition-transform duration-300" />
            )}
          </button>
        </div>
      </header>

      {/* Side Navigation Menu - Improved smooth animation */}
      <div
        className={`fixed top-0 right-0 h-full w-64 md:w-80 bg-gray-900 z-50 transform transition-all duration-500 ease-out ${
          isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <span className="text-white font-bold text-xl">AboutUS</span>
            <button 
              onClick={toggleMenu} 
              className="text-white hover:bg-white/20 p-2 rounded transition-colors"
            >
              <ChevronRight className="h-6 w-6 transition-transform duration-300" />
            </button>
          </div>

          <nav>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  onClick={handleNavigation}
                  className="block text-white hover:text-orange-200 transition-colors duration-300 py-2 border-b border-white/20"
                >
                  AnaSayfa
                </Link>
              </li>
              <li>
                <Link
                  to="/bilgi"
                  onClick={handleNavigation}
                  className="block text-white hover:text-orange-200 transition-colors duration-300 py-2 border-b border-white/20"
                >
                  Çitalar Hakkında
                </Link>
              </li>
              <li>
                <Link
                  to="/katil"
                  onClick={handleNavigation}
                  className="block text-white hover:text-orange-200 transition-colors duration-300 py-2 border-b border-white/20"
                >
                  Destek
                </Link>
              </li>
              <li>
                <Link
                  to="/hakkimizda"
                  onClick={handleNavigation}
                  className="block text-white hover:text-orange-200 transition-colors duration-300 py-2"
                >
                  Hakkımızda
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Overlay when menu is open - Improved smooth animation */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-500 ease-out" onClick={toggleMenu} />
      )}
    </>
  );
};

export default SiteHeader; 