import Navbar from "./components/Navbar/Navbar";
import { data } from "./assets/data.js";
import PlanetComponent from "./components/Planet/Planet";
import { useContext } from "react";
import { CountryContext } from "./contexts/countryContext.js";

function App() {
  const { selectedPlanet } = useContext(CountryContext);

  function showPlanet(data) {
    let planets = data.find(
      (planet) => planet.name.toLowerCase() === selectedPlanet
    );
    return planets;
  }

  const planets = showPlanet(data);

  return (
    <div className="container mx-auto bg-[#070724]">
      <Navbar />
      {planets && <PlanetComponent planetData={planets} />}
    </div>
  );
}

export default App;
