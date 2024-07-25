// 'use client'

import Navbar from "../_component/Navbar/Navbar";
import Tagarob1 from "../_component/Tacarob1/Tagarob1";
import React from "react";
import styles from "./Services.module.css";

const services = [
  {
    title: "Web Development",
    description:
      "We create responsive and dynamic websites tailored to your needs.",
    icon: "🌐",
  },
  {
    title: "E-commerce",
    description:
      "Build and grow your online store with our custom e-commerce solutions.",
    icon: "🛒",
  },
  {
    title: "UI/UX Design",
    description:
      "Enhance user experience with our top-notch UI/UX design services.",
    icon: "🎨",
  },
  {
    title: "SAP Consulting",
    description:
      "Optimize your business processes with our expert SAP consulting services.",
    icon: "💼",
  },
];

export default function Services() {
  return (
    <>
      <div style={{}}>
        <div
          className="py-20"
          style={{
            backgroundImage:
              "linear-gradient(90deg,rgba(0, 194, 255, 1) 0%,rgba(0, 51, 128, 1) 100%)",
            paddingTop: "200px",
          }}
        >
          <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{color:"var(--blawh-color)"}}>
            <h2 className="text-4xl font-extrabold text-white text-center mb-12">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg shadow-lg hover:shadow-xl  duration-300"
                  style={{ backgroundColor: "var(--main-alt-color1" ,transition:'0.7s'}}
                >
                  <div className="text-5xl mb-4 text-center">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold  mb-2 text-center">
                    {service.title}
                  </h3>
                  <p className=" text-center">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Tagarob1 />
      </div>
    </>
  );
}
