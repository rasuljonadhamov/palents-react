import { useContext } from "react";
import { Link } from "react-router-dom";
import { CountryContext } from "../../contexts/countryContext";

const Navbar = () => {
  const { setSelectedPlanet } = useContext(CountryContext);

  return (
    <nav className="flex justify-between py-4 ">
      <Link to="/" className="text-white ">
        THE PLANETS
      </Link>
      <ul className="flex ">
        <li>
          <Link
            onClick={(e) => setSelectedPlanet(e.target.innerHTML)}
            to="/"
            className="no-underline hover:underline uppercase text-white  px-3"
          >
            mercury
          </Link>
          <Link
            onClick={(e) => setSelectedPlanet(e.target.innerHTML)}
            to="/"
            className="no-underline hover:underline uppercase text-white px-3 "
          >
            venus
          </Link>
          <Link
            onClick={(e) => setSelectedPlanet(e.target.innerHTML)}
            to="/"
            className="no-underline hover:underline uppercase text-white px-3 "
          >
            earth
          </Link>
          <Link
            onClick={(e) => setSelectedPlanet(e.target.innerHTML)}
            to="/"
            className="no-underline hover:underline uppercase text-white px-3 "
          >
            mars
          </Link>
          <Link
            onClick={(e) => setSelectedPlanet(e.target.innerHTML)}
            to="/"
            className="no-underline hover:underline uppercase text-white px-3 "
          >
            jupiter
          </Link>
          <Link
            onClick={(e) => setSelectedPlanet(e.target.innerHTML)}
            to="/"
            className="no-underline hover:underline uppercase text-white px-3"
          >
            saturn
          </Link>
          {/* <Link
            onClick={(e) => setSelectedPlanet(e.target.innerHTML)}
            to="/"
            className="no-underline hover:underline uppercase text-white px-3"
          >
            uranus
          </Link> */}
          <Link
            onClick={(e) => setSelectedPlanet(e.target.innerHTML)}
            to="/"
            className="no-underline hover:underline uppercase text-white px-3"
          >
            neptune
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
