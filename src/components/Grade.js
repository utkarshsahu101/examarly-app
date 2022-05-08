import React from "react";
import "../Modal/Modal.css";
import ProgressBar from "./ProgressBar";

const Grade = (props) => {
  return (
    <div className="grade">
      <>{props?.grade?.parameter}</>
      <ProgressBar color={props?.grade?.color} rating={props?.grade?.rating} />
    </div>
  );
};

export default Grade;
