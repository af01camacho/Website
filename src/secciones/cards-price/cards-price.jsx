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
          name: "Hosting Plus",
          desc: "Ideal para tiendas virtual",
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
    if (handleclick == false) {
      setShowHostingAnual(true);
    } else {
      setShowHostingAnual(false);
    }
  };

  return (
    <>
      <div className="">
        <h2>Mensual</h2>
        <h2>Anual</h2>
      </div>
    </>
  );
}

export default CardsPrice;
