import Navbar from "./components/Navbar/Navbar";
import { data } from "./assets/data.js";
import PlanetComponent from "./components/Planet/Planet";
import { useContext } from "react";
import { CountryContext } from "./contexts/countryContext.js";

function App() {
  const { selectedPlanet } = useContext(CountryContext);

  function showPlanet() {
    let planet = data.find(
      (planet) => planet.name.toLowerCase() === selectedPlanet
    );
    return planet;
  }

  const planet = showPlanet();

  return (
    <div className="container mx-auto bg-[#070724]">
      <Navbar />
      {planet && <PlanetComponent planetData={planet} />}
    </div>
  );
}

export default App;
