import React from "react";
import { motion } from "framer-motion";
import image from "../../img/Site Stats-rafiki.png";
import Link from "next/link";
import Image from "next/image";

function Main() {
  const text =
    "That dont lights. Blessed land spirit creature divide our made twoitself upon youll dominion waters man second good you theyre dividedupon winged were replenish night";
  const pVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
      },
    },
  };
  const spanVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };
  return (
    <div className="text container">
      <div
        className="centere"
        style={{ textAlign: "left", top: "65px", position: "relative" }}
      >
        <p className="first">give a hand</p>
        <motion.h2>to make the better world</motion.h2>
        <motion.p
          className="no"
          variants={pVariants}
          initial="hidden"
          animate="visible"
        >
          {text.split("").map((char, index) => (
            <motion.span key={index} variants={spanVariants}>
              {char}
            </motion.span>
          ))}
        </motion.p>
        <Link
          className="pro-btn animate__animated animate__zoomInLeft"
          href="/Services"
        >
          <span style={{ zIndex: "1000" }}>donate now</span>
        </Link>
        <Link
          className="bad-btn animate__animated animate__zoomInRight"
          href="#"
        >
          see causes
        </Link>
      </div>
      <div>
        <Image src={image} alt="alt" width={450} height={200} />
        {/* <div class="pyramid-loader">
          <div class="wrapper">
            <span class="side side1"></span>
            <span class="side side2"></span>
            <span class="side side3"></span>
            <span class="side side4"></span>
            <span class="shadow"></span>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Main;
