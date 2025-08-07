import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md  top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          MyLogo
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/TaskTraker" className="text-gray-700 hover:text-blue-600">Task Traker</Link>
          <Link to="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact Us</Link>
          <Link to="/api" className="text-gray-700 hover:text-blue-600">Github API</Link>
          <div className="ml-4 flex gap-2">
            <button className="px-4 py-1 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50">Login</button>
            <button className="px-4 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700">Sign Up</button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <a href="#home" className="block text-gray-700 hover:text-blue-600">Home</a>
          <a href="#about" className="block text-gray-700 hover:text-blue-600">About Us</a>
          <a href="#blog" className="block text-gray-700 hover:text-blue-600">Blog</a>
          <a href="#contact" className="block text-gray-700 hover:text-blue-600">Contact Us</a>
          <div className="flex gap-2 mt-2">
            <button className="flex-1 px-4 py-1 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50">Login</button>
            <button className="flex-1 px-4 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700">Sign Up</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
