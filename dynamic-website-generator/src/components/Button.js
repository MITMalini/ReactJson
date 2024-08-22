import React from "react";

const Button = ({ Text, X, Y, W, H, Size, onClick, icon }) => {
  const style = {
    position: "absolute",
    left: `${X}%`,
    top: `${Y}%`,
    width: `${W}%`,
    height: `${H}%`,
    fontSize: `${Size}px`,
    icon: icon,
  };

  const iconStyle = {
    width: "10em", // Adjust size as needed
    height: "10em", // Adjust size as needed
  };

  return (
    <button style={style} onClick={onClick}>
      {icon && <img src={icon} alt="icon" style={iconStyle} />} {Text}
    </button>
  );
};

export default Button;
