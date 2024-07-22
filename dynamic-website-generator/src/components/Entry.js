// import React from "react";

// const Entry = ({ id, X, Y, W, type = "text" }) => {
//   const style = {
//     position: "absolute",
//     left: `${X}%`,
//     top: `${Y}%`,
//     color: "black", // optional: text color
//     // padding: "5% 10%", // optional: padding
//     // borderRadius: "5%",
//   };

//   return <input id={id} type={type} style={style} />;
// };

// export default Entry;

import React from "react";

const Entry = ({ id, type = "text" }) => {
  return <input id={id} type={type} />;
};

export default Entry;
