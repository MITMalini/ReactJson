// import React from "react";

// const Button = ({ Text, X, Y, W, H, size, onClick }) => {
//   const style = {
//     position: "absolute",
//     left: `${X}%`,
//     top: `${Y}%`,
//     width: `${W}%`,
//     height: `${H}%`,
//     fontSize: `${size}%`,
//   };

//   return (
//     <button style={style} onClick={onClick}>
//       {console.log("buttons", Text)}
//       {Text}
//     </button>
//   );
// };

// export default Button;
import React from "react";

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default Button;
