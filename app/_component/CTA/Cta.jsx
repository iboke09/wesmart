import Image from "next/image";
import React from "react";
import image from "../../img/S4-HANA-cloud.png";
export default function Cta() {
  return (
    <div className="relative z-20 flex items-center overflow-hidden ">
      <div className="container relative flex px-6 py-16 mx-auto">
        <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
          <span className="w-20 h-2 mb-12  dark:bg-white"></span>
          <h1 className="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white">
            Be on
            <span className="text-5xl sm:text-7xl">Time</span>
          </h1>
          <p className="text-sm text-gray-700 sm:text-base dark:text-white">
            Dimension of reality that makes change possible and understandable.
            An indefinite and homogeneous environment in which natural events
            and human existence take place.
          </p>
          <div className="flex mt-8">
            <a
              href="#"
              className="px-4 py-2 mr-4 text-white uppercase bg-blue-500 border-2 border-transparent rounded-lg text-md hover:bg-blue-600"
            >
              Get started
            </a>
            <a
              href="#"
              className="px-4 py-2 text-pink-500 uppercase bg-transparent border-2 border-blue-600 rounded-lg dark:text-white hover:bg-blue-700 hover:text-white text-md"
            >
              Read more
            </a>
          </div>
        </div>
        <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
          <Image src={image} alt="alt" width={700} height={700} />
        </div>
      </div>
    </div>
  );
}
