import { useState } from 'react';
import PropTypes from 'prop-types';
import { QueryDomains } from '../../APIS/dominios';

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchButtonClick = () => {
    console.log('Button clicked!');
    if (searchQuery !== '') {
      QueryDomains.searchDomains(searchQuery)
        .then((data) => {
          console.log('API Response:', data);
          const results = data.map((domain) => ({
            domain: domain.domainName,
            available: domain.domainAvailability === 'AVAILABLE',
          }));
          onSearch(results);
        })
        .catch((error) => {
          console.log(error);
          onSearch([]);
        });
    }
  };

  return (
    <div className="border-4 m-2">
      <input
        type="text"
        onChange={handleSearchInput}
        value={searchQuery}
        placeholder="Search Character"
        className="border-2 p-[5px]"
      />
      <button onClick={handleSearchButtonClick}>Buscar</button>
    </div>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
