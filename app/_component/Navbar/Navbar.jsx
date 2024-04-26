"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../img/The First logo design for WeSmartt coloring-05.webp";
import Link from "next/link";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";
import image from "../../img/landingimg.png";
import Main from "../Main/Main";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
 
  return (
    // <!-- Start Header -->
    <>
      <header className="header">
        <div className="container shadow-2xl" style={{ height: "78px" }}>
          <Link href="">
            <Image
              style={{ height: "125px" }}
              decoding="async"
              src={logo}
              alt="Logo"
              width={140}
              height={2100}
            />
          </Link>
          <nav className="hidden lg:block ">
            <ul>
              <li>
                <Link className="active" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/Services">Services</Link>
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
      <Main/>
    </>
  );
}

export default Navbar;
