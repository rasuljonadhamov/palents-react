import { useState } from "react";
import { createContext } from "react";

export const CountryContext = createContext(null);

export const CountryProvider = ({ children }) => {
  const [selectedPlanet, setSelectedPlanet] = useState("mercury");

  return (
    <CountryContext.Provider value={{ selectedPlanet, setSelectedPlanet }}>
      {children}
    </CountryContext.Provider>
  );
};
