import { createContext, useState } from "react";

const TotalPriceContext = createContext({
  totalPrice: 0,
  setTotalPrice: (price) => {},
});

export function TotalPriceContextProvider(props) {
  const [currTotalPrice, setTotalPrice] = useState(0);

  function setTotalPriceHandler(price) {
    setTotalPrice(price);
  }

  const context = {
    totalPrice: currTotalPrice,
    setTotalPrice: setTotalPriceHandler,
  };

  return (
    <TotalPriceContext.Provider value={context}>
      {props.children}
    </TotalPriceContext.Provider>
  );
}

export default TotalPriceContext;
