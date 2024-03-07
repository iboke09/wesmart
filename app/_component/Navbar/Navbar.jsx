"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../img/logo.png.webp";
import Link from "next/link";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    // <!-- Start Header -->
    <div style={{ width: "100vw" }} className="landing">
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
      <ResponsiveMenu toggleMenu={toggleMenu} showMenu={showMenu} setShowMenu={setShowMenu} />
      <div className="text">
        <div className="content">
          <h2>
            Hello World!<br />
            We Are Kasper We Make Art.
          </h2>
          <p>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt
            nibh pulvinar a. Curabitur aliquet quam. Accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet
            elit, eget tincidunt.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
