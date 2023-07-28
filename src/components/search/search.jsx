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
      <div className="flex items-center border border-grey-200   w-fit lg:w-[800px] md:w-[600px] outline-none  bg-white p-2 justify-araound  rounded-lg overflow-hidden">
        <input
          type="text"
          onChange={handleSearchInput}
          value={searchQuery}
          placeholder="Buscar un dominio"
          className="p-2 px-5 w-full md:w-full lg:w-full h-[50px]  rounded-md focus:outline-none"
        />
        <button
          onClick={handleSearchButtonClick}
          className="bg-second-color text-white px-2 py-3 rounded-lg lg:w-1/4 w-[100px] md:w-1/4 "
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
