import { useState } from "react";
import { createContext } from "react";

export const CountryContext = createContext(null);

export const CountryProvider = ({ children }) => {
  const [selectedPlanet, setSelectedPlanet] = useState("mercury");
  const [internalContent, setInternalContent] = useState(false);

  return (
    <CountryContext.Provider
      value={{
        selectedPlanet,
        setSelectedPlanet,
        setInternalContent,
        internalContent,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};
