// 'use client'

import Navbar from "../_component/Navbar/Navbar";
import Tagarob1 from "../_component/Tacarob1/Tagarob1";
import React from "react";
import styles from "./Services.module.css";
import Landing from "../_component/Landing/Landing";
import Image from "next/image";
import image from "../img/LandingPageVersion2.png";
import ERPSection from "../_component/ERPSection/ERPSection.jsx";
import Footer from "../_component/Footer/Footer";
import UIUXSection from "../_component/UIUXSection/UIUXSection";

export default function Services() {
  return (
    <>
      <>
        <Landing>
          <div className="textS container">
            <div
              className="centere"
              style={{ textAlign: "left", top: "65px", position: "relative" }}
            >
              <h2>Our Services</h2>
              <p style={{ color: "var(--blawh-color)" }}>
                We provide four services, all delivered with great skill,
                professionalism,<br/> and expertise. acilisis tortor malesuada
                malesuada.
              </p>
              <div
                className="grid grid-cols-2 gap-6  top-20 relative gridS"
                style={{ columnGap: "0.5rem" }}
              >
                <div className="of">ERP Systems</div>
                <div className="act">Web Design</div>
                <div className="of">Skada Systems</div>
                <div className="act">UI/UX Design</div>
              </div>
            </div>
            <div className="tawsitS" style={{ top: "30px" }}>
              <Image
                src={image}
                alt="alt"
                width={450}
                height={200}
                loading="eager"
              />
            </div>
          </div>
        </Landing>
        <ERPSection />
        <UIUXSection />
        <Tagarob1 />
        <Footer />
      </>
    </>
  );
}
