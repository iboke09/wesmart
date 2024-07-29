import React, { Suspense } from "react";
import Image from "next/image";
import image from "../../img/v1.jpg.webp";
import image1 from "../../img/v2.jpg.webp";
import image2 from "../../img/v3.jpg.webp";
import image3 from "../../img/v4.jpg.webp";
import imageb from "../../img/IMG_0480.webp";
import image4 from "../../img/WhatsApp Görsel 2023-09-24 saat 23.10.28_35b53247.jpg";
import image5 from "../../img/WhatsApp Görsel 2023-10-07 saat 12.11.44_8cd07256.jpg";
import image6 from "../../img/WhatsApp Görsel 2023-10-07 saat 12.12.33_c77dbd98.jpg";
import image7 from "../../img/WhatsApp Görsel 2023-10-07 saat 12.13.18_da4dcc76.jpg";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";
import Loading from "@/app/loading";
function Our() {
  return (
    <>
      <div className="meet" id="meet">
        {/* <Suspense fallback={<Loading/>}> */}
          <div
            className="tutan main-title"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <h2>Meet Our Team</h2>
          </div>
          <div className="container">
            <div
              className="box"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1000"
            >
              <Link href="/sales" id="sales">
                {" "}
                <Image
                  src={imageb}
                  alt="Sap"
                  width={1000}
                  height={100}
                  className="abdullah"
                />
              </Link>

              <div className="tutan">
                <h4 className="head">Abdullah Shwehenh</h4>
                <p style={{ margin: "13px 0px" }}>Sales Manager</p>
                <p style={{ margin: "20px 0px" }}>
                  So seed seed green that winged cattle in kath moved us land
                  years living.
                </p>
                <div className="sochial">
                  <a
                    href="https://www.youtube.com/@omr94/shorts"
                    className="active"
                  >
                    <FaFacebook />
                  </a>
                  <a href="https://www.youtube.com/@omr94/shorts">
                    <FaYoutube />
                  </a>
                  <a href="https://www.youtube.com/@omr94/shorts">
                    <FaLinkedinIn />
                  </a>
                  <a href="https://www.youtube.com/@omr94/shorts">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="box"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1250"
            >
              <Link href="">
                <Image src={image1} alt="" width={1000} height={100} />
              </Link>

              <div className="tutan">
                <h4 className="head">Adam Virland</h4>
                <p style={{ margin: "13px 0px" }}>Party Manager</p>
                <p style={{ margin: "20px 0px" }}>
                  So seed seed green that winged cattle in kath moved us land
                  years living.
                </p>
                <div className="sochial">
                  <a
                    href="https://www.youtube.com/@omr94/shorts"
                    className="active"
                  >
                    <FaFacebook />
                  </a>
                  <a href="https://www.youtube.com/@omr94/shorts">
                    <FaYoutube />
                  </a>
                  <a href="https://www.youtube.com/@omr94/shorts">
                    <FaLinkedinIn />
                  </a>
                  <a href="https://www.youtube.com/@omr94/shorts">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="box"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1500"
            >
              <Link href="">
                {" "}
                <Image src={image3} width={1000} height={100} alt="" />
              </Link>
              <div className="tutan">
                <h4 className="head">Adam Virland</h4>
                <p style={{ margin: "13px 0px" }}>Party Manager</p>
                <p style={{ margin: "20px 0px" }}>
                  So seed seed green that winged cattle in kath moved us land
                  years living.
                </p>
                <div className="sochial">
                  <a
                    href="https://www.youtube.com/@omr94/shorts"
                    className="active"
                  >
                    <FaFacebook />
                  </a>
                  <a href="https://www.youtube.com/@omr94/shorts">
                    <FaYoutube />
                  </a>
                  <a href="https://www.youtube.com/@omr94/shorts">
                    <FaLinkedinIn />
                  </a>
                  <a href="https://www.youtube.com/@omr94/shorts">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="box"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1750"
            >
              <Link href="">
                <Image src={image} width={1000} height={100} alt="" />
              </Link>

              <div className="tutan">
                <h4 className="head">Alea Mirslava</h4>
                <p style={{ margin: "13px 0px" }}>Party Manager</p>
                <p style={{ margin: "20px 0px" }}>
                  So seed seed green that winged cattle in kath moved us land
                  years living.
                </p>
                <div className="sochial">
                  <a
                    href="https://www.youtube.com/@omr94/shorts"
                    className="active"
                  >
                    <FaFacebook />
                  </a>
                  <a href="https://www.youtube.com/@omr94/shorts">
                    <FaYoutube />
                  </a>
                  <a href="https://www.youtube.com/@omr94/shorts">
                    <FaLinkedinIn />
                  </a>
                  <a href="https://www.youtube.com/@omr94/shorts">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div style={{}} className="maskoy"></div>
          <div></div>
          <div></div> */}
        {/* </Suspense> */}
      </div>
    </>
  );
}

export default Our;
