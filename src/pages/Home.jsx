import React, { useState, useRef } from "react";
import useMouse from "@react-hook/mouse-position";
import { motion, AnimatePresence } from "framer-motion";
import { FaShoppingCart, FaHeart, FaRegHeart } from "react-icons/fa";
import img1 from "../assets/img-01.avif";
import img2 from "../assets/img-02.avif";
import img3 from "../assets/img-03.avif";
import "./home.css";
import { useNavigate } from "react-router-dom";
import Filter from "./filter/filter";
// import Navbar from "../components/Navbar";
import NavbarWithDock from "../components/Navbar";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

const Home = () => {
  const navigate = useNavigate();
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
    <div className="" ref={ref}>
      <div>
        <Navbar/>
      </div>
      <div className="mt-4">
        <Banner/>
      </div>
      <div>
        <Filter/>
      </div>
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
     
    </div>
  );
};

export default Home;
