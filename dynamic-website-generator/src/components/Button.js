import React from "react";

const Button = ({ Text, X, Y, W, H, size, onClick }) => {
  const style = {
    position: "absolute",
    left: `${X}%`,
    top: `${Y}%`,
    width: `${W}%`,
    height: `${H}%`,
    fontSize: `${size}px`,
  };

  return (
    <button style={style} onClick={onClick}>
      {Text}
    </button>
  );
};

export default Button;
