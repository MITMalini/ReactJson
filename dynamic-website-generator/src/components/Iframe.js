import React from "react";

const Iframe = ({ src, X, Y, W, H, border }) => {
  const style = {
    position: "absolute",
    left: `${X}%`,
    top: `${Y}%`,
    width: `${W}%`,
    height: `${H}%`,
    border: border || "none", // Default to no border if not specified
  };

  return <iframe src={src} style={style} title="iframe-content" />;
};

export default Iframe;
