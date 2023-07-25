import { useState } from 'react';
import Search from '../../components/search/search';

const SeccionBuscar = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (data) => {
    setSearchResults(data);
  };

  return (
    <div className="py-10 px-4 md:px-8 absolute bottom-0 left-0 right-0 top-[1070px]">
      <div className="flex flex-col md:flex-row items-center justify-between mb-4 pl-10 pr-10">
        <div className="md:w-1/2 break-words">
          <h2 className="text-3xl font-semibold mb-2">Registra tu dominio Aquí hoy</h2>
          <p className="text-xl text-gray-600 mb-4">
            En el registro de tu primer dominio .com o .org contratando cualquiera de nuestros planes
          </p>
        </div>
        <div className="md:w-1/2 flex justify-end items-center">
          <Search onSearch={handleSearch} />
        </div>
      </div>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
        {searchResults.map((result, index) => (
          <div
            key={index}
            className="border p-4 rounded-md shadow-md"
          >
            <p className="font-semibold mb-2">Dominio: {result.domain}</p>
            <p className="text-sm">
              Disponibilidad: {result.available ? 'Disponible' : 'No disponible'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeccionBuscar;
