"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../img/logo.png.webp";
import Link from "next/link";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const spanVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };
  const text =
    "That dont lights. Blessed land spirit creature divide our made twoitself upon youll dominion waters man second good you theyre dividedupon winged were replenish night";
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const pVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
      },
    },
  };
  return (
    // <!-- Start Header -->
    <>
      <header className="header ">
        <div className="container shadow-2xl" style={{ height: "78px" }}>
          <Image
            decoding="async"
            src={logo}
            alt="Logo"
            width={140}
            height={100}
          />

          <nav className="hidden lg:block ">
            <ul>
              <li>
                <Link className="active" href="#">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#">Services</Link>
              </li>
              <li>
                <Link href="#">Portfolio</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Pricing</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className=" lg:hidden flex items-center">
            {showMenu ? (
              <HiMenuAlt1
                style={{ color: "white" }}
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                style={{ color: "white" }}
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </header>
      <ResponsiveMenu
        toggleMenu={toggleMenu}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
      <div className="text">
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
        <Link className="pro-btn animate__animated animate__backInDown" href="#">
          donate now
        </Link>
        <Link className="bad-btn animate__animated animate__backInDown" href="#">
          see causes
        </Link>
      </div>
    </>
  );
}

export default Navbar;
