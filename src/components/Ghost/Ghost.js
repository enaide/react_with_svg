import Body from "../Body/Body";
import Eyes from "../Eyes/Eyes";

const Ghost = ({ id, texto, x, y , tx, ty, colour, onClick, onMouseOver, onMouseOut, active }) => {
  console.log({T: texto});
    return (<g id={id} onClick={onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut} >
      <Body id={id} x={x} y={y} tx={tx} ty={ty} colour={active ? '#9e9e9e': colour} texto={texto} />
      <Eyes x={x} y={y} />
    </g>)
};

  export default Ghost;