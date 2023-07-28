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
          priceusd: "3,75",
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
          priceusd: "45,96",
        },
      },
    },
  ];

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
      <div className="p-4 flex flex-col items-center  justify-center">
        <div className="flex  bg-[#d4d4d4] rounded-full pl-2 text-white  py-1 w-[160px]">
          <button
            onClick={handleclickHostings}
            className={
              showHostingAnual
                ? "bg-primary-color text-white p-2 rounded-full font-primary-font w-2/2"
                : "bg-primary-color text-white p-2 rounded-full font-primary-font w-2/2 px-4 ml-16"
            }
          >
            {showHostingAnual ? "Mensual" : "Anual"}
          </button>
        </div>

        {showHostingAnual ? (
          <div className="grid grid-cols-3 place-items-center gap-10 py-10 rounded-md text-white">
            {cardsprice.map((hosting, index) => (
              <div
                className="flex flex-col bg-primary-color items-center w-[350px] h-[500px] rounded-xl"
                key={index}
              >
                <div>
                  <h2>{hosting.mensual.hostingstart.name}</h2>
                  <h2>{hosting.mensual.hostingstart.desc}</h2>
                  <h2>{hosting.mensual.hostingstart.price}</h2>
                </div>
              </div>
            ))}
            {cardsprice.map((hosting, index) => (
              <div
                className="flex flex-col bg-primary-color items-center w-[350px] h-[600px] rounded-xl"
                key={index}
              >
                <div>
                  <h2>{hosting.mensual.hostingstart.name}</h2>
                  <h2>{hosting.mensual.hostingstart.desc}</h2>
                  <h2>{hosting.mensual.hostingstart.price}</h2>
                </div>
              </div>
            ))}
            {cardsprice.map((hosting, index) => (
              <div
                className="flex flex-col bg-primary-color items-center w-[350px] h-[500px] rounded-xl"
                key={index}
              >
                <div>
                  <h2>{hosting.mensual.hostingstart.name}</h2>
                  <h2>{hosting.mensual.hostingstart.desc}</h2>
                  <h2>{hosting.mensual.hostingstart.price}</h2>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className=" grid grid-cols-3 py-10 gap-10 items-center rounded-md text-white">
            {cardsprice.map((hosting, index) => (
              <div
                className="bg-primary-color flex flex-col items-center w-[350px] h-[500px] rounded-xl"
                key={index}
              >
                <h2>{hosting.anual.hostingstart.name}</h2>
                <h2>{hosting.anual.hostingstart.desc}</h2>
                <h2>{hosting.anual.hostingstart.price}</h2>
              </div>
            ))}
            {cardsprice.map((hosting, index) => (
              <div
                className="bg-primary-color flex flex-col items-center w-[350px] h-[600px] rounded-xl"
                key={index}
              >
                <h2>{hosting.anual.hostingstart.name}</h2>
                <h2>{hosting.anual.hostingstart.desc}</h2>
                <h2>{hosting.anual.hostingstart.price}</h2>
              </div>
            ))}
            {cardsprice.map((hosting, index) => (
              <div
                className="bg-primary-color flex flex-col items-center w-[350px] h-[500px] rounded-xl"
                key={index}
              >
                <h2>{hosting.anual.hostingstart.name}</h2>
                <h2>{hosting.anual.hostingstart.desc}</h2>
                <h2>{hosting.anual.hostingstart.price}</h2>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default CardsPrice;
