import React from "react";
import Image from "next/image";
import image from "../../img/v1.jpg.webp";
import image1 from "../../img/v2.jpg.webp";
import image2 from "../../img/v3.jpg.webp";
import image3 from "../../img/v4.jpg.webp";
import image4 from "../../img/WhatsApp Görsel 2023-09-24 saat 23.10.28_35b53247.jpg";
import image5 from "../../img/WhatsApp Görsel 2023-10-07 saat 12.11.44_8cd07256.jpg";
import image6 from "../../img/WhatsApp Görsel 2023-10-07 saat 12.12.33_c77dbd98.jpg";
import image7 from "../../img/WhatsApp Görsel 2023-10-07 saat 12.13.18_da4dcc76.jpg";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
function Our() {
  return (
    <>
      <div class="meet" id="meet">
        <div class="tutan main-title">
          <h2>Meet Our Voluteer</h2>
          <p>Creepeth called face upon face yielding midst is after moveth</p>
        </div>
        <div class="container">
          <div class="box">
            <Image src={image2} alt="" width={1000} height={100} />

            <div class="tutan">
              <h4 class="head">Alea Mirslava</h4>
              <p style={{ margin: "13px 0px" }}>Party Manager</p>
              <p style={{ margin: "20px 0px" }}>
                So seed seed green that winged cattle in kath moved us land
                years living.
              </p>
              <div class="sochial">
                <a href="https://www.youtube.com/@omr94/shorts" class="active">
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
          <div class="box">
            <Image src={image1} alt="" width={1000} height={100} />

            <div class="tutan">
              <h4 class="head">Adam Virland</h4>
              <p style={{ margin: "13px 0px" }}>Party Manager</p>
              <p style={{ margin: "20px 0px" }}>
                So seed seed green that winged cattle in kath moved us land
                years living.
              </p>
              <div class="sochial">
                <a href="https://www.youtube.com/@omr94/shorts" class="active">
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
          <div class="box">
            <Image src={image3} width={1000} height={100} alt="" />
            <div class="tutan">
              <h4 class="head">Adam Virland</h4>
              <p style={{ margin: "13px 0px" }}>Party Manager</p>
              <p style={{ margin: "20px 0px" }}>
                So seed seed green that winged cattle in kath moved us land
                years living.
              </p>
              <div class="sochial">
                <a href="https://www.youtube.com/@omr94/shorts" class="active">
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
          <div class="box">
            <Image src={image} width={1000} height={100} alt="" />

            <div class="tutan">
              <h4 class="head">Alea Mirslava</h4>
              <p style={{ margin: "13px 0px" }}>Party Manager</p>
              <p style={{ margin: "20px 0px" }}>
                So seed seed green that winged cattle in kath moved us land
                years living.
              </p>
              <div class="sochial">
                <a href="https://www.youtube.com/@omr94/shorts" class="active">
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
      </div>
    </>
  );
}

export default Our;
