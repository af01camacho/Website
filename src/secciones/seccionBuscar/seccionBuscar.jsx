import { useState } from "react";
import Search from "../../components/search/search";

const SeccionBuscar = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (data) => {
    setSearchResults(data);
  };

  return (
    <div className="relative py-10 px-4 md:px-8 md:top-[330px] md:bg-primary-color lg:px-16">
      <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between mb-4">
        <div className="text-center md:w-fit md:mr-8">
          <h2 className="text-3xl font-extrabold uppercase text-black mb-2 font-primary-font md:text-white">
            Registra tu dominio Aquí hoy
          </h2>
          <p className="text-xl text-gray-400 mb-4 font-primary-font">
            En el registro de tu primer dominio .com o .org contratando cualquiera de nuestros planes
          </p>
        </div>
        <div className="flex justify-center md:justify-end items-center">
          <Search onSearch={handleSearch} />
        </div>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {searchResults.map((result, index) => (
          <div key={index} className="border p-4 rounded-md shadow-md">
            <p className="font-semibold mb-2">Dominio: {result.domain}</p>
            <p className="text-sm">
              Disponibilidad: {result.available ? "Disponible" : "No disponible"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeccionBuscar;
