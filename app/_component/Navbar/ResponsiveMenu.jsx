"use client";
import React from "react";
import logo from "../../img/lightLogoWebp-11.webp";
import { Navlink } from "./Navbar";
import Link from "next/link";
import Image from "next/image";
import { VscFoldRight, VscFoldUp, VscChevronRight } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";
import DarkMode from "../DarkMode/darkMode";

function ResponsiveMenu({ showMenu, toggleMenu }) {
  return (
    <>
      <div
        style={{
          color: "#609521",
          zIndex: "999",
          backgroundColor: "rgb(17 47 96)",
          height: "100vh",
          zIndex: "1002",
        }}
        className={`${
          showMenu ? "left-0 " : "-left-[100%]  "
        } masko fixed bottom-0 top-0  !flex h-screen md:w-[30%] md:text-left text-center  flex-col justify-between bg-white  dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 lg:hidden rounded-r-xl shadow-md`}
      >
        <AiOutlineClose
          style={{ position: "absolute" }}
          className="x hover:bg-gray-700"
          onClick={() => {
            toggleMenu();
          }}
        />
        <Image
          // style={{ height: "115px" }}
          decoding="async"
          src={logo}
          alt="Logo"
          width={180}
          height={100}
        />
        <nav className="mt-12 responsivenav">
          <ul className="flex text-red-500 responsivenav">
            <li>
              <Link className="active" href="#">
                <VscChevronRight />
                Home
              </Link>
            </li>
            <li>
              <Link href="#">
                <VscChevronRight />
                Services
              </Link>
            </li>
            <li>
              <Link href="#">
                <VscChevronRight />
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="#">
                <VscChevronRight />
                About
              </Link>
            </li>
            <li>
              <Link href="#">
                <VscChevronRight />
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#">
                <VscChevronRight />
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default ResponsiveMenu;
