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
    <div className="relative m-2 font-primary-font  rounded-sm ">
      <div className="flex items-center   w-[460px] lg:w-[800px] md:w-[600px] outline-none border-none bg-white p-2 justify-araound border-4 rounded-lg overflow-hidden">
        <input
          type="text"
          onChange={handleSearchInput}
          value={searchQuery}
          placeholder="Buscar un dominio disponible"
          className="border-0 p-2 px-5 w-full h-[50px] placeholder:px-5 rounded-md focus:outline-none"
        />
        <button
          onClick={handleSearchButtonClick}
          className="bg-second-color text-white px-9 py-3 rounded-lg lg:w-1/4 w-[100px] md:w-1/4 "
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
