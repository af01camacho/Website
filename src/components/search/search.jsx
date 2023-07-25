import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { QueryDomains } from "../../APIS/dominios";

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchButtonClick = () => {
    if (searchQuery !== "") {
      QueryDomains.searchDomains(searchQuery)
        .then((data) => {
          console.log("API Response:", data);
          const results = data.map((domain) => ({
            domain: domain.domainName,
            available: domain.domainAvailability === "AVAILABLE",
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
    <div className="relative m-2 font-primary-font">
      <div className="flex items-center  w-[500px] outline-none border-none bg-white p-2 justify-araound border-4 rounded-lg overflow-hidden">
        <input
          type="text"
          onChange={handleSearchInput}
          value={searchQuery}
          placeholder="Buscar un dominio disponible"
          className="border-0 p-2 px-16 w-full h-[50px] placeholder:text-center rounded-md focus:outline-none"
        />
        <button
          onClick={handleSearchButtonClick}
          className="bg-[#ff6b00] text-white px-9 py-3 rounded-lg w-1/4"
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
