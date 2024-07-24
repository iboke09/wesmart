import Image from "next/image";
import React from "react";
import img from "../img/Group 1614Flip.svg";
import img2 from "../img/howard-bouchevereau-nrbZ80NVx1o-unsplash (1).jpg";
import Footer from "../_component/Footer/Footer";

function About() {
  return (
    <>
      <div className="kura">
        <div
          style={{ height: "100vh", top: "100px", position: "relative" }}
          className="container"
        >
          <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="relative h-64 rounded-lg sm:h-80 lg:order-last lg:h-full ">
                  <Image
                    alt="web design"
                    src={img}
                    className="absolute inset-0 h-full wid"
                  />
                </div>

                <div className="lg:py-24">
                  <h2 className="text-3xl font-bold sm:text-4xl whito">
                    Grow your audience
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
      <Footer />
    </>
  );
}

export default About;

{
  /* <div style={{ height: "100vh" ,placeContent:'center'}}>
  <div>
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64  rounded-lg sm:h-80 lg:order-last lg:h-full rigo">
              <Image
                alt=""
                src={img}
                className="absolute inset-0 fullu object-cover"
              />
              <Image
                alt=""
                src={img2}
                className="absolute inset-0  fullu1 object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Grow your audience
              </h2>

              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aut qui hic atque tenetur quis eius quos ea neque sunt,
                accusantium soluta minus veniam tempora deserunt?
                Molestiae eius quidem quam repellat.
              </p>

              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aut qui hic atque tenetur quis eius quos ea neque sunt,
                accusantium soluta minus veniam tempora deserunt?
                Molestiae eius quidem quam repellat.
              </p>

              <a
                href="#"
                className="mt-8 inline-block rounded btnop px-12 py-3 text-sm font-medium text-white transition focus:outline-none focus:ring "
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</div> */
}
