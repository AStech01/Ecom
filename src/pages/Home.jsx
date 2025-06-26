import React, { useState, useRef } from "react";
import useMouse from "@react-hook/mouse-position";
import { motion, AnimatePresence } from "framer-motion";
import { FaShoppingCart, FaHeart, FaRegHeart } from "react-icons/fa";
import img1 from "../assets/img-01.avif";
import img2 from "../assets/img-02.avif";
import img3 from "../assets/img-03.avif";
import "./home.css";

const Home = () => {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [liked, setLiked] = useState(false);
const [cartClicked, setCartClicked] = useState(false);

  const ref = useRef(null);
  const cardRef = useRef(null);

  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  const mouseXPosition = mouse.clientX || 0;
  const mouseYPosition = mouse.clientY || 0;

  const variants = {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: "16px",
      backgroundColor: "#1e91d6",
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    contact: {
      opacity: 1,
      backgroundColor: "#FFBCBC",
      color: "#000",
      height: 24,
      width: 24,
      fontSize: "10px",
      x: mouseXPosition - 24,
      y: mouseYPosition - 24,
    },
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  const images = [img1, img2, img3];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  // 3D Tilt effect
  let animationFrameId = null;

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const dx = (event.clientX - rect.left) / rect.width - 0.5;
    const dy = (event.clientY - rect.top) / rect.height - 0.5;

    const rotateX = Math.max(Math.min(-(dy * 12), 10), -10);
    const rotateY = Math.max(Math.min(dx * 12, 10), -10);

    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    animationFrameId = requestAnimationFrame(() => {
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  };

  const resetTransform = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    }
  };

  const setImageByIndex = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <div className="container" ref={ref}>
      {/* Custom Animated Cursor */}
      <motion.div
        className="circle"
        variants={variants}
        animate={cursorVariant}
        transition={spring}
      >
        <span className="cursorText">{cursorText}</span>
      </motion.div>

      {/* Product Card */}
      <div
        className="card-01 w-72 h-[500px] bg-white ml-10 my-10 shadow-xl rounded-xl cursor-pointer flex flex-col p-6 relative overflow-hidden transition-transform duration-300"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTransform}
      >
        {/* Animated Like (Heart) Button */}
        <motion.div
          className="absolute top-4 right-1 text-lg cursor-pointer select-none"
          onClick={() => setLiked(!liked)}
          whileTap={{ scale: 1.4 }}
          animate={{
            scale: liked ? 1.2 : 1,
            color: liked ? "#e63946" : "#aaa",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 8 }}
        >
          {liked ? <FaHeart  /> : <FaRegHeart />}
        </motion.div>

        {/* Carousel */}
        <div className="rounded-lg overflow-hidden h-48 mb-5 relative">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt="product"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Dots */}
          <div className="absolute bottom-3 right-3 flex gap-2">
            {images.map((_, index) => (
              <span
                key={index}
                onClick={() => setImageByIndex(index)}
                className={`w-3 h-3 rounded-full border border-blue-600 cursor-pointer transition-colors ${
                  index === currentIndex ? "bg-blue-600" : "bg-white"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <h2 className="font-bold text-xl text-gray-900 mb-2 select-none">
          Super Comfy Sneakers
        </h2>
        <p className="text-gray-600 text-sm mb-4 select-none">
          Stylish and comfortable sneakers perfect for all-day wear.
        </p>

        {/* Rating */}
        <div className="flex items-center mb-4 select-none">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`text-yellow-400 ${i < 4 ? "" : "text-gray-300"}`}>
              ★
            </span>
          ))}
          <span className="ml-2 text-sm text-gray-500">(234 reviews)</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3 mb-6 select-none">
          <span className="text-2xl font-bold text-blue-700">$59.99</span>
          <span className="line-through text-gray-400">$89.99</span>
          <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">
            33% OFF
          </span>
        </div>

        {/* Add to Cart Button */}
        <motion.button
  className="mt-auto px-6 py-3 bg-cyan-300 text-white font-semibold rounded-lg flex items-center justify-center gap-3 hover:bg-blue-700 shadow-lg shadow-blue-600/50 overflow-hidden"
  initial={{ y: 0, boxShadow: "0px 6px 0px #1e3a8a" }}
  animate={{
    y: isHovered ? -4 : 0,
    boxShadow: isHovered
      ? "0px 6px 6px rgba(30, 58, 138, 0.7)"
      : "0px 6px 0px #1e3a8a",
  }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  onClick={() => {
    setCartClicked(true);
    setTimeout(() => setCartClicked(false), 600); // Reset after animation
  }}
>
  <motion.span
    className="text-xl"
    animate={cartClicked ? { x: 80, opacity: 0 } : { x: 0, opacity: 1 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    key={cartClicked ? "moving" : "static"}
  >
    <FaShoppingCart />
  </motion.span>
  <span>Add to Cart</span>
</motion.button>
      </div>
    </div>
  );
};

export default Home;
