import React from "react";
import theme from "./Theme"; // Import the theme

const Label = ({ Text, X, Y, W, Size }) => {
  const style = {
    position: "absolute",
    left: `${X}%`,
    top: `${Y}%`,
    width: `${W}%`,
    fontSize: theme.fontSize.text,
    color: theme.colors.text.primary,
  };

  return <div style={style}>{Text}</div>;
};

export default Label;
