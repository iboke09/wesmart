import Image from "next/image";
import image from "../../img/uiuxS.png";
import image1 from '../../img/WebSectionIllustration.svg'
import image2 from '../../img/ErpSectionIllustration.svg'
export default function UIUXSection() {
  return (
    <>
      <div
      className="theAPP"
        style={{
          height: "100vh",
          backgroundColor: "var(--main-alt-color1)",
          transition: "0.7s",
          marginTop: "400px",
          textAlign: "center",
          marginBottom: "285px",
        }}>
        <h1 className="headerUI">Web Softwer</h1>
        <div className="container UI">
          <div className="maskUI I">
            <div className="icermaskUI">
              <Image src={image} alt="" width={280} height={100} />
              <div className="boxUI">
                <h2 className="mainUItitle">UI/UX Design</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores dolore cumque, odio deserunt saepe et ex dolor
                  maiores ipsum perferendis alias praesentium totam, veritatis
                  error, ut ratione temporibus? Cupiditate, explicabo.
                </p>
              </div>
                <Image src={image1} alt="alt" width={250} height={100} className="ilstU"/>
            </div>
            <div className="icermaskUI">
              <div className="boxUI">
                <h2 className="mainUItitle">Web Development</h2>
                <p className="">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
                  perferendis cumque sequi quia quidem blanditiis consectetur.
                  Doloribus officiis, ipsam velit sapiente sint qui maxime vitae
                  impedit laboriosam, obcaecati recusandae. Enim.
                </p>
              </div>
              <button className="UIcontactBtn"><span style={{position:'relative',zIndex:'100'}}>Contact Us</span></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
