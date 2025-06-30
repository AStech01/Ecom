import img01 from '../assets/img-01.avif';
import img02 from '../assets/img-02.avif';
import img03 from '../assets/img-03.avif';
import img04 from '../assets/img-04.avif';
import img05 from '../assets/img-05.avif';
import img08 from '../assets/img-08.avif';

const sampleProduct = {
  id: 1,
  title: 'Smart Watch Series 7',
  brand: 'TechWear',
  price: 249.99,
  description: 'A stylish smartwatch with fitness tracking and notifications.',
  images: [img01, img02, img03, img04, img05, img08],
  rating: 4,
  reviews: 127,
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




export default sampleProduct;

