import Image from "next/image";
import Link from "next/link";
import React from "react";
import image from "../../img/s2.jpg.webp";
import image5 from "../../img/s3.jpg.webp";
import image1 from "../../img/WhatsApp Görsel 2023-09-24 saat 23.10.28_35b53247.jpg";
import image2 from "../../img/WhatsApp Görsel 2023-10-07 saat 12.13.18_da4dcc76.jpg";
import image3 from "../../img/WhatsApp Görsel 2023-10-07 saat 12.11.44_8cd07256.jpg";
import image4 from "../../img/landing13.jpg";
function Skills() {
  return (
    <>
      <div className="skills" id="services">
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
                {/* <strong className="font-medium text-cyan-600">Skill</strong> */}

                {/* <span className="hidden sm:block sm:h-px sm:w-8 text-cyan-600"></span> */}

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
                {/* <strong className="font-medium text-cyan-600">Skill</strong> */}

                {/* <span className="hidden sm:block sm:h-px sm:w-8 text-cyan-600"></span> */}

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
                {/* <strong className="font-medium text-cyan-600">Skill</strong> */}

                {/* <span className="hidden sm:block sm:h-px sm:w-8 text-cyan-600"></span> */}

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
                {/* <strong className="font-medium text-cyan-600">Skill</strong> */}

                {/* <span className="hidden sm:block sm:h-px sm:w-8 text-cyan-600"></span> */}

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
                {/* <strong className="font-medium text-cyan-600">Skill</strong> */}

                {/* <span className="hidden sm:block sm:h-px sm:w-8 text-cyan-600"></span> */}

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
                {/* <strong className="font-medium text-cyan-600">Skill</strong> */}

                {/* <span className="hidden sm:block sm:h-px sm:w-8 text-cyan-600"></span> */}

                <p className="mt-0.5 opacity-50 sm:mt-0 text-white">Branding / Signage</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
