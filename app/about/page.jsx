import Image from "next/image";
import React from "react";
import img from "../img/Mystery box-rafiki.svg";
import img1 from "../img/Man thinking-bro.svg";
import img2 from "../img/SvgVector 1.svg";
import Footer from "../_component/Footer/Footer";
import Landing from "../_component/Landing/Landing";

const About = () => {
  return (
    <>
      <Landing>
        <div
          className="textA container"
          style={{ flexDirection: "row-reverse" }}
        >
          <div
            className="centere"
            style={{ textAlign: "left", top: "65px", position: "relative" }}
          >
            <h2>About Our Company</h2>
            <p style={{ color: "var(--blawh-color)", width: "500px" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
              hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
              minus veniam tempora deserunt? Molestiae eius quidem quam
              repellat.
            </p>
            <a
              href="#"
              className="rulla mt-8 inline-block rounded  px-12 py-3 text-sm font-medium text-white transition focus:outline-none focus:ring "
            >
              <span style={{ position: "relative", zIndex: "10" }}>
                Get Started Today
              </span>
            </a>
          </div>

          <div className="tawsitS" style={{ top: "-70px" }}>
            <Image
              src={img2}
              alt="alt"
              width={450}
              height={200}
              loading="eager"
            />
          </div>
        </div>
      </Landing>
      {/* <div className="kura">
        <div
          style={{ height: "70vh", top: "100px", position: "relative" }}
          className="container"
        >
          <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
              <div className="grid sm:grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
                <div className="relative h-64 rounded-lg sm:h-80 lg:order-last lg:h-full hidden md:block">
                  <Image
                    alt="web design"
                    src={img}
                    className="absolute inset-0 h-full wid"
                  />
                </div>

                <div className="lg:py-24 lull">
                  <h2 className="text-3xl font-bold sm:text-4xl whito">
                    About Our Company
                  </h2>

                  <p className="mt-4 whito">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aut qui hic atque tenetur quis eius quos ea neque sunt,
                    accusantium soluta minus veniam tempora deserunt? Molestiae
                    eius quidem quam repellat.
                  </p>

                  <a
                    href="#"
                    className="rulla mt-8 inline-block rounded  px-12 py-3 text-sm font-medium text-white transition focus:outline-none focus:ring "
                  >
                    Get Started Today
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="rest">
        <div className="container re">
          <div className="box">
            <div>
              <Image src={img} alt="" />
              <h1>Who We Are</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio quia nobis autem necessitatibus illo. Mollitia!
            </p>
          </div>
          <div className="box">
            <div>
              <Image src={img1} alt="" />
              <h1>What We Do</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              molestias facilis est labore ipsam eveniet!
            </p>
          </div>
          <div className="box">
            <div>
              <Image src={img2} alt="" />
              <h1>Why We Do It</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos aut
              at, non magni laborum dolorum.
            </p>
          </div>
        </div>
      </div> */}
      <Footer />
    </>
  );
};

export default About;
