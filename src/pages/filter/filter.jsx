// import React, { useState } from 'react';
// import { FaSearch, FaShoppingCart, FaHeart, FaRegHeart } from 'react-icons/fa';
// import clsx from 'clsx';
// import { useNavigate } from 'react-router-dom';
// import img1 from '../../assets/img-01.avif';
// import img2 from '../../assets/img-02.avif';
// import img3 from '../../assets/img-03.avif';
// import { motion } from 'framer-motion';

// const itemsData = [
//   { id: 1, name: "sweet item", category: "sweets", price: 59.99, img: img1 },
//   { id: 2, name: "cupcake item", category: "cupcakes", price: 49.99, img: img2 },
//   { id: 3, name: "cake item", category: "cakes", price: 89.99, img: img3 },
//   { id: 4, name: "doughnut item", category: "doughnuts", price: 29.99, img: img1 },
// ];

// const categories = ["all", "cakes", "cupcakes", "sweets", "doughnuts"];

// const Filter = () => {
//   const [filter, setFilter] = useState("all");
//   const [search, setSearch] = useState("");
//   const [liked, setLiked] = useState(null);
//   const navigate = useNavigate();

//   const filteredItems = itemsData.filter(
//     (item) =>
//       (filter === "all" || item.category === filter) &&
//       item.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 font-sans">
//       <h1 className="text-3xl font-bold text-center mb-8">Filter Store</h1>

//       {/* Filter Buttons */}
//       <div className="flex flex-wrap justify-center gap-3 mb-6">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setFilter(cat)}
//             className={clsx(
//               "px-4 py-1 border text-sm uppercase rounded",
//               filter === cat
//                 ? "bg-black text-pink-500"
//                 : "hover:bg-black hover:text-pink-500"
//             )}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Search */}
//       <div className="flex justify-center mb-8">
//         <div className="flex border rounded overflow-hidden w-full max-w-md">
//           <span className="bg-pink-500 px-3 flex items-center text-white">
//             <FaSearch />
//           </span>
//           <input
//             type="text"
//             placeholder="Search items..."
//             className="px-3 py-2 w-full focus:outline-none"
//             onChange={(e) => setSearch(e.target.value)}
//           />
//         </div>
//       </div>

//       {/* Product Cards Centered */}
//       <div className="flex justify-center">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl">
//           {filteredItems.map((item) => (
//             <div
//               key={item.id}
//               className="card-01 w-72 h-[500px] bg-white shadow-xl rounded-xl cursor-pointer flex flex-col p-6 relative overflow-hidden transition-transform duration-300"
//               onClick={() => navigate("/productdetail")}
//             >
//               <motion.div
//                 className="absolute top-4 right-1 text-lg cursor-pointer select-none"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   setLiked(liked === item.id ? null : item.id);
//                 }}
//                 whileTap={{ scale: 1.4 }}
//                 animate={{
//                   scale: liked === item.id ? 1.2 : 1,
//                   color: liked === item.id ? "#e63946" : "#aaa",
//                 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 8 }}
//               >
//                 {liked === item.id ? <FaHeart /> : <FaRegHeart />}
//               </motion.div>

//               <img
//                 src={item.img}
//                 alt={item.name}
//                 className="w-full h-48 object-cover rounded-lg mb-5"
//               />

//               <h2 className="font-bold text-xl text-gray-900 mb-2 select-none">
//                 {item.name}
//               </h2>
//               <p className="text-gray-600 text-sm mb-4 select-none">
//                 Stylish and comfortable {item.category} perfect for all-day.
//               </p>

//               <div className="flex items-center mb-4 select-none">
//                 {[...Array(5)].map((_, i) => (
//                   <span key={i} className={`text-yellow-400 ${i < 4 ? "" : "text-gray-300"}`}>
//                     ★
//                   </span>
//                 ))}
//                 <span className="ml-2 text-sm text-gray-500">(234 reviews)</span>
//               </div>

