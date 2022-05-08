import React from "react";

const ProgressBarCustom = () => {
  return (
    <div className="Bar-container">
      <div
        className="Bar"
        style={{
          backgroundImage: "linear-gradient(to right, #fc646d, #ff9047)",
        }}
      />
      <div className="Bar" style={{ backgroundColor: "#BEA8AA" }}></div>
      <div className="Bar" style={{ backgroundColor: "#BEA8AA" }}></div>
    </div>
  );
};

export default ProgressBarCustom;
