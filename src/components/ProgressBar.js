import React from "react";

const ProgressBar = (props) => {
  let eachBarRating = props.rating / 33.33;
  let decimalPart = Math.floor(eachBarRating);
  let fractionalPart = parseFloat((eachBarRating - decimalPart).toFixed(1));
  let computedStyle1 = {};
  let computedStyle2 = {};
  computedStyle1 = { background: props.color, width: props.rating };
  computedStyle2 = { background: "#C3B4B5", width: 100 - props.rating };

  const render = (value) => {
    let structureRender = { decimal: "", fractional: "" };
    if (decimalPart === value) {
      structureRender.decimal = (
        <div style={computedStyle1}>{props.children}</div>
      );
    }
    if (decimalPart === value && fractionalPart === 0) {
      structureRender.fractional = (
        <div style={computedStyle2}>{props.children}</div>
      );
    }
    if (decimalPart === value && fractionalPart > 0 && fractionalPart < 1) {
      console.log(computedStyle2);
      structureRender.fractional = (
        <div style={computedStyle2}>{props.children}</div>
      );
    }
    return (
      <>
        {structureRender.decimal}
        {structureRender.fractional}
      </>
    );
  };
  return (
    <div className="bar-container">
      {render(1)}
      {render(2)}
      {render(3)}
    </div>
  );
};

export default ProgressBar;
