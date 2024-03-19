import React from "react";

function Landing({ children }) {
  return (
    <div style={{ width: "100vw" }} className="landing">
      {children}
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="wave wave4"></div>
    </div>
  );
}

export default Landing;