//               <div className="flex items-center gap-3 mb-6 select-none">
//                 <span className="text-2xl font-bold text-blue-700">
//                   ${item.price.toFixed(2)}
//                 </span>
//                 <span className="line-through text-gray-400">
//                   ${(item.price * 1.5).toFixed(2)}
//                 </span>
//                 <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">
//                   33% OFF
//                 </span>
//               </div>

//               <button
//                 className="mt-auto px-6 py-3 bg-cyan-300 text-white font-semibold rounded-lg flex items-center justify-center gap-3 hover:bg-blue-700 shadow-lg shadow-blue-600/50 overflow-hidden"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <FaShoppingCart />
//                 <span>Add to Cart</span>
//               </button>
//             </div>
//           ))}
//           {filteredItems.length === 0 && (
//             <p className="col-span-full text-center text-gray-500">
//               No items found.
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Filter;


// Filter.jsx
import React, { useState } from 'react';
import { FaShoppingCart, FaHeart, FaRegHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import FilterSidebar from '../../components/FilterSidebar';
import img1 from '../../assets/img-01.avif';
import img2 from '../../assets/img-02.avif';
import img3 from '../../assets/img-03.avif';

const itemsData = [
  { id: 1, name: "sweet item", category: "Sweets", price: 59.99, img: img1 },
  { id: 2, name: "cupcake item", category: "Cupcakes", price: 49.99, img: img2 },
  { id: 3, name: "cake item", category: "Cakes", price: 89.99, img: img3 },
  { id: 4, name: "doughnut item", category: "Doughnuts", price: 29.99, img: img1 },
];

const Filter = () => {
  const [filters, setFilters] = useState({});
  const navigate = useNavigate();

  const filteredItems = itemsData.filter((item) => {
    const categoryMatch =
      !filters.Category || filters.Category.length === 0 ||
      filters.Category.includes(item.category);
    return categoryMatch;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans flex gap-6">
      {/* Sidebar */}
      <FilterSidebar filters={filters} setFilters={setFilters} />

      {/* Product Grid */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-center mb-8">Filtered Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="w-72 h-[500px] bg-white shadow-xl rounded-xl cursor-pointer flex flex-col p-6 relative overflow-hidden transition-transform duration-300"
              onClick={() => navigate('/productdetail')}
            >
              <motion.div
                className="absolute top-4 right-1 text-lg cursor-pointer select-none"
                onClick={(e) => {
                  e.stopPropagation();
                }}
                whileTap={{ scale: 1.4 }}
                animate={{ scale: 1, color: '#aaa' }}
                transition={{ type: 'spring', stiffness: 300, damping: 8 }}
              >
                <FaRegHeart />
              </motion.div>

              <img
                src={item.img}
                alt={item.name}
                className="w-full h-48 object-cover rounded-lg mb-5"
              />

              <h2 className="font-bold text-xl text-gray-900 mb-2 select-none">
                {item.name}
              </h2>
              <p className="text-gray-600 text-sm mb-4 select-none">
                Stylish and comfortable {item.category} perfect for all-day.
              </p>

              <div className="flex items-center mb-4 select-none">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-yellow-400 ${i < 4 ? '' : 'text-gray-300'}`}>
                    ★
                  </span>
                ))}
                <span className="ml-2 text-sm text-gray-500">(234 reviews)</span>
              </div>

              <div className="flex items-center gap-3 mb-6 select-none">
                <span className="text-2xl font-bold text-blue-700">
                  ${item.price.toFixed(2)}
                </span>
                <span className="line-through text-gray-400">
                  ${(item.price * 1.5).toFixed(2)}
                </span>
                <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">
                  33% OFF
                </span>
              </div>

              <button
                className="mt-auto px-6 py-3 bg-cyan-300 text-white font-semibold rounded-lg flex items-center justify-center gap-3 hover:bg-blue-700 shadow-lg shadow-blue-600/50 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <FaShoppingCart />
                <span>Add to Cart</span>
              </button>
            </div>
          ))}
          {filteredItems.length === 0 && (
            <p className="col-span-full text-center text-gray-500">
              No items found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;