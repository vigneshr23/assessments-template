import React from 'react';

function CountryDetails({ country, hide }) {
  const { capital, region, timezones, languages, currencies, callingCodes, flag } = country;
  console.log(capital);
  return (
    <div className="country">
      <div className="container modal__container">
        {flag && (
          <figure className="figure">
            <img src={flag} alt="Flag" />
            <figcaption>{`${country.name} National Flag`}</figcaption>
          </figure>
        )}
        <Fields
          items={[
            {
              label: 'Region',
              value: region
            },
            {
              label: 'Capital City',
              value: capital
            },
            {
              label: 'Time Zone',
              value: timezones
            },
            {
              label: 'Currency',
              value: currencies,
              multiple: true
            },
            {
              label: 'Calling Code',
              value: callingCodes,
              multiple: true
            },
            {
              label: 'Languages',
              value: languages,
              multiple: true
            }
          ]}
        />
      </div>

      <code style={{ visibility: 'hidden' }}>{JSON.stringify(country)}</code>

      <div className="btn btn-primary" style={{ alignSelf: 'center', marginTop: '2rem' }} onClick={() => hide()}>
        Close
      </div>
    </div>
  );
}

export function Fields({ items, className = '' }) {
  const styles = { display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', fontSize: '1.34rem' };
  const getValue = values => {
    return values.map(({ name }) => name).join(', ');
  };
  return (
    <div className={className} style={styles}>
      {items.map(({ label, value, multiple }, index) => (
        <div key={index}>
          <p>
            {label} : <span style={{ fontWeight: '700' }}>{multiple ? getValue(value) : value}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default CountryDetails;
