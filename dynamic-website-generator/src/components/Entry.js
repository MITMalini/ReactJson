import React from "react";

const Entry = ({ Id, X, Y, W, H, Type, Placeholder }) => {
  const style = {
    position: "absolute",
    left: `${X}%`,
    top: `${Y}%`,
    width: `${W}%`,
    height: `${H}%`,
  };

  return <input id={Id} type={Type} style={style} placeholder={Placeholder} />;
};

export default Entry;
