import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faGears,
  faPalette,
  faHandHoldingDollar,
  faLock,
  faSyncAlt,
} from "@fortawesome/free-solid-svg-icons";

function CardInfoSection() {
  const servicios = [
    {
      icon: faGears,
      title: "Hosting Start",
      info: "Ideal para pequeños negocios",
    },
    {
      icon: faPalette,
      title: "Hosting Premium",
      info: "Ideal para Grandes empresas",
    },
    {
      icon: faGlobe,
      title: "Hosting Deluxe",
      info: "Ideal para tiendas virtuales",
    },
  ];
  return (
    <section className="py-4 px-4">
      <div className="flex items-center justify-center gap-2 mb-6 mt-4">
        <h1 className="font-bold text-center text-4xl">Hosting Web basico</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {servicios.map((servicio, index) => (
          <div
            key={index}
            className="flex flex-col items-center border h-[700px] justify-around bg-white border-gray-300 rounded p-4"
          >
            <div className="flex flex-col items-center">
              <span className="text-4xl text-primary-color mb-4">
                <FontAwesomeIcon icon={servicio.icon} />
              </span>
              <h2 className="text-xl font-semibold mb-2">{servicio.title}</h2>
              <p className="text-gray-600 text-sm text-center">
                {servicio.info}
              </p>
            </div>

            {/* Comprar */}
            <button className="text-black bg-primary-color p-2 w-3/4 text-white">
              Adquirir
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CardInfoSection;
