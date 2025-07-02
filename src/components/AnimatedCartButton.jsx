import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedCartButton = () => {
  const [added, setAdded] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    if (disabled) return;

    setAdded(true);
    setDisabled(true);

    // Reset after animation
    setTimeout(() => {
      setAdded(false);
      setDisabled(false);
    }, 2000);
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      aria-label={added ? 'Added to Cart' : 'Add to Cart'}
      className={`relative flex items-center justify-center px-6 py-3 text-white font-semibold rounded-md overflow-hidden transition-all duration-300 
        ${added ? 'bg-gradient-to-r from-[#ED1E79] to-[#662D8C] shadow-[0_0_0_4px_rgba(11,252,3,0.45)]' : 'bg-gradient-to-r from-[#662D8C] to-[#ED1E79] hover:shadow-[0_0_0_4px_rgba(252,186,3,0.45)] hover:-translate-y-1 active:translate-y-1'} 
        ${disabled ? 'cursor-not-allowed opacity-80' : ''}`}
    >

      {/* Background Boxes */}
      <svg
        className={`absolute w-2 h-2 left-6 transition-all duration-500 ease-in-out ${added ? 'top-[18px]' : '-top-2'} rotate-45`}
        viewBox="0 0 24 24"
        fill="#fff"
      >
        <rect width="24" height="24" rx="2" />
      </svg>
      <svg
        className={`absolute w-2 h-2 left-[34px] transition-all duration-500 ease-in-out ${added ? 'top-[18px]' : '-top-2'} rotate-[63deg]`}
        viewBox="0 0 24 24"
        fill="#fff"
      >
        <rect width="24" height="24" rx="2" />
      </svg>

      {/* Cart Icon Animation */}
      <motion.svg
        className="absolute left-4 top-2.5"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={added ? { y: 2 } : { y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
      </motion.svg>

      {/* Tick Animation */}
      <AnimatePresence>
        {added && (
          <motion.svg
            key="tick"
            className="absolute left-7 top-1.5 z-10 bg-green-800 rounded-full"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
          >
            <path
              fill="#ffffff"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 
                 10-4.48 10-10S17.52 2 12 2zM9.29 16.29L5.7 
                 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 
                 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 
                 1.41 0 .39.39.39 1.02 0 1.41l-7.59 
                 7.59c-.38.39-1.02.39-1.41 0z"
            />
          </motion.svg>
        )}
      </AnimatePresence>

      {/* Button Text */}
      <span className={`ml-9 transition-opacity duration-300 ${added ? 'opacity-0' : 'opacity-100'}`}>
        Add to Cart
      </span>
      <span className={`ml-9 absolute transition-opacity duration-300 ${added ? 'opacity-100' : 'opacity-0'}`}>
        Added to Cart
      </span>
    </button>
  );
};

export default AnimatedCartButton;
