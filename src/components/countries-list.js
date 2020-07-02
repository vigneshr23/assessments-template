import React, { Fragment } from 'react';
import ModalContainer from './modal';
import CountryDetails from './country-details';

function Countries({ countries, ...props }) {
  const getRows = () => {
    return countries.map((country, index) => (
      <tr key={country.alpha2Code}>
        <td>{`${country.name} (${country.alpha2Code})`}</td>
        <td>{country.capital}</td>
        <td>{country.population}</td>
        <td>
          <ModalContainer
            title={country.name}
            display={handleHide => <CountryDetails hide={handleHide} country={country} />}
          >
            <button className="btn btn-primary">View Details</button>
          </ModalContainer>
        </td>
      </tr>
    ));
  };
  return (
    <Fragment>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">country Name</th>
            <th scope="col">Capital</th>
            <th scope="col">Population</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{getRows()}</tbody>
      </table>
    </Fragment>
  );
}
export default Countries;
