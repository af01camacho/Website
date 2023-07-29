import React, { useState } from "react";

function CardsPrice() {
  const [showPriceInUSD, setShowPriceInUSD] = useState(false);
  const [showHostingAnual, setShowHostingAnual] = useState(false);

  const handleclick = () => {
    if (showPriceInUSD == false) {
      setShowPriceInUSD(true);
    } else {
      setShowPriceInUSD(false);
    }
  };

  const handleclickHostings = () => {
    if (showHostingAnual == false) {
      setShowHostingAnual(true);
    } else {
      setShowHostingAnual(false);
    }
  };

  return (
    <>
      <div className="p-2">
        <div className="flex flex-col items-center p-2">
          <h2 className="font-primary-font font-extrabold text-4xl uppercase ">
            Planes de Hosting Para Todo
          </h2>
          <span className="text-xl text-center font-primary-font">
            Con LiteSpeed de tu lado para sitios web rápidos y seguridad de la
            mano con Inmunify 360 hacemos que la gestión de tu hosting sea un
            juego de niños.
          </span>
        </div>
        <div className="grid grid-cols-3 place-items-center">
          <div className="h-80 bg-primary-color w-[395px] rounded-lg shadow-4 shadow-black">
            1
          </div>
          <div className="h-80 bg-primary-color w-[395px] rounded-lg">2</div>
          <div className="h-80 bg-primary-color w-[395px] rounded-lg">3</div>
        </div>
      </div>
    </>
  );
}

export default CardsPrice;
