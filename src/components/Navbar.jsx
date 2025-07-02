import React, { useState } from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(prev => !prev);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full bg-white shadow-md px-6 py-4 z-50 relative"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Left: Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-extrabold text-teal-600 cursor-pointer"
        >
          MyShop
        </motion.div>

        {/* Center: Search (Absolute center aligned) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border rounded-full px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300"
            />
            <FaSearch className="absolute top-3 left-3 text-gray-500" />
          </div>
        </div>

        {/* Right: More & Cart */}
        <div className="flex items-center gap-6">
          {/* More Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-1 text-gray-700 hover:text-teal-600 font-medium focus:outline-none transition-all duration-200"
            >
              More <IoIosArrowDown className={`transform transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-44 bg-white border rounded-xl shadow-xl z-50 overflow-hidden"
                >
                  <li className="px-4 py-3 hover:bg-teal-100 cursor-pointer transition-colors duration-150">Download</li>
                  <li className="px-4 py-3 hover:bg-teal-100 cursor-pointer transition-colors duration-150">Cart</li>
                  <li className="px-4 py-3 hover:bg-teal-100 cursor-pointer transition-colors duration-150">Wishlist</li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          {/* Cart Icon */}
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="text-gray-700 hover:text-teal-600 relative"
          >
            <FaShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1.5">
              2
            </span>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
