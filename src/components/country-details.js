import React from 'react';

function CountryDetails({ country, hide }) {
  return (
    <div className="country">
      <code>{JSON.stringify(country)}</code>
      <div className="btn btn-primary" onClick={() => hide()}>
        Close
      </div>
    </div>
  );
}
export default CountryDetails;
