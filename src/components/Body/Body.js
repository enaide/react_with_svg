import React from "react";

const Body = ({ id, x, y, tx, ty, colour, texto }) => (
    <g>
      <circle id={`circle_${id}`} cx={x} cy={y} r={50} fill={colour} />
      <rect id={`rect_${id}`} x={x - 50} y={y} width={100} height={80} fill={colour} />
      <text x={tx} y={ty} fill='red' >
        <tspan fill={texto<1 ? 'red':'green'} fontWeight="bold" fontSize='21px'>
          {`${texto!== null? texto: ''}`}</tspan>
      </text>
    </g>
  );

export default Body;