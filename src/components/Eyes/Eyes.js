import React from "react";

const Eyes = ({ x, y, onClick }) => (
    <g onClick={onClick}>
      <circle cx={x - 18} cy={y} r={20} fill="white" />
      <circle cx={x + 18} cy={y} r={20} fill="white" />
      <circle cx={x - 10} cy={y} r={10} fill="black" />
      <circle cx={x + 10} cy={y} r={10} fill="black" />
    </g>
  );

export default Eyes;