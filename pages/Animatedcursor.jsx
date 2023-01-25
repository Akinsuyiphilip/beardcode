import React from "react";
import AnimatedCursor from "react-animated-cursor";

// const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
//   ssr: false,
// });

export const AnimCursor = () => {
  return <AnimatedCursor innerSize={20} outerSize={45} />;
};
