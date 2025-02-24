import { useState } from 'react';
import { Link } from '@remix-run/react';
import { ShoppingCart, Search } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
        
        {/* Logo */}
        <div className="flex flex-1">
          <Link to="/" className="text-xl font-bold">
            <img src="/logo.png" alt="Mach Apparel" className="h-10" />
          </Link>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-lg">
          <Link to="/shop" className="hover:text-gray-600 transition">Shop</Link>
          <Link to="/collections" className="hover:text-gray-600 transition">Collections</Link>
          <Link to="/about" className="hover:text-gray-600 transition">About</Link>
          <div className="relative group">
            <button className="hover:text-gray-600 transition">More</button>
            <div className="absolute left-0 mt-2 w-48 bg-white border shadow-lg hidden group-hover:block">
              <Link to="/blog" className="block px-4 py-2 hover:bg-gray-100">Blog</Link>
              <Link to="/contact" className="block px-4 py-2 hover:bg-gray-100">Contact</Link>
            </div>
          </div>
        </nav>
        
        {/* Icons */}
        <div className="flex items-center space-x-4 w-1/4 justify-end">
          <button className="p-2 hover:text-gray-600">
            <Search size={24} />
          </button>
          <button className="p-2 hover:text-gray-600">
            <ShoppingCart size={24} />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md p-4 flex flex-col space-y-4">
          <Link to="/shop" className="hover:text-gray-600 transition">Shop</Link>
          <Link to="/collections" className="hover:text-gray-600 transition">Collections</Link>
          <Link to="/about" className="hover:text-gray-600 transition">About</Link>
          <Link to="/blog" className="hover:text-gray-600 transition">Blog</Link>
          <Link to="/contact" className="hover:text-gray-600 transition">Contact</Link>
        </div>
      )}
    </header>
  );
}
