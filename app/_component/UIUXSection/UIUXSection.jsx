import Image from "next/image";
import image from "../../img/uiuxS.png";
import image1 from "../../img/WebSectionIllustration.svg";
import image2 from "../../img/ErpSectionIllustration.svg";
export default function UIUXSection() {
  return (
    <>
      <div
        className="theAPP"
        style={{
          height: "100vh",
          backgroundColor: "var(--main-alt-color1)",
          transition: "0.7s",
          textAlign: "center",
          marginBottom: "285px",
        }}
      >
        <h1 className="headerUI">Softwer design</h1>
        <div className="container UI">
          <div className="maskUI I">
            <div className="icermaskUI">
              <Image src={image} alt="" width={280} height={100} />
              <div className="boxUI">
                <h2 className="mainUItitle">UI/UX Design</h2>
                <p>
                  We specialize in UI/UX design, focusing on creating intuitive
                  and visually engaging user experiences. Our designs enhance
                  usability and ensure smooth, effective interactions, aligning
                  with your business goals and user needs.
                </p>
              </div>
              <Image
                src={image1}
                alt="alt"
                width={250}
                height={100}
                className="ilstU"
              />
            </div>
            <div className="icermaskUI">
              <div className="boxUI">
                <h2 className="mainUItitle">Web Development</h2>
                <p className="">
                  We design and develop high-quality, fast, and efficient
                  websites and online stores. Our tailored solutions ensure
                  excellent performance and user satisfaction, meeting your
                  unique needs with expertise and precision.
                </p>
              </div>
              <button className="UIcontactBtn">
                <span style={{ position: "relative", zIndex: "100" }}>
                  Contact Us
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
