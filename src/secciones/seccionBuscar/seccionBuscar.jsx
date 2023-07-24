import { useState } from 'react';
import Search from '../../components/search/search';

const SeccionBuscar = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (data) => {
    setSearchResults(data);
  };

  return (
    <div className=''>
      <Search onSearch={handleSearch} />
      {searchResults.map((result, index) => (
        <p key={index}>
          El dominio {result.domain} está {result.available ? 'Disponible' : 'No disponible'}
        </p>
      ))}
    </div>
  );
};

export default SeccionBuscar;
