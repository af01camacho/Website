const InfoServices = () => {
  return (
    <section className="w-full h-[470px] py-15 px-10 dark:bg-primary-color-dm dark:text-white flex-col justify-start items-center inline-flex">
      <div className="h-[450px] flex-col items-center flex">
        <div className="self-stretch h-[450px] items-center gap-16 inline-flex">
          <div className="grow shrink basis-0 flex-col items-start gap-4 inline-flex">
            <h1 className="dark:text-white text-gray-900 text-4xl font-extrabold leading-[54px]">
              Conoce nuestros servicios
            </h1>
            <p className="text-gray-500 dark:text-white text-lg font-normal leading-[27px]">
              En nuestro sitio web, ofrecemos servicios de hosting líderes en el
              mercado, garantizando un rendimiento excepcional y confiabilidad
              para tus sitios web. Además, nuestro equipo de diseño crea sitios
              personalizados que reflejan tu marca de manera atractiva y
              funcional.
            </p>
            <p className="text-gray-500 dark:text-white text-lg font-normal leading-[27px]">
              Descubre nuestros servicios de hosting de alta calidad y diseño
              web personalizado. Potenciamos tu presencia en línea con
              soluciones confiables y atractivas para que alcances el éxito en
              la web.
            </p>
          </div>
          <div className="grow shrink basis-0 h-[411px] justify-start items-start gap-1 flex">
            <img
              className="grow shrink basis-0 w-[255px] self-stretch p-4 rounded-lg"
              src="https://via.placeholder.com/296x411"
            />
            <div className="grow shrink basis-0 h-[440px] pt-9 justify-start items-start flex">
              <img
                className="grow shrink basis-0 h-[405px] rounded-lg"
                src="https://via.placeholder.com/296x411"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoServices;
