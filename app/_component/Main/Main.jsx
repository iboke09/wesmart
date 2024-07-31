'use client'
import React from "react";
import { motion } from "framer-motion";
import image from "../../img/landingimg.png";
import Link from "next/link";
import Image from "next/image";

function Main() {
  const text =
    "Unlock your potential with our expert SAP solutions.Streamline operations and boost efficiency. Enhance your growth with exceptional web design and engaging graphics designs.";
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
        <p className="first">BOOST BUSINESS</p>
        <motion.h2>with our expert services</motion.h2>
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
          href="/contact"
        >
          <span style={{ zIndex: "1000" }}>contact us</span>
        </Link>
        <Link
          className="bad-btn animate__animated animate__zoomInRight"
          href="#sap"
        >
          learn more
        </Link>
      </div>
      <div className="tawsit">
        <Image src={image} alt="alt" width={450} height={200}  loading="eager"/>
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
