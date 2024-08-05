import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch, FaHeart, FaBars, FaTimes } from 'react-icons/fa';
import ShoppingCart from './ShoppingCart';
import CartModal from './CartModal'; // Ensure this component is created

const Header = () => {
  const location = useLocation();
  const [showCartModal, setShowCartModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCartIconClick = () => {
    setShowCartModal(true);
  };

  const handleCloseModal = () => {
    setShowCartModal(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white shadow-md p-4 sm:p-6 md:p-8 text-gray-800 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center justify-between w-full md:w-auto">
          <h1 className="text-2xl md:text-3xl font-semibold">Mayur&apos;s Store</h1>
          <button 
            className="block md:hidden text-gray-800 focus:outline-none" 
            onClick={toggleMenu}
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <nav className={`flex flex-col md:flex-row md:items-center w-full md:w-auto ${menuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 mb-4 md:mb-0">
            <li className={`relative group ${location.pathname === '/' ? 'text-blue-600' : ''}`}>
              <Link 
                to="/" 
                className={`text-lg font-medium ${location.pathname === '/' ? 'text-blue-600' : 'hover:text-gray-600'}`}
              >
                Home
              </Link>
              <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transition-transform ${location.pathname === '/' ? 'scale-x-100' : 'scale-x-0'}`}></span>
            </li>
            <li className={`relative group ${location.pathname === '/about' ? 'text-blue-600' : ''}`}>
              <Link 
                to="/about" 
                className={`text-lg font-medium ${location.pathname === '/about' ? 'text-blue-600' : 'hover:text-gray-600'}`}
              >
                About
              </Link>
              <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transition-transform ${location.pathname === '/about' ? 'scale-x-100' : 'scale-x-0'}`}></span>
            </li>
            <li className={`relative group ${location.pathname === '/contact' ? 'text-blue-600' : ''}`}>
              <Link 
                to="/contact" 
                className={`text-lg font-medium ${location.pathname === '/contact' ? 'text-blue-600' : 'hover:text-gray-600'}`}
              >
                Contact
              </Link>
              <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transition-transform ${location.pathname === '/contact' ? 'scale-x-100' : 'scale-x-0'}`}></span>
            </li>
            <li className={`relative group ${location.pathname === '/signup' ? 'text-blue-600' : ''}`}>
              <Link 
                to="/signup" 
                className={`text-lg font-medium ${location.pathname === '/signup' ? 'text-blue-600' : 'hover:text-gray-600'}`}
              >
                Signup
              </Link>
              <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transition-transform ${location.pathname === '/signup' ? 'scale-x-100' : 'scale-x-0'}`}></span>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4 md:space-x-6">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="p-2 pr-10 rounded-md border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <FaHeart className="text-gray-800 text-lg md:text-xl cursor-pointer" />
          <div className='relative mt-2'>
            <ShoppingCart onClick={handleCartIconClick} />
          </div>
        </div>
      </div>
      {showCartModal && <CartModal onClose={handleCloseModal} />}
    </header>
  );
}

export default Header;
