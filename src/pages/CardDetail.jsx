import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const data = [
  { 
    title: 'Boots', 
    items: ['One', 'Two', 'Three'] 
  },
  { 
    title: 'Phone', 
    items: ['Apple', 'Samsung', 'Nokia'] 
  },
  { 
    title: 'Wash', 
    items: ['Detergent', 'Fabric Softener'] 
    },
    { 
        title: 'Boots', 
        items: ['One', 'Two', 'Three'] 
    },
    { 
        title: 'Boots', 
        items: ['One', 'Two', 'Three'] 
    },
    { 
        title: 'Boots', 
        items: ['One', 'Two', 'Three'] 
    },
    { 
        title: 'Boots', 
        items: ['One', 'Two', 'Three'] 
    },
    { 
        title: 'Boots', 
        items: ['One', 'Two', 'Three'] 
      },
];

const dropdownVariants = {
  hidden: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  visible: { opacity: 1, height: 'auto', transition: { duration: 0.4 } },
};

const CardDetail = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ width: 700, margin: '50px auto', fontFamily: 'Arial, sans-serif',display:'flex', gap:'10px' }}>
      {data.map((category, index) => (
        <div key={index} style={{ marginBottom: 10 }}>
          <div
            onClick={() => toggleDropdown(index)}
            style={{
              background: '#4f46e5',
              color: '#fff',
              padding: '12px 16px',
              borderRadius: 6,
              cursor: 'pointer',
                display: 'flex',
             
              justifyContent: 'space-between',
              alignItems: 'center',
              fontWeight: 500,
            }}
          >
            {category.title}
            <span>{openIndex === index ? '▲' : '▼'}</span>
          </div>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                style={{
                  background: '#f3f4f6',
                  borderRadius: 6,
                  overflow: 'hidden',
                }}
              >
                {category.items.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '10px 16px',
                      borderBottom: i !== category.items.length - 1 ? '1px solid #e5e7eb' : 'none',
                      cursor: 'pointer',
                      transition: 'background 0.2s',
                    }}
                    onClick={() => alert(`${item} clicked`)}
                  >
                    {item}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default CardDetail;
