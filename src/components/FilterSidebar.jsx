import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoIosArrowDown } from 'react-icons/io';

const FilterSection = ({ title, children }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="mb-4">
      <button
        className="flex items-center justify-between w-full font-semibold text-gray-700 mb-2"
        onClick={() => setOpen(!open)}
      >
        {title}
        <IoIosArrowDown
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        {children}
      </motion.div>
    </div>
  );
};

const FilterSidebar = ({ filters, setFilters }) => {
  const handleCheckboxChange = (section, value) => {
    const sectionValues = filters[section] || [];
    const updated = sectionValues.includes(value)
      ? sectionValues.filter((v) => v !== value)
      : [...sectionValues, value];

    setFilters({ ...filters, [section]: updated });
  };

  const sections = {
    Category: ['Cakes', 'Cupcakes', 'Sweets', 'Doughnuts'],
    Brand: ['Nestle', 'Sweetify', 'CakeZone'],
    Discount: ['10%', '25%', '50%+'],
    Price: ['Under $50', '$50-$100', '$100+'],
    'Primary Camera': ['8MP', '12MP', '16MP+'],
    'Secondary Camera': ['5MP', '8MP', '12MP+'],
    'Screen Size': ['<5"', '5-6"', '6"+'],
    'Battery Capacity': ['2000mAh', '3000mAh', '4000mAh+'],
    'Internal Storage': ['32GB', '64GB', '128GB'],
    Processor: ['Snapdragon', 'MediaTek', 'Apple A-series'],
    Resolution: ['HD', 'Full HD', '4K'],
  };

  return (
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-72 bg-white shadow-lg p-4 rounded-md h-fit sticky top-6"
    >
      <h2 className="text-xl font-bold mb-6 text-teal-600">Filter By</h2>

      {Object.entries(sections).map(([section, options]) => (
        <FilterSection key={section} title={section}>
          {options.map((option) => (
            <label key={option} className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
              <input
                type="checkbox"
                checked={filters[section]?.includes(option) || false}
                onChange={() => handleCheckboxChange(section, option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </FilterSection>
      ))}
    </motion.div>
  );
};

export default FilterSidebar;
