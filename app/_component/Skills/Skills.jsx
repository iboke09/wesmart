import Image from "next/image";
import Link from "next/link";
import React from "react";
import image from "../../img/s2.jpg.webp";
import image5 from "../../img/s3.jpg.webp";
import image1 from "../../img/WhatsApp Görsel 2023-09-24 saat 23.10.28_35b53247.jpg";
import image2 from "../../img/WhatsApp Görsel 2023-10-07 saat 12.13.18_da4dcc76.jpg";
import image3 from "../../img/WhatsApp Görsel 2023-10-07 saat 12.11.44_8cd07256.jpg";
import image4 from "../../img/landing13.jpg";
import { motion } from "framer-motion";
import { FcSupport } from "react-icons/fc";
import imageS from "../../img/enterprise-resource-planning-holographic-interface.jpg";
import imageS1 from "../../img/abstract-background-with-low-poly-design.jpg";
import image22 from "../../img/emily-bernal-BM3U_D2lygo-unsplash.jpg";
import image23 from "../../img/kelly-sikkema-Dx1b5ucschA-unsplash.jpg";
import image24 from "../../img/florian-olivo-4hbJ-eymZ1o-unsplash.jpg";
import image25 from "../../img/jefferson-santos-9SoCnyQmkzI-unsplash.jpg";
import { SiCodesignal } from "react-icons/si";
function Skills() {
  return (
    <>
      <div className="ski">
        <div className="container">
          <div className="animatio">
            <motion.div
              data-aos="fade-up"
              className="gitA"
              whileInView={{ height: "150px" }}
              transition={{ duration: 0.8, delay: 0.35 }}
            ></motion.div>
            <div data-aos="fade-up">
              <FcSupport />
              <div className="gitbe"></div>
            </div>
            <motion.div
              data-aos="fade-up"
              className="gitA_2"
              whileInView={{ height: "185px" }}
              transition={{ duration: 0.8, delay: 0.65 }}
            ></motion.div>
          </div>
          <div className="container content">
            <h2 className="title text-white text-xl" data-aos="fade-left">
              Lorem header
            </h2>
            <h1 className="title-2 text-white text-4xl" data-aos="fade-left">
              SAP
            </h1>
            <p className="text-white" data-aos="fade-left">
              AUDIENCE WITH INNOVATIVE AND ATTRACTIVE DESIGNS.
            </p>
          </div>
          <div className="mask" data-aos="fade-up">
            <h1 className="title">SAP CONSALTENT</h1>
            <Image
              src={imageS}
              className="sapimg"
              width={200}
              height={200}
              alt="sap"
            />
            <p className="text1">
              These checks highlight opportunities to improve the accessibility
              of your web app.
            </p>
            <Image
              src={imageS1}
              className="sapimg2"
              width={200}
              height={200}
              alt="sap"
            />
            <p className="text2">
              These checks highlight opportunities to improve the accessibility
              of your web app.
            </p>
          </div>
        </div>
      </div>
      <div className="ski o">
        <div className="container">
          <div className="animatio">
            <motion.div
              data-aos="fade-up"
              style={{ background: "#eb68b3 !important" }}
              className="gitA"
              whileInView={{ height: "150px" }}
              transition={{ duration: 0.8, delay: 0.35 }}
            ></motion.div>
            <div data-aos="fade-up">
              <SiCodesignal style={{ color: "gray" }} />
              {/* <svg
                aria-hidden="true"
                height="24"
                viewBox="0 0 24 24"
                version="1.1"
                width="24"
                data-view-component="true"
                class="octicon octicon-code-of-conduct"
                style={{color:"white !important"}}
                >
                <path d="M2.828 4.328C5.26 1.896 9.5 1.881 11.935 4.317c.024.024.046.05.067.076 1.391-1.078 2.993-1.886 4.777-1.89a6.22 6.22 0 0 1 4.424 1.825c.559.56 1.023 1.165 1.34 1.922.318.756.47 1.617.468 2.663 0 2.972-2.047 5.808-4.269 8.074-2.098 2.14-4.507 3.924-5.974 5.009l-.311.23a.752.752 0 0 1-.897 0l-.312-.23c-1.466-1.085-3.875-2.869-5.973-5.009-2.22-2.263-4.264-5.095-4.27-8.063a6.216 6.216 0 0 1 1.823-4.596Zm8.033 1.042c-1.846-1.834-5.124-1.823-6.969.022a4.712 4.712 0 0 0-1.382 3.52c0 2.332 1.65 4.79 3.839 7.022 1.947 1.986 4.184 3.66 5.66 4.752a78.214 78.214 0 0 0 2.159-1.645l-2.14-1.974a.752.752 0 0 1 1.02-1.106l2.295 2.118c.616-.52 1.242-1.08 1.85-1.672l-2.16-1.992a.753.753 0 0 1 1.021-1.106l2.188 2.02a18.963 18.963 0 0 0 1.528-1.877l-.585-.586-1.651-1.652c-1.078-1.074-2.837-1.055-3.935.043-.379.38-.76.758-1.132 1.126-1.14 1.124-2.96 1.077-4.07-.043-.489-.495-.98-.988-1.475-1.482a.752.752 0 0 1-.04-1.019c.234-.276.483-.576.745-.893.928-1.12 2.023-2.442 3.234-3.576Zm9.725 6.77c.579-1.08.92-2.167.92-3.228.002-.899-.128-1.552-.35-2.08-.22-.526-.551-.974-1.017-1.44a4.71 4.71 0 0 0-3.356-1.384c-1.66.004-3.25.951-4.77 2.346-1.18 1.084-2.233 2.353-3.188 3.506l-.351.423c.331.332.663.664.993.998a1.375 1.375 0 0 0 1.943.03c.37-.365.748-.74 1.125-1.118 1.662-1.663 4.373-1.726 6.06-.045.56.558 1.12 1.12 1.658 1.658Z"></path>
              </svg> */}
              <div className="gitbe o"></div>
            </div>
            <motion.div
              data-aos="fade-up"
              style={{ background: "#eb68b3 !important" }}
              className="gitA_2"
              whileInView={{ height: "185px" }}
              transition={{ duration: 0.8, delay: 0.65 }}
            ></motion.div>
          </div>
          <div className="container content">
            <h2 className="title text-white text-xl" data-aos="fade-left">
              Lorem header
            </h2>
            <h1
              className="title-2 text-white text-4xl"
              data-aos="fade-left"
              style={{ color: "#eb68b3 !important" }}
            >
              Graphic
            </h1>
            <p className="text-white" data-aos="fade-left">
              AUDIENCE WITH INNOVATIVE AND ATTRACTIVE DESIGNS.
            </p>
          </div>
          <Image
            src="https://github.githubassets.com/assets/shape-2-f30dcc9bd35c.svg"
            style={{ position: "absolute", left: "1300px", top: "165px" }}
            className="kayip"
            alt=""
            width={800}
            height={800}
          />
          <div className="mask" data-aos="fade-up">
            <h1 className="title" style={{ color: "#eb68b3 !important" }}>
              Graphic Design
            </h1>
            <Image
              src={image22}
              className="sapimg"
              width={200}
              height={200}
              alt="sap"
            />
            <p className="text1">
              These checks highlight opportunities to improve the accessibility
              of your web app.
            </p>
            <Image
              // data-aos="fade-up"
              // data-aos-duration="1000"
              src={image23}
              className="sapimg2"
              width={200}
              height={200}
              alt="sap"
            />
            <p className="text2">
              These checks highlight opportunities to improve the accessibility
              of your web app.
            </p>
          </div>
        </div>
      </div>
      <div className="ski t">
        <div className="container">
          <div className="animatio">
            <motion.div
              data-aos="fade-up"
              className="gitA"
              whileInView={{ height: "150px" }}
              transition={{ duration: 0.8, delay: 0.35 }}
            ></motion.div>
            <div data-aos="fade-up">
              <FcSupport />
              <div className="gitbe"></div>
            </div>
            <motion.div
              data-aos="fade-up"
              className="gitA_2"
              whileInView={{ height: "185px" }}
              transition={{ duration: 0.8, delay: 0.65 }}
            ></motion.div>
          </div>
          <div className="container content">
            <h2 className="title text-white text-xl" data-aos="fade-left">
              Lorem header
            </h2>
            <h1 className="title-2 text-white text-4xl" data-aos="fade-left">
              Web Design
            </h1>
            <p className="text-white" data-aos="fade-left">
              AUDIENCE WITH INNOVATIVE AND ATTRACTIVE DESIGNS.
            </p>
          </div>
          <div className="mask" data-aos="fade-up" data-aos-duration="1000">
            <h1 className="title">Web Development</h1>
            <Image
              // data-aos="fade-up"
              // data-aos-duration="1000"
              src={image25}
              className="sapimg"
              width={200}
              height={200}
              alt="sap"
            />
            <p className="text1">
              These checks highlight opportunities to improve the accessibility
              of your web app.
            </p>
            <Image
              // data-aos="fade-up"
              // data-aos-duration="1000"
              src={image24}
              className="sapimg2"
              width={200}
              height={200}
              alt="sap"
            />
            <p className="text2">
              These checks highlight opportunities to improve the accessibility
              of your web app.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
