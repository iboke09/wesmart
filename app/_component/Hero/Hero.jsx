"use client";
import React from "react";
import {
  FcCircuit,
  FcFaq,
  FcBullish,
  FcBarChart,
  FcCamcorderPro,
  FcAbout,
} from "react-icons/fc";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Hero.module.css";
import Tilt from "react-vanilla-tilt";
import { motion } from "framer-motion";
import "animate.css";
const Hero = () => {
  return (
    <>
      <div className="our">
        <div className="tutan main-title">
          <h2>Our Major Services</h2>
        </div>
        <div className="container">
          <Tilt className={styles.hal}>
            <motion.div
              className="box"
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="1.8"
            >
              <FcAbout className={styles.svgi} />
              <h2 className={styles.children}>Get SAP Solutions</h2>
              <p className={styles.children}>
                Elevate your operations and boost efficiency through our
                tailored SAP integration and dedicated support.
                .
              </p>
            </motion.div>
          </Tilt>
          <Tilt className={styles.hal}>
            <motion.div
              className="box"
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="1.8"
            >
              <FcCamcorderPro className={styles.svgi} />
              <h2 className={styles.children}>Discover Web Design</h2>
              <p className={styles.children}>
                Create memorable experiences with our innovative, beautifully
                designed websites that blend form and function.
              </p>
            </motion.div>
          </Tilt>
          <Tilt className={styles.hal}>
            <motion.div
              className="box"
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="1.8"
            >
              <FcBarChart className={styles.svgi} />
              <h2 className={styles.children}>Explore Graphic Design</h2>
              <p className={styles.children}>
                Captivate your audience with our bespoke graphic design. Elevate
                your brand with visuals that make a memorable impact.
              </p>
            </motion.div>
          </Tilt>
        </div>
      </div>
    </>
  );
}

export default Hero;
