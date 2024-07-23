// components/ContactForm.js
"use client";
import { useState } from "react";
import styles from "./ContactForm.module.css";
import Image from "next/image";
import img from "../img/brand communication-amicoo.png";
import Footer from "../_component/Footer/Footer";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // هنا يمكنك إضافة كود لإرسال البيانات إلى خادمك أو خدمة خارجية
    console.log("Form data submitted:", formData);
  };

  return (
    <>
      <div className="why" style={{ height: "100vh" }}>
        <div style={{ top: "110px", position: "relative" }}>
          <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="relative h-64  rounded-lg sm:h-80 lg:order-last lg:h-full why1">
                  <div className="locals" style={{ position: "relative" }}>
                    <Image src={img} alt="Sap" width={1000} height={100} />
                  </div>
                </div>

                <div className="lg:py-24 muzz">
                  <div className={styles.contactFormContainer}>
                    <h2 className="contact_title">Contact us</h2>
                    <form
                      action={"http://localhost:8000/server.php"}
                      onSubmit={(event) => handleSubmit(event)}
                      className={styles.contactForm}
                      method="POST"
                    >
                      <div className={styles.inputGroup}>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Name"
                          required
                          className={styles.input}
                        />
                      </div>
                      <div className={styles.inputGroup}>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
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
                        Send Message
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
        >
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Contact;
