import React, { useState } from "react";

const ChartContext = React.createContext({
  amount: null,
  feeAmount: null,
  hasValue: false,
  onOver: (value) => {},
  onOut: () => {},
  onInterval: (value) => {}
});

export const ChartContextProvider = (props) => {
  const [amount, setAmount] = useState(parseFloat((Math.random() * 2.5).toFixed(2)));
  const [feeAmount, setFeeAmount] = useState(parseFloat((Math.random() * 2.5).toFixed(2)));
  const hasV = !!amount;

  const onOverHandler = (amount) => {
    setAmount(amount);
  };

  const onOutHandler = () => {
    setAmount(null);
  };
  const onIntervalHandler = (amount, feeAmount) => {
    setAmount(preAmount => preAmount = amount);
    setFeeAmount(preAmount => preAmount = feeAmount);
  };

  const contextValue = {
    amount,
    feeAmount,
    hasValue: hasV,
    onOver: onOverHandler,
    onOut: onOutHandler,
    onInterval: onIntervalHandler
  };

  return (
    <ChartContext.Provider value={contextValue}>
      {props.children}
    </ChartContext.Provider>
  );
};

export default ChartContext;