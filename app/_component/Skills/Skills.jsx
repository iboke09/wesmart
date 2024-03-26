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
          <div className="mask" data-aos="fade-up">
            <h1 className="title" data-aos-duration="1000" data-aos="fade-up">SAP CONSALTENT</h1>
            <Image data-aos="fade-up" data-aos-duration="1000" 
              src={imageS} className="sapimg" width={200} height={200} alt="sap" />
            <p className="text1" data-aos="fade-up" data-aos-duration="1000">These checks highlight opportunities to improve the accessibility of your web app.</p>
            <Image data-aos="fade-up" data-aos-duration="1000"
              src={imageS1} className="sapimg2" width={200} height={200} alt="sap" />
            <p className="text2" data-aos="fade-up" data-aos-duration="1000">
              These checks highlight opportunities to improve the accessibility of your web app.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
