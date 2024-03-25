import Image from "next/image";
import Link from "next/link";
import React from "react";
import image from "../../img/s2.jpg.webp";
import image5 from "../../img/s3.jpg.webp";
import image1 from "../../img/WhatsApp Görsel 2023-09-24 saat 23.10.28_35b53247.jpg";
import image2 from "../../img/WhatsApp Görsel 2023-10-07 saat 12.13.18_da4dcc76.jpg";
import image3 from "../../img/WhatsApp Görsel 2023-10-07 saat 12.11.44_8cd07256.jpg";
import image4 from "../../img/landing13.jpg";
import { motion } from "framer-motion"
import { FcSupport } from "react-icons/fc";
import imageS from "../../img/enterprise-resource-planning-holographic-interface.jpg"
import imageS1 from "../../img/abstract-background-with-low-poly-design.jpg"
function Skills() {
  return (
    <>
      {/* <div className="skills" id="services">
        <div className="container">
          <div
            className="tutan main-title"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <h2>Our Services</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <Link
              href="#"
              className="block ad"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="700"
            >
              <Image
                alt=""
                src={image}
                className="img h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
              />

              <div className="mt-4 flex items-center justify-center ">


                <p className="mt-0.5 opacity-50 sm:mt-0 text-white">Branding / Signage</p>
              </div>
            </Link>
            <Link
              href="#"
              className="block ad"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1300"
            >
              <Image
                alt=""
                src={image1}
                className="img h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
              />

              <div className="mt-4 flex items-center justify-center ">


                <p className="mt-0.5 opacity-50 sm:mt-0 text-white">Branding / Signage</p>
              </div>
            </Link>
            <Link
              href="#"
              className="block ad"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1700"
            >
              <Image
                alt=""
                src={image2}
                className="img h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
              />

              <div className="mt-4 flex items-center justify-center ">


                <p className="mt-0.5 opacity-50 sm:mt-0 text-white">Branding / Signage</p>
              </div>
            </Link>
            <Link
              href="#"
              className="block ad"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1000"
            >
              <Image
                alt=""
                src={image3}
                className="img h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
              />

              <div className="mt-4 flex items-center justify-center">


                <p className="mt-0.5 opacity-50 sm:mt-0 text-white">Branding / Signage</p>
              </div>
            </Link>
            <Link
              href="#"
              className="block ad"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1300"
            >
              <Image
                alt=""
                src={image4}
                className="img h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
              />

              <div className="mt-4 flex items-center justify-center">


                <p className="mt-0.5 opacity-50 sm:mt-0 text-white">Branding / Signage</p>
              </div>
            </Link>
            <Link
              href="#"
              className="block ad"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1600"
            >
              <Image
                alt=""
                src={image5}
                className="img h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
              />
              <div className="mt-4 flex items-center justify-center">
                <p className="mt-0.5 opacity-50 sm:mt-0 text-white">Branding / Signage</p>
              </div>
            </Link>
          </div>
        </div>
      </div> */}
      <div className="ski">
        <div className="container">
          <div className="animatio">
            <motion.div data-aos="fade-up" className="gitA" whileInView={{ height: "150px" }} transition={{ duration: 0.8, delay: 0.35 }}></motion.div>
            <div data-aos="fade-up">
              <FcSupport />
              <div className="gitbe" ></div>
            </div>
            <motion.div data-aos="fade-up" className="gitA_2" whileInView={{ height: "185px" }} transition={{ duration: 0.8, delay: 0.65 }}></motion.div>
          </div>
          <div className="container content">
            <h2 className="title text-white text-xl" data-aos="fade-left">Lorem header</h2>
            <h1 className="title-2 text-white text-4xl" data-aos="fade-left">SAP</h1>
            <p className="text-white" data-aos="fade-left">AUDIENCE WITH INNOVATIVE AND ATTRACTIVE DESIGNS.</p>
          </div>
          <div className="mask">
          <Image
              src={imageS} width={200} height={200} alt="sap"/>
            <Image
              src={imageS1} width={200} height={200} alt="sap"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
