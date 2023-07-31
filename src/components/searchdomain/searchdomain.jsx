import {
  faEarthAmericas,
  faGlobe,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function SearchDomainDesktop() {
  const info = [
    {
      title: "Hosting Start",
      desc: "Ideal para pequeñas empresas",
      size: "2GB",
      span: "¡Explora nuestro conjunto de paquetes para dar vida a tu presencia digital! ¿Te preguntas por dónde comenzar o qué herramientas utilizar para lanzar tu proyecto en internet? No busques más, hemos diseñado una gama de planes ideales para impulsar tu historia digital. Nuestro hosting seguro y confiable te proporcionará la estabilidad necesaria para que tu proyecto se eleve a nuevas alturas en la web.!",

      price: "COP$15.000",
    },
    {
      title: "Hosting Plus",
      desc: "Ideal para grandes empresas",
      span: "¡Explora nuestro conjunto de paquetes para dar vida a tu presencia digital! ¿Te preguntas por dónde comenzar o qué herramientas utilizar para lanzar tu proyecto en internet? No busques más, hemos diseñado una gama de planes ideales para impulsar tu historia digital. Nuestro hosting seguro y confiable te proporcionará la estabilidad necesaria para que tu proyecto se eleve a nuevas alturas en la web.!",

      price: "COP$45.000",
    },
    {
      title: "Hosting Premium",
      desc: "Ideal para tiendas virtuales",
      span: "¡Explora nuestro conjunto de paquetes para dar vida a tu presencia digital! ¿Te preguntas por dónde comenzar o qué herramientas utilizar para lanzar tu proyecto en internet? No busques más, hemos diseñado una gama de planes ideales para impulsar tu historia digital. Nuestro hosting seguro y confiable te proporcionará la estabilidad necesaria para que tu proyecto se eleve a nuevas alturas en la web.!",

      price: "COP$35.000",
    },
  ];
  return (
    <div className=" dark:text-white dark:bg-primary-color-dm text-center">
      <h2 className="text-4xl">¿Que te ofrecemos?</h2>
      <div className=" grid md:grid-cols-3  lg:grid-cols-3 gap-4 p-3 ">
        {info.map((infos, index) => (
          <div className="" key={index}>
            <div className="flex flex-col items-center  dark:bg-gray-600 dark:border-none p-2 border rounded-md">
              <h2 className="bg-btn-color w-full rounded-lg p-3 text-2xl font-semibold uppercase text-white">
                {infos.title}
              </h2>
              <h3 className="text-xl mt-4 font-light">{infos.desc}</h3>
              <h2 className="text-2xl pt-10">Planes desde</h2>
              <h4 className="text-4xl font-light pb-6">{infos.price}</h4>
              <span className="font-semibold dark:text-white text-sm mb-6">
                {infos.span}
              </span>
              <button className="bg-btn-color w-3/4 p-2 rounded-md text-xl text-white">
                Contratar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SearchDomainTablet() {
  return <></>;
}

export function SearchDomainMobile() {
  return <></>;
}
