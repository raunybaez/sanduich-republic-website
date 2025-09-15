import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import OrderModal from './OrderModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Order Online', href: '/order' },
    { name: 'Location & Contact', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-amber-600">
                Sandüich Republic
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-amber-600 border-b-2 border-amber-600'
                      : 'text-gray-700 hover:text-amber-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Order Now Button */}
            <Button
              onClick={() => setIsOrderModalOpen(true)}
              className="hidden md:block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-2"
            >
              Order Now
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-amber-600 bg-amber-50'
                        : 'text-gray-700 hover:text-amber-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button
                  onClick={() => {
                    setIsOrderModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="mx-3 mt-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold"
                >
                  Order Now
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      <OrderModal 
        isOpen={isOrderModalOpen} 
        onClose={() => setIsOrderModalOpen(false)} 
      />
    </>
  );
};

export default Header;

