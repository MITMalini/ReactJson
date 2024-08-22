import React from "react";
import { useNavigate } from "react-router-dom";
const Button = ({ Text, X, Y, W, H, Size, NextScreen, Icon }) => {
  const navigate = useNavigate();
  const handleAction = (action) => {
    navigate(`/${action}`);
    console.log(action);
  };
  const style = {
    position: "absolute",
    left: `${X}%`,
    top: `${Y}%`,
    width: `${W}%`,
    height: `${H}%`,
    fontSize: `${Size}px`,
    icon: Icon,
  };

  const iconStyle = {
    width: "10em", // Adjust size as needed
    height: "10em", // Adjust size as needed
  };

  return (
    <button style={style} onClick={() => handleAction(NextScreen)}>
      {Icon && <img src={Icon} alt="icon" style={iconStyle} />} {Text}
    </button>
  );
};

export default Button;
