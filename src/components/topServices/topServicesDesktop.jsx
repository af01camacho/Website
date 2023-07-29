import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faGears,
  faPalette,
  faHandHoldingDollar,
  faLock,
  faSyncAlt,
} from "@fortawesome/free-solid-svg-icons";

const TopServicesDesktop = () => {
    const servicios = [
        {
          icon: faGears,
          title: "Soporte tecnico",
          info: "Nuestro equipo de expertos en soporte técnico está listo para ayudarte en cualquier momento. Brindamos soluciones rápidas y eficientes para mantener tu negocio en línea y funcionando sin problemas.",
        },
        {
          icon: faPalette,
          title: "Diseño web",
          info: "Creamos sitios web cautivadores y funcionales que reflejan la identidad de tu marca. Nuestros diseños atractivos y responsivos garantizan una experiencia de usuario excepcional en todos los dispositivos",
        },
        {
          icon: faGlobe,
          title: "Hosting y dominio",
          info: "Ofrecemos servicios de hosting confiables y seguros para alojar tu sitio web. También te ayudamos a elegir y registrar el dominio perfecto para que tu presencia en línea sea única y memorable.",
        },
        {
          icon: faHandHoldingDollar,
          title: "Precios accesibles",
          info: "Creemos que tener una presencia en línea no debería ser costoso. Ofrecemos planes asequibles y flexibles para que puedas obtener la mejor calidad y funcionalidad sin comprometer tu presupuesto.",
        },
        {
          icon: faSyncAlt,
          title: "Renovación",
          info: "¿Tu sitio web necesita un cambio? Nosotros nos encargamos de la renovación completa de tu plataforma en línea, agregando nuevas características y mejorando la usabilidad para mantenerla actualizada y relevante.",
        },
        {
          icon: faLock,
          title: "Seguridad",
          info: "La seguridad es nuestra prioridad. Implementamos medidas de protección avanzadas para mantener tu sitio web seguro contra amenazas y garantizar la confidencialidad de tus datos y la de tus clientes.",
        },
      ];
  return (
    <section className="pt-4 pb-8 px-6 bg-gray-100">
      <div className="flex items-center justify-center gap-2 mb-6 mt-2">
        <h1 className="text-gray-900 text-4xl font-extrabold leading-[54px]">¿Qué ofrecemos?</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {servicios.map((servicio, index) => (
          <div key={index} className="flex flex-col bg-white items-center h-[270px] p-4 shadow-lg rounded-lg">
            <span className="text-4xl text-primary-color mb-4 bg-[#E1EFFE] w-14 h-14 flex justify-center items-center rounded-lg">
              <FontAwesomeIcon icon={servicio.icon} color="#1A56DB" />
            </span>
            <h2 className="text-gray-900 text-lg font-semibold leading-snug mb-2">{servicio.title}</h2>
            <p className="text-gray-500 text-base font-normal leading-normal text-center">{servicio.info}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TopServicesDesktop