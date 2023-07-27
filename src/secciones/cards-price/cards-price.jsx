import React, { useState } from "react";

function CardsPrice() {
  const cardsprice = [
    {
      name: "Hosting Starter",
      desc: "Hosting ideal para pequeñas empresas",
      price_col: "15.000",
      price_usd: "3,75",
      url: "",
    },
  ];

  const [showPriceInUSD, setShowPriceInUSD] = useState(false);

  return (
    <>
      <h2 className="text-4xl font-extrabold font-primary-font text-center py-5">
        Planes de hosting web
      </h2>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 grid-cols-1 place-content-center gap-2 place-items-center">
        <div className="relative h-80 md:w-3/4 lg:w-[390px] w-3/4 rounded-md bg-white shadow-2xl">
          <div className="ribbon absolute h-40 w-40 -top-2 -left-2  overflow-hidden before:absolute before:top-0 before:right-0 before:border-4 before:border-blue-500  after:absolute after:bottom-0 after:left-0 after:border-4 after:border-blue-500">
            <div className="absolute -left-14 top-10 w-60 bg-gradient-to-br from-blue-600 via-blue-400 to-blue-500 py-2.5 text-center text-white shadow-md -rotate-45">
              40% descuento
            </div>
          </div>
        </div>
        <div className="relative h-80 md:w-3/4 lg:w-[390px] w-3/4 rounded-md bg-white shadow-2xl">
          <div className="ribbon absolute h-40 w-40 -top-2 -left-2  overflow-hidden before:absolute before:top-0 before:right-0 before:border-4 before:border-red-500  after:absolute after:bottom-0 after:left-0 after:border-4 after:border-red-500">
            <div className="absolute -left-14 top-10 w-60 bg-gradient-to-br from-red-600 via-red-400 to-red-500 py-2.5 text-center text-white shadow-md -rotate-45">
              40% descuento
            </div>
          </div>
        </div>
        <div className="relative h-80 md:w-3/4 lg:w-[390px] w-3/4 rounded-md bg-white shadow-2xl">
          <div className="ribbon absolute h-40 w-40 -top-2 -left-2  overflow-hidden before:absolute before:top-0 before:right-0 before:border-4 before:border-blue-500  after:absolute after:bottom-0 after:left-0 after:border-4 after:border-blue-500">
            <div className="absolute -left-14 top-10 w-60 bg-gradient-to-br from-blue-600 via-blue-400 to-blue-500 py-2.5 text-center text-white shadow-md -rotate-45">
              40% descuento
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardsPrice;
