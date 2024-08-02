import Image from "next/image";
import image from "../../img/brand communication-amicoo.png";
export default function UIUXSection() {
  return (
    <>
      <div
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
          <div className="maskUI">
            <div className="icermaskUI">
              <Image src={image} alt="" width={100} height={100} />
              <div className="boxUI">
                <h2 className="mainUItitle">UI/UX Design</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores dolore cumque, odio deserunt saepe et ex dolor
                  maiores ipsum perferendis alias praesentium totam, veritatis
                  error, ut ratione temporibus? Cupiditate, explicabo.
                </p>
              </div>
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
              <button className="UIcontactBtn">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
