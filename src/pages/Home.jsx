
import React, { useState, useRef } from "react";
import useMouse from "@react-hook/mouse-position";
import { motion } from "framer-motion";
import './home.css';

const Home = () => {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const ref = useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition = mouse.clientX || 0;
  let mouseYPosition = mouse.clientY || 0;

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
    project: {
      opacity: 1,
      backgroundColor: "#fff",
      color: "#000",
      height: 80,
      width: 80,
      fontSize: "18px",
      x: mouseXPosition - 32,
      y: mouseYPosition - 32,
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

  const projectEnter = () => {
    setCursorText("View");
    setCursorVariant("project");
  };

  const projectLeave = () => {
    setCursorText("");
    setCursorVariant("default");
  };

  const contactEnter = () => {
    setCursorText("🛒");
    setCursorVariant("contact");
  };

  const contactLeave = () => {
    setCursorText("");
    setCursorVariant("default");
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

      {/* Tailwind Styled Card with Interaction */}
      <div
  className="card-01  w-72 h-88 bg-teal-200 ml-10 my-10 shadow-lg shadow-teal-500/50 rounded-md cursor-pointer flex flex-col justify-between p-4"

              variants={variants}
              animate={cursorVariant}
              transition={spring}
>
  <span className="text-center">Project Card</span>

              <button className="border-2 px-4 py-2 rounded mx-auto mb-2 cursor-pointer"
                onMouseEnter={contactEnter}
                onMouseLeave={contactLeave}>
    Hello
  </button>
</div>


      {/* <div
        className="contact w-72 bg-red-200 rounded-md p-6 ml-10"
        onMouseEnter={contactEnter}
        onMouseLeave={contactLeave}
      >
        Want to Chat?
      </div> */}
    </div>
  );
};

export default Home;
