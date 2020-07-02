import React, { useState, useEffect, Fragment } from 'react';
import { handleRequest } from '../utils/fetchUtils';
import Countries from './countries-list';
import Facet from './facet';

function Home() {
  const [countries, setCountries] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filter, setFilter] = useState(false);

  const sortCountriesByPop = sortBy => {
    let _countries = [],
      _applySort = null;
    if (filter) {
      // select filtered countries for sort
      _countries = [...filteredCountries];
      _applySort = setFilteredCountries;
    } else {
      _countries = [...countries];
      _applySort = setCountries;
    }
    if (sortBy == 1) {
      // ascending
      _applySort(_countries.sort((a, b) => a.population - b.population));
    } else {
      _applySort(_countries.sort((a, b) => b.population - a.population));
    }
    console.log({ sortBy });
  };

  const filterByName = term => {
    console.log({ term });
    const _term = term.toLowerCase();
    const filtered = countries.filter(({ name, alpha2Code }) => {
      const cname = name.toLowerCase();
      const code = alpha2Code.toLowerCase();
      return cname.includes(_term) || code.includes(_term);
    });
    if (term) setFilter(true);
    else setFilter(false);
    setFilteredCountries(filtered);
  };

  const getAllCountries = () => {
    handleRequest('https://restcountries.eu/rest/v2/all').then(countries => setCountries(countries));
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  const facetActions = {
    sortCountriesByPop: sortCountriesByPop,
    filterByName: filterByName
  };

  return (
    <div className="container main">
      <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>List of Countries</h3>
      {countries ? (
        <Fragment>
          <div>
            <Facet actions={facetActions} />
          </div>
          <div className="countries">
            <Countries countries={filter ? filteredCountries : countries} />
          </div>
        </Fragment>
      ) : (
        <div> Please Wait...</div>
      )}
    </div>
  );
}

export default Home;
