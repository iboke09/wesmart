"use client";
import data from "../data/data";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
import "../Spliden/Spliden";
import "./index.scss";
function Spliden() {
  return (
    <>
      {/* <div className="spikes" style={{ position: "relative" }}></div> */}
      <div
        className="hait"
        style={{
          width: "100vw",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "85vh",
          marginTop: "100px",
        }}
      >
        <div
          className="containerS"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <h1>Our Services</h1>
          <div className="cards" style={{zIndex:'40'}}>
            <Splide 
              aria-label="Testimonials"
              options={{
                type: "loop",
                // fixedWidth: "700px",
                focus: "center",
                isNavigation: true,
                autoplay: true,
                perPage: 2,
              }}
            >
              {data.map((item) => (
                <SplideSlide key={item.id} style={{ width: "50vw" }}>
                  <div className="card">
                    {item.img}
                    <h2 style={{textAlign:'center'}}>{item.name}</h2>
                    <p className="splideP">{item.text}</p>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </div>
    </>
  );
}

export default Spliden;
