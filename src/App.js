import React, { useState, useEffect, useContext } from "react";
import Ghost from "./components/Ghost/Ghost";
import LineChart from "./components/LineChart/LineChart";
import ScatterChart from "./components/ScatterChart/ScatterChart";
import ChartContext from "./components/store/chart-context";

import "./index.css";

function App() {
  const [isActive, setIsActive] = useState("");
  const {amount, feeAmount, onInterval, onOver}= useContext(ChartContext);

  useEffect(() => {    
    const interval = setInterval(()=>{      
      const amount = parseFloat((Math.random() * 2.5).toFixed(2));
      const feeAmount = parseFloat((Math.random() * 2.5).toFixed(2));
      onInterval(amount, feeAmount);
    }, 10000);
    
    return ()=>{      
      clearInterval(interval);
    }
  }, [onInterval]);

  const controlProps = (id, tx, ty) => ({
    id,
    active: isActive.includes(id),
    onMouseOver: mouseOverHandler,
    onMouseOut: mouseOutHandler,
    tx: tx !== undefined ? tx : "10mm",
    ty: ty !== undefined ? ty : "2.8cm",
  });

  const mouseOverHandler = (event) => {
    const amount = parseFloat((Math.random() * 2.5).toFixed(2));
    onOver(amount);
    setIsActive(event.target.id);
  };

  const mouseOutHandler = (event) => {
    // onOut();
    setIsActive("");    
  };

  const clickHandler = (event) => {
    alert("hi!!!");
  };

  return (
    <div className="App" style={{ display: "flex", justifyContent: "center", alignItems: "start" }} >
      <div style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }} >
        <h1 style={{
            background: "#e2e2e6",
            fontWeight: "500",
            padding: "10px",
            borderRadius: "10px",
          }} >
          Demo <span style={{ color: "blue" }}>AI</span>nwater
        </h1>
        <svg viewBox="0 0 200 200" style={{ width: "50%", height: 300 }}>
          <Ghost
            {...controlProps("ghost1")}
            x={60}
            y={60}
            colour="blue"
            texto={amount}
            onClick={clickHandler}
          />
          <Ghost
            {...controlProps("ghost2", "32mm", "3.8cm")}
            x={140}
            y={100}
            colour="#ff00fb"
            texto={feeAmount}
            onClick={() => alert("hello")}
          />
        </svg>
      </div>
      <div style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          marginTop: "30px",
        }} >
        <LineChart />
        <ScatterChart />
      </div>
    </div>
  );
}

export default App;
