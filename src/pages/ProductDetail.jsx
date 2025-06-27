import React from 'react';
import CardProduct from './CardProduct'; // adjust the import path

const ProductDetail = () => {
  const product = {
    id: 1,
    title: 'Smart Watch Series 7',
    brand: 'TechWear',
    price: 249.99,
    description: 'A stylish smartwatch with fitness tracking and notifications.',
    images: [
      '../assets/img-02.avif',
      '../assets/img-02.avif',
      '../assets/img-04.avif'
    ],
    rating: 4.5,
    reviews: 120,
    offers: ['10% off with code TECH10', 'Free shipping for orders over $50'],
    sizes: ['M', 'L', 'XL'],
    highlights: ['Heart Rate Monitor', 'Water Resistant', 'Bluetooth 5.0'],
    specs: {
      'Battery Life': 'Up to 18 hours',
      'Connectivity': 'Bluetooth, Wi-Fi',
      'Compatibility': 'iOS & Android'
    },
    customerReviews: [
      { name: 'John D.', rating: 5, comment: 'Love the features and battery!' },
      { name: 'Jane R.', rating: 4, comment: 'Great value for money.' }
    ]
  };

  const recommendations = [
    {
      id: 2,
      title: 'Fitness Tracker Band',
      price: 59.99,
      images: ['../assets/img-04.avif']
    },
    {
      id: 3,
      title: 'Wireless Earbuds',
      price: 79.99,
      images: ['../assets/img-03.avif']
    }
  ];

  return <CardProduct product={product} recommendations={recommendations} />;
};

export default ProductDetail;
