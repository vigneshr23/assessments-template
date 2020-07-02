import React, { useState, useEffect, Fragment } from 'react';

function Facet({ actions = {} }) {
  return (
    <div className="container facet-container">
      <Filter handleFilter={actions.filterByName} />
      <Sort handleSort={actions.sortCountriesByPop} />
    </div>
  );
}

function Filter({ handleFilter }) {
  const [state, setState] = useState('');
  const handleChange = e => {
    setState(e.target.value);
    handleFilter(e.target.value);
  };
  return (
    <div>
      <label>Filter By &nbsp; </label>
      <input placeholder="Country Name or Code" value={state} onChange={e => handleChange(e)} />
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
