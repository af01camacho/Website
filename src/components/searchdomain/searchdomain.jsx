import { faEarthAmericas, faGlobe, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function SearchDomainDesktop() {
  const info = [
    {
      title: "Hosting Start",
      desc: "Ideal para pequeñas empresas",
      size: "2GB",
      span: "¡Explora nuestro conjunto de paquetes para dar vida a tu presencia digital! ¿Te preguntas por dónde comenzar o qué herramientas utilizar para lanzar tu proyecto en internet? No busques más, hemos diseñado una gama de planes ideales para impulsar tu historia digital. Nuestro hosting seguro y confiable te proporcionará la estabilidad necesaria para que tu proyecto se eleve a nuevas alturas en la web. Descubre cómo puedes llevar tu idea al siguiente nivel con nuestros paquetes personalizables y encuentra el plan perfecto para iniciar tu emocionante viaje digital. ¡Es hora de dar rienda suelta a tu creatividad y conquistar el mundo en línea!",

      price: "$15.000 COP",
    },
    {
      title: "Hosting Plus",
      desc: "Ideal para grandes empresas",
      span: "¡Explora nuestro conjunto de paquetes para dar vida a tu presencia digital! ¿Te preguntas por dónde comenzar o qué herramientas utilizar para lanzar tu proyecto en internet? No busques más, hemos diseñado una gama de planes ideales para impulsar tu historia digital. Nuestro hosting seguro y confiable te proporcionará la estabilidad necesaria para que tu proyecto se eleve a nuevas alturas en la web. Descubre cómo puedes llevar tu idea al siguiente nivel con nuestros paquetes personalizables y encuentra el plan perfecto para iniciar tu emocionante viaje digital. ¡Es hora de dar rienda suelta a tu creatividad y conquistar el mundo en línea!",

      price: "$45.000 COP",
    },
    {
      title: "Hosting Premium",
      desc: "Ideal para tiendas virtuales",
      span: "¡Explora nuestro conjunto de paquetes para dar vida a tu presencia digital! ¿Te preguntas por dónde comenzar o qué herramientas utilizar para lanzar tu proyecto en internet? No busques más, hemos diseñado una gama de planes ideales para impulsar tu historia digital. Nuestro hosting seguro y confiable te proporcionará la estabilidad necesaria para que tu proyecto se eleve a nuevas alturas en la web. Descubre cómo puedes llevar tu idea al siguiente nivel con nuestros paquetes personalizables y encuentra el plan perfecto para iniciar tu emocionante viaje digital. ¡Es hora de dar rienda suelta a tu creatividad y conquistar el mundo en línea!",

      price: "$35.000 COP",
    },
  ];
  return (
    <div className=" dark:text-white dark:bg-primary-color-dm text-center font-second-font pt-10 pb-56">
      <div>
        <h2 className="text-4xl">¿Que te ofrecemos?</h2>
      </div>
      <div className=" grid   grid-cols-3 gap-4 p-3 place-items-center">
        {info.map((infos, index) => (
          <div className="" key={index}>
            <div className="bg-white shadow-2xl  dark:bg-gray-600 dark:border-none p-5 flex flex-col justify-between border rounded-md">
              <h2 className="bg-btn-color rounded-lg p-3 text-3xl font-bold uppercase text-white">
                {infos.title}
              </h2>
              <h3 className="text-xl font-light">{infos.desc}</h3>
              <h2 className="text-2xl pt-10">Planes desde</h2>
              <h4 className="text-4xl font-light pb-10">{infos.price}</h4>
              <span className="font-semibold dark:text-span-color text-sm p-2">
                {infos.span}
              </span>
              <button className="bg-btn-color p-2 text-xl text-white">
                Contratar
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 bg-bg-primary dark:bg-gray-700">
        <h2 className="text-4xl">Adquiere tu Hosting web fácil</h2>
        <div className="grid grid-cols-3 gap-4 p-5">
          <div className="shadow-md rounded-xl  bg-white flex flex-col gap-2 pt-10 items-center dark:bg-gray-600">
            <div className="bg-primary-color-dm  h-[80px] w-[80px] rounded-full  flex items-center justify-center text-white">
              <FontAwesomeIcon size="2xl" icon={faGlobe} />
            </div>
            <h2 className="text-2xl font-semibold">Registra tus dominios</h2>
          </div>
          <div className="shadow-md rounded-xl  bg-white flex flex-col gap-2 pt-10 items-center dark:bg-gray-600">
            <div className="bg-primary-color-dm  h-[80px] w-[80px] rounded-full  flex items-center justify-center text-white">
            <FontAwesomeIcon size="2xl" icon={faPaperPlane} />
            </div>
            <h2 className="text-2xl font-semibold">Publica tu sitio web</h2>
          </div>
          <div className="h-80 shadow-md rounded-xl  bg-white flex flex-col gap-2 pt-10 items-center dark:bg-gray-600">
            <div className="bg-primary-color-dm  h-[80px] w-[80px] rounded-full  flex items-center justify-center text-white">
            <FontAwesomeIcon size="2xl" icon={faEarthAmericas} />
            </div>
            <h2 className="text-2xl font-semibold">Hazlo visite al mundo</h2>
          </div>
          
        </div>
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
