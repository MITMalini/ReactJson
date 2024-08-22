import React from "react";

const Image = ({ Src, Alt, X, Y, W, H }) => {
  const style = {
    position: "absolute",
    left: `${X}%`,
    top: `${Y}%`,
    width: `${W}%`,
    height: "auto",
  };

  return <img src={Src} alt={Alt} style={style} />;
};

export default Image;
