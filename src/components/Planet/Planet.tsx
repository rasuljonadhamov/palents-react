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

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{name}</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Overview</h3>
        <p>{overview.content}</p>
        <a
          className="text-blue-500"
          href={overview.source}
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Structure</h3>
        <p>{structure.content}</p>
        <a
          className="text-blue-500"
          href={structure.source}
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Geology</h3>
        <p>{geology.content}</p>
        <a
          className="text-blue-500"
          href={geology.source}
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Rotation</h3>
        <p>{rotation}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Revolution</h3>
        <p>{revolution}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Radius</h3>
        <p>{radius}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Temperature</h3>
        <p>{temperature}</p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-semibold">Planet Image</h3>
          <img className="w-full" src={images.planet} alt={`Planet ${name}`} />
        </div>
        <div>
          <h3 className="text-xl font-semibold">Internal Structure</h3>
          <img
            className="w-full"
            src={images.internal}
            alt={`Internal Structure of ${name}`}
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold">Geology Image</h3>
          <img
            className="w-full"
            src={images.geology}
            alt={`Geology of ${name}`}
          />
        </div>
      </div>
    </div>
  );
};

export default PlanetComponent;
