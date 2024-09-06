// components/ContactForm.js
"use client";
import emailjs from "emailjs-com";
import { useState } from "react";
import styles from "./ContactForm.module.css";
import Image from "next/image";
import img from "/public/img/ContactUsvector 1.svg";
import Footer from "../_component/Footer/Footer";
import Landing from "../_component/Landing/Landing";
const Contact = () => {
  const [messageStatus, setMessageStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const triggerEmail = async (data) => {
    setIsLoading(true);
    await emailjs
      .send(
        "service_pv5ogp6",
        "template_csebbz8",
        formData,
        "U7Ed0tKLtms1lZg0_"
      )
      .then((success) => {
        alert("The Email Has Been Sent Successfully.");
        setIsLoading(false);
        setFormData({
          from_name: "",
          from_email: "",
          message: "",
        });
      })
      .catch((err) => {
        alert("Sorry, Failed To Send Email");
      });
  };

  const onFormSubmit = (e) => {
    console.log(e.target);
    const data = {
      name: e.target[0].value,
      email: e.target[1].value,
      message: e.target[2].value,
    };
    console.log(data);
    triggerEmail(data);
    e.preventDefault();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <title>Contact - Wesmart For Technology</title>
      <div className="contactP">
        <Landing className="olurmu">
          <div style={{ top: "110px", position: "relative" }} className="raf3">
            <section>
              <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 inasha">
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:gap-16">
                  <div className="relative h-64  rounded-lg sm:h-80 order-last lg:h-full why1">
                    <div className="locals" style={{ position: "relative" }}>
                      <Image src={img} alt="Sap" width={1000} height={100} />
                    </div>
                  </div>

                  <div className="lg:py-24 muzz">
                    <div className={styles.contactFormContainer}>
                      <h2 className="contact_title">Contact us</h2>
                      <form
                        onSubmit={onFormSubmit}
                        className={styles.contactForm}
                      >
                        <div className={styles.inputGroup}>
                          <input
                            type="text"
                            id="from_name"
                            name="from_name"
                            value={formData.from_name}
                            onChange={handleChange}
                            placeholder="Name"
                            required
                            className={styles.input}
                          />
                        </div>
                        <div className={styles.inputGroup}>
                          <input
                            type="email"
                            id="from_email"
                            name="from_email"
                            value={formData.from_email}
                            onChange={handleChange}
                            placeholder="Email"
                            required
                            className={styles.input}
                          />
                        </div>
                        <div className={styles.inputGroup}>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                            required
                            className={styles.textarea}
                          />
                        </div>
                        <button type="submit" className={styles.button}>
                          {isLoading ? (
                            <span className={styles.loader}></span> // رمز التحميل
                          ) : (
                            "Send Message" // النص الأصلي للزر
                          )}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div
            style={{ top: "200px", position: "relative" }}
            className="footer_top"
          ></div>
          <div className="ihfa2">
            <Footer />
          </div>
        </Landing>
      </div>
      <div className="ihfa">
        <Footer />
      </div>
    </>
  );
};

export default Contact;
