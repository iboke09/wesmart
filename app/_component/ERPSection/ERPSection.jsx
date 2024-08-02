import styles from "./ERPSection.module.css";
import Image from "next/image";
import image from '../../img/enterprise-resource-planning-holographic-interface.jpg'
const ERPSection = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "var(--main-alt-color1)",
        transition: "0.7s",
        marginTop: "200px",
        textAlign: "center",
        marginBottom: "200px",
      }}
    >
      <h1 className="headerE">ERP Systems</h1>
      <div className="container ERP">
        <div className="maskERP" >
          <div className="icermask">
            <div className="boxERP">
              <h2 className="mainERPtitle">Sap Systems</h2>
              <p className="">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
                perferendis cumque sequi quia quidem blanditiis consectetur.
                Doloribus officiis, ipsam velit sapiente sint qui maxime vitae
                impedit laboriosam, obcaecati recusandae. Enim.
              </p>
            </div>
            <button className="ERPcontactBtn">Contact Us</button>
          </div>
          <div className="icermask">
            <Image src={image} alt="alt" width={100} height={100} />
            <div className="boxERP">
              <h2 className="mainERPtitle">Skada Systems</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores dolore cumque, odio deserunt saepe et ex dolor
                maiores ipsum perferendis alias praesentium totam, veritatis
                error, ut ratione temporibus? Cupiditate, explicabo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ERPSection;
