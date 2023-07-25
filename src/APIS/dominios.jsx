import axios from 'axios';

export const QueryDomains = {
  searchDomains: (query) => {
    return axios.get(
      `https://domain-availability.whoisxmlapi.com/api/v1?apiKey=at_tXQbyND43Dn0a5AY9rRBN6FpzBlEY&domainName=${query}&credits=DA`
    )
    .then((response) => {
      let domainAvailabilityData = response.data.DomainInfo.domainAvailability;
      return domainAvailabilityData;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
  },
};
