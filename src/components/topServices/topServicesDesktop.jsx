import {serviciosApi} from '../../arrays/topServicesDomain'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopServicesDesktop = () => {
 
  return (
    <section className="pt-4 pb-8 px-6 bg-gray-100 dark:bg-primary-color-dm dark:text-white">
      <div className="flex items-center justify-center gap-2 mb-6 mt-2">
        <h1 className="dark:text-white text-gray-900 text-4xl font-extrabold leading-[54px]">
          ¿Qué ofrecemos?
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {serviciosApi.map((servicio, index) => (
          <div
            key={index}
            className="flex flex-col dark:bg-gray-700  bg-white items-center h-[270px] p-4 shadow-lg rounded-lg"
          >
            <span className="text-4xl text-primary-color mb-4 bg-[#E1EFFE] w-14 h-14 flex justify-center items-center rounded-lg">
              <FontAwesomeIcon icon={servicio.icon} color="#1A56DB" />
            </span>
            <h2 className="dark:text-white text-gray-900 text-lg font-semibold leading-snug mb-2">
              {servicio.title}
            </h2>
            <p className="dark:text-white text-gray-500 text-base font-normal leading-normal text-center">
              {servicio.info}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopServicesDesktop;
