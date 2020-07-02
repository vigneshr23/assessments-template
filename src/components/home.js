import React, { useState, useEffect, Fragment } from 'react';
import { handleRequest } from '../utils/fetchUtils';
import Countries from './countries-list';
import Facet from './facet';

function Home() {
  const [countries, setCountries] = useState(null);

  const sortCountriesByPop = sortBy => {
    const _countries = [...countries];
    if (sortBy == 1) {
      //   const population = { countries };
      //   console.log(population);
      setCountries(_countries.sort((a, b) => a.population - b.population));
    } else {
      setCountries(_countries.sort((a, b) => b.population - a.population));
    }
    console.log({ sortBy });
  };

  const getAllCountries = () => {
    handleRequest('https://restcountries.eu/rest/v2/all').then(countries => setCountries(countries));
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  const facetActions = {
    sortCountriesByPop: sortCountriesByPop
  };

  return (
    <div className="container">
      <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>List of Countries</h3>
      {countries ? (
        <Fragment>
          <div>
            <Facet actions={facetActions} />
          </div>
          <div className="countries">
            <Countries countries={countries} />
          </div>
        </Fragment>
      ) : (
        <div> Please Wait...</div>
      )}
    </div>
  );
}

export default Home;
