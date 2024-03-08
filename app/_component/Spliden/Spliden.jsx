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
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
        <h1>Tutoriel React Splide</h1>
        <div className="cards">
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
                  <Image width={100} height={100} src={item.img} alt="img" />
                  <h2>{item.name}</h2>
                  <p className="splideP">{item.text}</p>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
}

export default Spliden;
