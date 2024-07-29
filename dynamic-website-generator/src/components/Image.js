import React from "react";

const Image = ({ src, alt, X, Y, W, H }) => {
  const style = {
    position: "absolute",
    left: `${X}%`,
    top: `${Y}%`,
    width: `${W}%`,
    height: "auto",
  };

  return <img src={src} alt={alt} style={style} />;
};

export default Image;
