import React from "react";

const Label = ({ Text, X, Y, W, Size, Color, fontWeight }) => {
  const style = {
    position: "absolute",
    left: `${X}%`,
    top: `${Y}%`,
    width: `${W}%`,
    color: Color,
    fontSize: Size,
    fontWeight: fontWeight,
  };

  return <div style={style}>{Text}</div>;
};

export default Label;
