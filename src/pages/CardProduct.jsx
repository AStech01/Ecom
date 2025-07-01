import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const CardProduct = ({ product = {}, recommendations = [] }) => {
  
  const {
    title,
    brand,
    price,
    description,
    images = [],
    rating,
    reviews,
    offers = [],
    sizes = [],
    highlights = [],
    specs = {},
    customerReviews = []
  } = product;

 
   

  console.log(product, "ff");
  console.log(recommendations,"f");
  
  

  const [mainImage, setMainImage] = useState(images?.[0] || '');
  const [zoom, setZoom] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });
  const zoomRef = useRef(null);
  const [selectedSize, setSelectedSize] = useState(sizes?.[0] || '');
  const [pincode, setPincode] = useState('');
  const [deliverable, setDeliverable] = useState(null);

  const handleMouseMove = (e) => {
    const rect = zoomRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setZoomPos({ x, y });
  };

  const checkPincode = () => {
    setDeliverable(pincode.length === 6);
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap lg:flex-nowrap items-start">

          {/* Left Side Thumbnails */}
          <div className="hidden lg:flex lg:flex-col lg:w-1/12 space-y-4 mr-4">
            {images.slice(0, 5).map((img, index) => (
              <motion.img
                key={index}
                src={img}
                onClick={() => setMainImage(img)}
                className={`w-16 h-16 object-cover rounded cursor-pointer ${
                  mainImage === img ? 'ring-2 ring-indigo-500' : ''
                }`}
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="lg:w-5/12 w-full mr-6 flex flex-col">
            <div
              ref={zoomRef}
              className="w-full h-96 rounded-lg overflow-hidden cursor-zoom-in relative"
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setZoom(false)}
              onMouseEnter={() => setZoom(true)}
            >
              <img
                src={mainImage}
                alt="product"
                className="w-full h-full object-cover object-center"
                style={{ display: zoom ? 'none' : 'block' }}
              />
              {zoom && (
                <div
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  style={{
                    backgroundImage: `url(${mainImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '200% 200%',
                    backgroundPosition: `${zoomPos.x * 100}% ${zoomPos.y * 100}%`,
                    pointerEvents: 'none',
                  }}
                />
              )}
            </div>

            {/* Thumbnails below on mobile */}
            <div className="flex lg:hidden space-x-4 mt-4 overflow-x-auto px-1">
              {images.slice(0, 5).map((img, index) => (
                <motion.img
                  key={index}
                  src={img}
                  onClick={() => setMainImage(img)}
                  className={`w-16 h-16 object-cover rounded cursor-pointer flex-shrink-0 ${
                    mainImage === img ? 'ring-2 ring-indigo-500' : ''
                  }`}
                  whileHover={{ scale: 1.1 }}
                />
              ))}
            </div>
          </div>

          {/* Right Side Product Details */}
          <motion.div
            className="lg:w-6/12 w-full mt-6 lg:mt-0 space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Title */}
            <div>
              <h1 className="text-gray-900 text-3xl font-semibold">{title}</h1>
              <h2 className="text-sm text-gray-500 uppercase tracking-wide">{brand}</h2>
              <div className="inline-flex items-center mt-2">
                <span className="text-yellow-500 mr-2">⭐{rating}</span>
                <span className="text-sm text-gray-600">({reviews} reviews)</span>
              </div>
            </div>

            {/* Offers */}
            {offers.length > 0 && (
              <div className="bg-green-100 p-4 rounded space-y-1">
                <h3 className="font-semibold">Offers</h3>
                <ul className="list-disc list-inside text-sm">
                  {offers.map((offer, i) => <li key={i}>{offer}</li>)}
                </ul>
              </div>
            )}

            {/* Price and Add to Cart */}
            <div className="flex items-baseline space-x-4">
              <span className="text-3xl text-indigo-600 font-bold">${price}</span>
              <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition">
                Add to Cart
              </button>
            </div>

            {/* Size Selector */}
            {sizes.length > 0 && (
              <div>
                <h3 className="font-semibold mb-2">Select Size</h3>
                <div className="flex space-x-2">
                  {sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded ${selectedSize === size ? 'border-indigo-600 bg-indigo-50' : ''}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            <p className="leading-relaxed text-gray-700">{description}</p>

            {/* Highlights */}
            {highlights.length > 0 && (
              <div>
                <h3 className="font-semibold mb-2">Highlights</h3>
                <ul className="list-disc list-inside text-sm text-gray-700">
                  {highlights.map((hl, i) => <li key={i}>{hl}</li>)}
                </ul>
              </div>
            )}

            {/* Specs */}
            {Object.keys(specs).length > 0 && (
              <div>
                <h3 className="font-semibold mb-2">Specifications</h3>
                <table className="w-full text-sm">
                  <tbody>
                    {Object.entries(specs).map(([key, value]) => (
                      <tr key={key} className="border-t">
                        <td className="py-2 font-medium">{key}</td>
                        <td className="py-2">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Delivery Check */}
            <div className="space-y-2">
              <h3 className="font-semibold">Delivery Information</h3>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Enter Pincode"
                  value={pincode}
                  onChange={e => setPincode(e.target.value)}
                  className="border px-3 py-2 rounded w-40"
                />
                <button
                  onClick={checkPincode}
                  className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                >
                  Check
                </button>
              </div>
              {deliverable !== null && (
                <p className={`text-sm font-medium ${deliverable ? 'text-green-600' : 'text-red-600'}`}>
                  {deliverable
                    ? `✅ Delivery available to ${pincode}`
                    : `❌ Sorry, not deliverable to ${pincode}`}
                </p>
              )}
            </div>

            {/* Recommendations */}
            {recommendations.length > 0 && (
              <div>
                <h3 className="font-semibold mb-2">You may also like</h3>
                <div className="flex space-x-4 overflow-x-auto py-2">
                  {recommendations.map(item => (
                    <div key={item.id} className="w-32 flex-shrink-0">
                      <img
                        src={item.images?.[0] || '../assets/img-03.avif'}
                        alt={item.title}
                        className="w-full h-32 object-cover rounded"
                      />
                      <p className="text-sm font-medium mt-2">{item.title}</p>
                      <p className="text-indigo-600">${item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Customer Reviews */}
            <div>
              <h3 className="font-semibold mb-4">Customer Reviews</h3>
              {customerReviews.length > 0 ? (
                customerReviews.map((rev, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="border-t pt-4"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold">{rev.name}</span>
                      <span className="text-yellow-500">⭐{rev.rating}</span>
                    </div>
                    <p className="text-sm text-gray-700 mt-1">{rev.comment}</p>
                  </motion.div>
                ))
              ) : (
                <p className="text-sm text-gray-500">No reviews yet.</p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CardProduct;
