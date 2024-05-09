"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../img/lightLogoWebp-11.webp";
import Link from "next/link";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";
import image from "../../img/landingimg.png";
import Main from "../Main/Main";
import { usePathname } from "next/navigation";
import DarkMode from "../DarkMode/darkMode";
function Navbar({ active }) {
  const [showMenu, setShowMenu] = useState(false);
  const currentPath = usePathname();
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const pages = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/Services" },
    { name: "About", path: "/sa" },
    { name: "Contact", path: "/asf" },
    { name: "Pricing", path: "/asgg" },
    { name: "Portfolio", path: "/asgh" },
  ];
  const isActive = (path) => {
    return currentPath === path;
  };
  return (
    // <!-- Start Header -->
    <>
      <header className="header">
        <div className="container shadow-2xl" style={{ height: "78px" }}>
          <Link href="">
            <Image
              decoding="async"
              src={logo}
              alt="Logo"
              width={140}
              height={200}
              className="tazbit"
            />
          </Link>
          <nav className=" lg:block ">
            <ul>
              {pages.map((page, index) => (
                <li key={index}>
                  <Link
                    href={page.path}
                    alt={page.name}
                    className={isActive(page.path) ? "active" : ""}
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
              <div className="maskdarkapp">
                <DarkMode />
              </div>
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

      {/* <Main/> */}
    </>
  );
}

export default Navbar;
