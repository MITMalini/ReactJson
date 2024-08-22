import React from "react";

const Iframe = ({ Src, X, Y, W, H, Border }) => {
  const style = {
    position: "absolute",
    left: `${X}%`,
    top: `${Y}%`,
    width: `${W}%`,
    height: `${H}%`,
    border: Border || "none", // Default to no border if not specified
  };

  return <iframe src={Src} style={style} title="iframe-content" />;
};

export default Iframe;
