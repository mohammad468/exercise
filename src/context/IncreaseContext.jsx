import React, { useContext, useState } from "react";

const IncreaseContext = React.createContext({});

export const IncreaseContextProvider = ({ children }) => {
  const [increase, setIncrease] = useState(0);

  return (
    <IncreaseContext.Provider value={{ increase, setIncrease }}>
      {children}
    </IncreaseContext.Provider>
  );
};

export const useIncrease = () => useContext(IncreaseContext);