import React, { useState, useEffect, Fragment } from 'react';

function Facet({ actions = {} }) {
  return (
    <div className="container facet-container">
      <Filter />
      <Sort handleSort={actions.sortCountriesByPop} />
    </div>
  );
}

function Filter() {
  const [state, setState] = useState('');
  return (
    <div>
      <label>Filter By &nbsp; </label>
      <input placeholder="Country Name or Code" value={state} onChange={e => setState(e.target.value)} />
    </div>
  );
}

function Sort({ handleSort }) {
  const [state, setState] = useState('0');

  //   useEffect(() => {
  //     handleSort(state);
  //   }, [state]);
  const handleSortChange = e => {
    setState(e.target.value);
    handleSort(e.target.value);
  };

  return (
    <div>
      <label>Sort By Population &nbsp;</label>
      <select value={state} onChange={e => handleSortChange(e)}>
        <option value="0" disabled>
          ---
        </option>
        <option value="1">ASC</option>
        <option value="2">DESC</option>
      </select>
    </div>
  );
}

export default Facet;
