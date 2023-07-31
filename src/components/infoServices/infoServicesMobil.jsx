import imghero from "../../assets/undraw_home_screen_re_640d.svg";
const InfoServicesMobil = () => {
  return (
    <div className="dark:bg-primary-color-dm   dark:bg-primary-color-md  flex-col justify-start items-center gap-2.5 ">
      <div className="self-stretch px-4 flex-col justify-start items-center gap-8 flex">
        <div className="self-stretch  flex-col justify-start items-start gap-4 flex">
          <h1 className="self-stretch dark:text-white text-gray-900 text-center text-3xl font-extrabold leading-[37.50px]">
            Conoce nuestros servicios
          </h1>
          <p className="self-stretch text-gray-500 dark:text-white text-base font-normal leading-normal">
            En nuestro sitio web, ofrecemos servicios de hosting líderes en el
            mercado, garantizando un rendimiento excepcional y confiabilidad
            para tus sitios web. Además, nuestro equipo de diseño crea sitios
            personalizados que reflejan tu marca de manera atractiva y
            funcional.
          </p>
          <p className="self-stretch text-gray-500 dark:text-white text-base font-normal leading-normal">
            Descubre nuestros servicios de hosting de alta calidad y diseño web
            personalizado. Potenciamos tu presencia en línea con soluciones
            confiables y atractivas para que alcances el éxito en la web.
          </p>
        </div>
        <div className=" justify-start items-start inline-flex">
          <img className="p-2.5 w-80" src={imghero} />
        </div>
      </div>
    </div>
  );
};

export default InfoServicesMobil;
