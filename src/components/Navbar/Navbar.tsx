import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between py-4">
      <Link to="/" className="text-white">
        THE PLANETS
      </Link>
      <ul className="flex ">
        <li>
          <Link
            to="/"
            className="no-underline hover:underline uppercase text-white  px-3"
          >
            mercury
          </Link>
          <Link
            to="/"
            className="no-underline hover:underline uppercase text-white px-3 "
          >
            venus
          </Link>
          <Link
            to="/"
            className="no-underline hover:underline uppercase text-white px-3 "
          >
            earth
          </Link>
          <Link
            to="/"
            className="no-underline hover:underline uppercase text-white px-3 "
          >
            mars
          </Link>
          <Link
            to="/"
            className="no-underline hover:underline uppercase text-white px-3 "
          >
            jupiter
          </Link>
          <Link
            to="/"
            className="no-underline hover:underline uppercase text-white px-3"
          >
            saturn
          </Link>
          <Link
            to="/"
            className="no-underline hover:underline uppercase text-white px-3"
          >
            uranus
          </Link>
          <Link
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
