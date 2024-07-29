import React from "react";

const Entry = ({ id, X, Y, W, H, type = "text" }) => {
  const style = {
    position: "absolute",
    left: `${X}%`,
    top: `${Y}%`,
    width: `${W}%`,
    height: `${H}%`,
  };

  return <input id={id} type={type} style={style} />;
};

export default Entry;
