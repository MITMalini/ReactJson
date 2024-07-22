// import React from "react";

// const Label = ({ Text, X, Y, W, size }) => {
//   const style = {
//     position: "absolute",
//     left: `${X}%`,
//     top: `${Y}%`,
//     width: `${W}%`,
//     fontSize: `${size}%`,
//   };

//   return <h1 style={style}>{Text}</h1>;
// };

// export default Label;
import React from "react";

const Label = ({ text, size }) => {
  const style = {
    fontSize: `${size}px`,
  };

  return <div style={style}>{text}</div>;
};

export default Label;
