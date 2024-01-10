import { useContext } from "react";
import { CountryContext } from "../../contexts/countryContext";

interface PlanetOverview {
  content: string;
  source: string;
}

interface PlanetStructure {
  content: string;
  source: string;
}

interface PlanetGeology {
  content: string;
  source: string;
}

interface PlanetImages {
  planet: string;
  internal: string;
  geology: string;
}

interface PlanetData {
  name: string;
  overview: PlanetOverview;
  structure: PlanetStructure;
  geology: PlanetGeology;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: PlanetImages;
}

interface PlanetProps {
  planetData: PlanetData;
}

const PlanetComponent: React.FC<PlanetProps> = ({ planetData }) => {
  const {
    name,
    overview,
    structure,
    geology,
    rotation,
    revolution,
    radius,
    temperature,
    images,
  } = planetData;

  const { internalContent, setInternalContent } = useContext(CountryContext);

  return (
    <div className="bg-[#070724] text-white p-4 rounded-lg shadow-md h-svh">
      <div className="mb-6 flex justify-evenly pt-9">
        <div className="w-72">
          {!internalContent && (
            <img className="w-full mt-12" src={images.planet} alt="image" />
          )}
          {internalContent && (
            <img className="w-full mt-12" src={images.internal} alt="image" />
          )}
        </div>
        <div className="w-96 mt-12">
          <h2 className="text-7xl font-bold mb-8">{name}</h2>
          {!internalContent ? (
            <p>{overview.content}</p>
          ) : (
            <p>{structure.content}</p>
          )}

          <div className="mb-14 mt-8">
            Source: {"   "}
            <a
              className="text-blue-500 ml-2"
              href={overview.source}
              target="_blank"
              rel="noopener noreferrer"
            >
              Wikipediya
            </a>
            <a
              className="text-blue-500"
              href={structure.source}
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </div>

          <div
            className="internal"
            onClick={() => setInternalContent(!internalContent)}
          >
            {internalContent ? (
              <p className="bg-cyan-400 w-1/3 p-2 rounded-2xl ">02 Internal</p>
            ) : (
              <p className="bg-cyan-400 w-1/3 p-2 rounded-2xl ">01 Overview</p>
            )}
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="flex justify-evenly mb-17">
          <div className="border-slate-300 border-2 p-5">
            <h3 className="mb-1 font-semibold text-xs ">Rotation</h3>
            <p className="text-4xl tracking-tighter">
              {rotation.toUpperCase()}
            </p>
          </div>
          <div className="border-slate-300 border-2 p-5">
            <h3 className="mb-1 font-semibold text-xs ">Revolution</h3>
            <p className="text-4xl tracking-tighter">
              {revolution.toUpperCase()}
            </p>
          </div>
          <div className="border-slate-300 border-2 p-5">
            <h3 className="mb-1 font-semibold text-xs ">Radius</h3>
            <p className="text-4xl tracking-tighter">{radius.toUpperCase()}</p>
          </div>
          <div className="border-slate-300 border-2 p-5">
            <h3 className="mb-1 font-semibold text-xs ">Temperature</h3>
            <p className="text-4xl tracking-tighter">
              {temperature.toUpperCase()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetComponent;
