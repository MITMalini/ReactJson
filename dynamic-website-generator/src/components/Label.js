import React from "react";

const Label = ({ Text, X, Y, W, size }) => {
  const style = {
    position: "absolute",
    left: `${X}%`,
    top: `${Y}%`,
    width: `${W}%`,
    fontSize: `${size}px`,
  };

  return <div style={style}>{Text}</div>;
};

export default Label;
