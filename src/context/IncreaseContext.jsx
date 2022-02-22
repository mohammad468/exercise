import React from "react";

const IncreaseContext = React.createContext({});

export const IncreaseContextProvider = ({ children }) => {
  const [increase, setIncrease] = useState();

  return (
    <CoinsContext.Provider value={{ increase, setIncrease }}>
      {children}
    </CoinsContext.Provider>
  );
};

export const useIncrease = () => useContext(IncreaseContext);
