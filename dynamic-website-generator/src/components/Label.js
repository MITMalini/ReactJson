import React from "react";

const Label = ({ Text, X, Y, W, Size, Color }) => {
  const style = {
    position: "absolute",
    left: `${X}%`,
    top: `${Y}%`,
    width: `${W}%`,
    color: Color,
    fontSize: Size,
  };

  return <div style={style}>{Text}</div>;
};

export default Label;
