import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Info } from "../../arrays/info";

export function SearchDomainDesktop() {
  return (
    <div className=" dark:text-white dark:bg-primary-color-dm text-center">
      <h2 className="text-4xl">¿Que te ofrecemos?</h2>
      <div className=" grid md:grid-cols-3  lg:grid-cols-3 gap-4 p-3 ">
        {Info.map((infos, index) => (
          <div className="" key={index}>
            <div className="flex flex-col items-center dark:bg-gray-600 dark:border-none p-4 border rounded-md">
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
