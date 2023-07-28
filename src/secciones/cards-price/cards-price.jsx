import React, { useState } from "react";

function CardsPrice() {
  const cardsprice = [
    {
      mensual: {
        hostingstart: {
          name: "Hosting Start",
          desc: "Ideal para pequeñas empresas",
          carate: {
            stronge: "1GB",
            tranfer: "1TB",
            control: "Plesk",
            backup: "Si",
            ssl: "Gratis",
            db: "4",
            domains: "1",
            aditionaldomains: "Ilimitados",
            emails: "Ilimitados",
            webmail: "Si",
            cpu: "2 Core",
            ram: "1GB",
            ServerWeb: "LiteSpeed",
            AntiMalware: "Imunify360",
            WPK: "Si",
            support: "4/7",
          },
          price: "15.000",
        },
      },
      anual: {
        hostingstart: {
          name: "Hosting Start",
          desc: "Ideal para pequeñas empresas",
          carate: {
            stronge: "1GB",
            tranfer: "1TB",
            control: "Plesk",
            backup: "Si",
            ssl: "Gratis",
            db: "4",
            domains: "1",
            aditionaldomains: "Ilimitados",
            emails: "Ilimitados",
            webmail: "Si",
            cpu: "2 Core",
            ram: "1GB",
            ServerWeb: "LiteSpeed",
            AntiMalware: "Imunify360",
            WPK: "Si",
            support: "4/7",
          },
          price: "180.000",
        },
      },
    },
  ];

  const [showPriceInUSD, setShowPriceInUSD] = useState(false);

  return (
    <>
      <h2 className="text-4xl font-extrabold font-primary-font text-center py-5">
        Planes Hosting
      </h2>
      <div className="grid md:grid-cols-1  lg:grid-cols-3 grid-cols-1 place-content-center gap-5 p-5 place-items-center">
        <div className="relative   h-80 md:w-3/4 lg:w-[310px] w-full rounded-md bg-white shadow-2xl">
          <div className="ribbon absolute h-40 w-40 -top-5 -left-2  overflow-hidden before:absolute before:top-0 before:right-0 before:border-4 before:border-blue-500  after:absolute after:bottom-0 after:left-0 after:border-4 after:border-blue-500">
            <div className="absolute -left-14 top-10 w-60 bg-gradient-to-br from-blue-600 via-blue-400 to-blue-500 py-2.5 text-center text-white shadow-md -rotate-45">
              <span className="">40% de descuento</span>
            </div>
          </div>
          <div className="flex items-center justify-center h-[50%] w-full">
            {cardsprice.map((price, index) => (
              <div
                className="flex flex-col justify-center items-center pl-5"
                key={index}
              >
                <h2 className="text-2xl font-bold uppercase font-primary-font">
                  {price.mensual.hostingstart.name}
                </h2>
                <span>{price.mensual.hostingstart.desc}</span>
                <div>
                  <h2>SSD : {price.mensual.hostingstart.carate.stronge}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-80 md:w-3/4 lg:w-[310px] w-full rounded-md bg-white shadow-2xl">
          <div className="ribbon absolute h-40 w-40 -top-2 -left-2  overflow-hidden before:absolute before:top-0 before:right-0 before:border-4 before:border-red-500  after:absolute after:bottom-0 after:left-0 after:border-4 after:border-red-500">
            <div className="absolute -left-14 top-10 w-60 bg-gradient-to-br from-red-600 via-red-400 to-red-500 py-2.5 text-center text-white shadow-md -rotate-45">
              40% descuento
            </div>
          </div>
        </div>
        <div className="relative h-80 md:w-3/4 lg:w-[310px] w-full rounded-md bg-white shadow-2xl">
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
