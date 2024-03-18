"use client";
import React from "react";
import { FcCircuit, FcFaq, FcBullish } from "react-icons/fc";
import styles from "./Hero.module.css";
import Tilt from "react-vanilla-tilt";
import { motion } from "framer-motion";
import 'animate.css'; 
function Hero() {
  return (
    <div className="our">
      <div className="tutan main-title">
        <h2>our major causes</h2>
        <p>Creepeth called face upon face yielding midst is after moveth</p>
      </div>
      <div className="container">
        <Tilt className={styles.hal}>
          <motion.div
            className="box"
            data-tilt
            data-tilt-glare
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            data-tilt-max-glare="1.8"
          >
            <FcCircuit className={styles.svgi} />
            <h4 className={styles.children}>Give Donation</h4>
            <p className={styles.children}>
              It youre. Was called youre fowl grass lesser land together waters
              beast darkness earth land whose male all moveth fruitful.
            </p>
          </motion.div>
        </Tilt>
        <Tilt className={styles.hal}>
          <motion.div
            className="box"
            data-tilt
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            data-tilt-glare
            data-tilt-max-glare="1.8"
          >
            <FcFaq className={styles.svgi} />
            <h4 className={styles.children}>Give Inspiration</h4>
            <p className={styles.children}>
              It youre. Was called youre fowl grass lesser land together waters
              beast darkness earth land whose male all moveth fruitful.
            </p>
          </motion.div>
        </Tilt>
        <Tilt className={styles.hal}>
          <motion.div
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="box"
            data-tilt
            data-tilt-glare
            data-tilt-max-glare="1.8"
          >
            <FcBullish className={styles.svgi} />
            <h4 className={styles.children}>Become Bolunteer</h4>
            <p className={styles.children}>
              It youre. Was called youre fowl grass lesser land together waters
              beast darkness earth land whose male all moveth fruitful.
            </p>
          </motion.div>
        </Tilt>
      </div>
    </div>
  );
}

export default Hero;
