import React from "react";

const Label = ({ Text, X, Y, W, Size, Color, FontWeight }) => {
  const style = {
    position: "absolute",
    left: `${X}%`,
    top: `${Y}%`,
    width: `${W}%`,
    color: Color,
    fontSize: Size,
    fontWeight: FontWeight,
  };

  return <div style={style}>{Text}</div>;
};

export default Label;
