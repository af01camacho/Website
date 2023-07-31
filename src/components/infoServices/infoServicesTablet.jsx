import React from 'react'
import imgHero from  '../../assets/undraw_home_screen_re_640d.svg'

const InfoServicesTablet = () => {
  return (
    <div className="dark:bg-primary-color-dm dark:bg-primary-color-md grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-2.5">
        <div className="px-4 flex flex-col justify-start items-start gap-8">
            <div className="flex flex-col justify-start items-start gap-4">
                <h1 className="dark:text-white text-gray-900 text-4xl font-extrabold leading-[54px]">Conoce nuestros servicios</h1>
                <p className="dark:text-white text-base font-normal leading-normal">
                    En nuestro sitio web, ofrecemos servicios de hosting líderes en el
                    mercado, garantizando un rendimiento excepcional y confiabilidad
                    para tus sitios web. Además, nuestro equipo de diseño crea sitios
                    personalizados que reflejan tu marca de manera atractiva y
                    funcional.
                </p>
                <p className="dark:text-white text-base font-normal leading-normal">
                    Descubre nuestros servicios de hosting de alta calidad y diseño web
                    personalizado. Potenciamos tu presencia en línea con soluciones
                    confiables y atractivas para que alcances el éxito en la web.
                </p>
            </div>
        </div>
        <div className="justify-center items-center md:justify-start md:items-start inline-flex">
            <img className="p-2.5 w-80 md:w-80" src={imgHero} alt="Imagen de servicios"/>
        </div>
    </div>
  )
}

export default InfoServicesTablet