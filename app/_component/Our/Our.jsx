"use client";
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
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from "@/app/loading";
function Our() {
  useEffect(() => {
    AOS.init();
  }, []);
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
                  href="https://www.youtube.com/@omr94/asfgats"
                  aria-label="Read more about the economic outlook for the next decade"
                  className="active"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.youtube.com/watch?afvvsM&ab_cs%D8%B9%Df%D9%8A-bashararabi"
                  aria-label="Read more about the latest trends in sustainable fashion"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=wxxqpmCiSYg&ab_channegasd9%85%D9%88%D8%B5%D8%A8%D8%B1%D9%8A%7Cmosabri"
                  aria-label="Read more about the cultural significance of Diwali in India"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.youtube.com/shorts/gAzasdfgF_tyI"
                  aria-label="Read more about the effects of social media on teenagers"
                >
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
            <Link href="#developer">
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
                  href="https://www.youtube.com/@omr94/asdghts"
                  aria-label="Read more about the groundbreaking cancer research at Johns Hopkins"
                  className="active"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=kF-Yvasdd&ab_channel=%D8%gasd%B1%D8%B9%D8%B1%D8%A8%D9%8A-bashararabi"
                  aria-label="Read more about the benefits of yoga and meditation"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=wxxqpmCiSYg&ab_channel=%D9%8asffD8%B1%D9%8A%7Cmosabri"
                  aria-label="Read more about the top 10 travel destinations for 2024"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.youtube.com/shorts/gasdF_tyI"
                  aria-label="Read more about the new features in the latest iPhone release"
                >
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
            <Link href="#web">
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
                  href="https://www.youtube.com/asddf/sasd"
                  className="active"
                  aria-label="Read more about the importance of mental health awareness"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.youtube.com/sdaatchasdab_channel=%D8%A8%D8%B4%D8%Aasdasdrarabi"
                  aria-label="Read more about the history of the Great Wall of China"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=wxxqpmCiSYg&ab_channasd"
                  aria-label="Read more about the benefits of a healthy Mediterranean diet"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.youtube.com/shorasdts/gasdasdAzW4MF_tyI"
                  aria-label="Read more about the impact of climate change on polar bears"
                >
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
            <Link href="#site">
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
                  href="https://www.youtube.com/@omr94/"
                  className="active"
                  aria-label="Read more about the new electric car model from Tesla"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.youtube.com/asd"
                  aria-label="Read more about the latest advancements in AI technology"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://www.youtube.com/eaf"
                  aria-label="Read more about the upcoming tech conference in San Francisco"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.youtube.com/shortss/"
                  aria-label="Read more about Seminole's new baby mayor"
                >
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
