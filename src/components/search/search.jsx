import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { QueryDomains } from '../../APIS/dominios';

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchButtonClick = () => {
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
    <div className="relative m-2">
      <div className="flex items-center w-[400px] justify-araound border-4 rounded-lg overflow-hidden">
        <input
          type="text"
          onChange={handleSearchInput}
          value={searchQuery}
          placeholder="Buscar dominio"
          className="border-0 p-2 w-full h-[50px] rounded-md focus:outline-none"
        />
        <button
          onClick={handleSearchButtonClick}
          className="bg-[#ff6b00] text-white px-8 py-2 rounded-r-lg"
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
