import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Bell, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { VscFeedback } from "react-icons/vsc";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    const storedUser = localStorage.getItem('token');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setShowDropdown(false);
    navigate('/login');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg backdrop-blur-md' : 'bg-white/95'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">JK</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-gray-900">JanKalyaan</h1>
              <span className="text-xs text-gray-500">Government of India</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
            <a href="#schemes" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Schemes</a>
            <a href="#categories" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Categories</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/saved" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
              Saved Schemes
            </Link>


            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                >
                  <User size={16} />
                  <span>{user.name.split(' ')[0]}</span>
                </button>
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-64 bg-white text-black rounded-lg shadow-lg p-4 z-50">
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-sm text-gray-600">{user.email}</p>
                    <hr className="my-2" />
                    <button
                      onClick={handleLogout}
                      className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to='/login'>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                  <User size={16} />
                  <span>Login</span>
                </button>
              </Link>
            )}
            <Link to='/feedback'>
            <button className='bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2'>
              <VscFeedback />
            </button>
            </Link>
          </div>
          

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-blue-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t">
            <nav className="flex flex-col space-y-1 p-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 py-2 font-medium">Home</a>
              <a href="#schemes" className="text-gray-700 hover:text-blue-600 py-2 font-medium">Schemes</a>
              <a href="#categories" className="text-gray-700 hover:text-blue-600 py-2 font-medium">Categories</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 py-2 font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 py-2 font-medium">Contact</a>



              <div className="pt-4 border-t flex space-x-2">
                {user ? (
                  <button
                    onClick={handleLogout}
                    className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors"
                  >
                    Logout
                  </button>
                ) : (
                  <Link to="/login" className="flex-1">
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Login
                    </button>
                  </Link>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
