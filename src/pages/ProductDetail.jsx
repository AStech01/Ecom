import React from 'react';
import CardProduct from './CardProduct';
import img01 from '../assets/img-01.avif';
import img02 from '../assets/img-02.avif';
import img03 from '../assets/img-03.avif';
import img04 from '../assets/img-04.avif';
import img05 from '../assets/img-05.avif';
import img08 from '../assets/img-08.avif';
import sampleProduct from '../data/sampleProduct';
import samp from '../data/samp';

const ProductDetail = () => {
  return <CardProduct product={sampleProduct} recommendations={samp} />

};

export default ProductDetail;
